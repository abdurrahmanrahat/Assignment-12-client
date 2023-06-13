import { useQuery } from "@tanstack/react-query";
import instructorCoverImg from '../../assets/instructor-img.jpg';
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Instructors = () => {

    const { data: allUsers = [] } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const instructors = allUsers?.filter(u => u.role === 'instructor');

    return (
        <div>
            <div>
                <img src={instructorCoverImg} className=' md:h-screen w-screen' alt="" />
            </div>

            {/* section title */}
            <SectionTitle
                subHeading='Are you ready to see'
                heading='All Instructors'
            ></SectionTitle>

            {/* Table for listing all instructors */}
            <div className="overflow-x-auto mb-12">
                <table className="border-collapse w-full bg-white shadow-lg">
                    {/* Head */}
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-3 border-b">#</th>
                            <th className="px-4 py-3 border-b">Image</th>
                            <th className="px-4 py-3 border-b">Name</th>
                            <th className="px-4 py-3 border-b">Email</th>
                            <th className="px-4 py-3 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map((instructor, index) => <tr
                                key={instructor._id}
                                className="bg-gray-100">
                                <td className="px-4 py-3 border-b text-center">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-3 border-b ">
                                    <div className="flex items-center space-x-3">
                                        <div className="rounded-full w-20 h-20 overflow-hidden mx-auto">
                                            <img
                                                src={instructor.photo}
                                                alt="Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-xl border-b text-center">{instructor.name}</td>
                                <td className="px-4 py-3 border-b text-center">{instructor.email}</td>
                                <td className="px-4 py-3 border-b text-center">
                                    <button className="px-4 py-2 rounded text-lg bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Details</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default Instructors;