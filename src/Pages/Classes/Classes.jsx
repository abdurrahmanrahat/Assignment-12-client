// import ClassesCoverImg from "../../assets/classes-page-cover.jpg";
import ClassesBannerImg from "../../assets/student-img.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BannerComponent from "../../components/BannerComponent/BannerComponent";

const Classes = () => {
  // const [allClasses, setAllClasses] = useState([]);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //     fetch('https://assignment-12-server-lyart-xi.vercel.app/approvedClasses', {
  //         method: 'GET'
  //     })
  //         .then(res => res.json())
  //         .then(data => setAllClasses(data))
  // }, [])

  const { data: classes = [] } = useQuery(
    ["approvedClasses"],
    async () => {
      const res = await fetch(
        "https://assignment-12-server-lyart-xi.vercel.app/approvedClasses"
      );
      return res.json();
    },
    {
      refetchInterval: 1000,
    }
  );

  // handle select class by students
  const handleSelectClass = (sinClass) => {
    console.log(sinClass);
    const {
      _id,
      classNameSpe,
      classImg,
      instructorName,
      instructorEmail,
      price,
      seats,
      totalES,
    } = sinClass;

    if (user && user.email) {
      //
      const selectedClass = {
        classId: _id,
        classNameSpe,
        classImg,
        instructorName,
        instructorEmail,
        price,
        seats,
        totalES,
        userEmail: user.email,
      };
      console.log(selectedClass);

      // send this item to the server
      fetch(
        "https://assignment-12-server-lyart-xi.vercel.app/selectedClasses",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectedClass),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // refetch here
            Swal.fire({
              title: "Success!",
              text: "Class Successfully Selected",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      //
      Swal.fire({
        title: "Please login select the class",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <BannerComponent
        bgCover={ClassesBannerImg}
        pageName="Classes"
        headingTitle="Famous Courses Lists"
      />

      {/* title */}
      <SectionTitle
        subHeading="Select your desired"
        heading="few classes"
      ></SectionTitle>

      {/* Table Here */}
      <div className="overflow-x-auto my-10">
        <table className="table shadow-lg text-white text-lg ">
          {/* head */}
          <thead className="py-2">
            <tr className="bg-gray-900 text-white text-lg">
              <th className="py-4">#</th>
              <th className="text-left">Photo</th>
              <th className="text-left">Class Name</th>
              <th className="text-left">Instructor Name</th>
              <th className="text-left">Available Seats</th>
              <th className="text-right pe-4">Price</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((sinClass, index) => (
              <tr
                key={index}
                className="bg-gradient-to-r from-[#FFBD00] to-[#EE9322] text-white "
              >
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-16 h-16">
                        <img
                          src={sinClass.classImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-lg">
                    <span className="badge bg-yellow-400 text-lg">
                      {sinClass.classNameSpe}
                    </span>
                  </div>
                </td>
                <td className="text-lg">{sinClass.instructorName}</td>
                <td className="text-lg">{sinClass.seats}</td>
                <td className="text-lg text-right">${sinClass.price}</td>
                <td>
                  <button
                    onClick={() => handleSelectClass(sinClass)}
                    className="btn btn-ghost btn-sm bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white"
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
