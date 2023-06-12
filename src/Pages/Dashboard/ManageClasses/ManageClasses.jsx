import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageClasses = () => {
    const [allClasses, setAllClasses] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/classes', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setAllClasses(data))
    }, [])
    console.log(allClasses);

    return (
        <div>
            {/* Title */}
            <SectionTitle
                subHeading='Here are listed'
                heading='All Classes'
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
                            <th className="text-left">Ins. Name</th>
                            <th className="text-left">Ins. Email</th>
                            <th className="text-left">Ava. Seats</th>
                            <th className="text-left">Price</th>
                            <th className="text-left">Status</th>
                            <th className="text-left">TotalEStudents</th>
                            <th className="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses?.map((sinClass, index) => <tr
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
                                <td className="text-lg">{sinClass.instructorName}</td>
                                <td className="text-lg">{sinClass.instructorEmail}</td>
                                <td className="text-lg">{sinClass.seats}</td>
                                <td className="text-lg">{sinClass.price}</td>
                                <td className="text-lg">Pending</td>
                                <td className="text-lg text-center">{sinClass.totalES}</td>
                                <td className="text-center">
                                    <button className="btn btn-ghost btn-xs bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Approve</button> <br />
                                    <button className="btn btn-ghost btn-xs bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Deny</button> <br />
                                    <button className="btn btn-ghost btn-xs bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Feedback</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;