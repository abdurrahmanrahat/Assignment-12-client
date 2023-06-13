import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyClasses = () => {
    const [instructorClasses, setInstructorClasses] = useState([]);
    const { user } = useContext(AuthContext);

    const feedback = false;

    useEffect(() => {
        fetch(`http://localhost:5000/approvedClasses?email=${user?.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setInstructorClasses(data))
    }, [user])

    return (
        <div>
            {/* Title */}
            <SectionTitle
                subHeading='Here are listed'
                heading='Your Classes'
            ></SectionTitle>

            {/* Table Here */}
            <div className="overflow-x-auto my-10">
                <table className="table shadow-lg text-white text-lg ">
                    {/* head */}
                    <thead className="py-2">
                        <tr className="bg-gradient-to-r from-[#0b0016] to-[#0a0115e7] text-white text-lg">
                            <th className="py-4">#</th>
                            <th className="text-left">Photo</th>
                            <th className="text-left">Class Name</th>
                            <th className="text-left">Status</th>
                            <th className="text-left">TotalEStudents</th>
                            <th className="text-left">Action</th>
                            {
                                feedback && <th className="text-left">Action</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClasses.map((sinClass, index) => <tr
                                key={index}
                                className="bg-gradient-to-r from-[#FFBD00] to-[#F75DC8] text-white ">
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="rounded-full w-16 h-16">
                                                <img src={sinClass.classImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-lg">
                                        <span className="badge bg-yellow-400 text-lg">{sinClass.classNameSpe}</span>
                                    </div>
                                </td>
                                <td className="text-lg">Approved</td>
                                <td className="text-lg">{sinClass.totalES}</td>
                                <td>
                                    <button className="btn btn-ghost btn-sm bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Update</button>
                                </td>
                                {
                                    feedback && <td></td>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;