// import { useState } from "react";
// import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
// import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
    // const [allClasses, setAllClasses] = useState([]);
    // const [approvedClasses, setApprovedClasses] = ([]);
    // const approvedClasses = useLoaderData();

    // get data from classes collection
    // useEffect(() => {
    //     fetch('https://assignment-12-server-lyart-xi.vercel.app/classes', {
    //         method: 'GET'
    //     })
    //         .then(res => res.json())
    //         .then(data => setAllClasses(data))
    // }, [])

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://assignment-12-server-lyart-xi.vercel.app/classes')
        return res.json();
    },
        {
            refetchInterval: 1000,
        }
    )


    // Handle Approve Class
    const handleApproveClass = sinClass => {
        console.log(sinClass);
        // const alreadyApproved = approvedClasses.filter(c => c._id === sinClass._id);
        // console.log('Already Approved class', alreadyApproved);
        // return;

        fetch('https://assignment-12-server-lyart-xi.vercel.app/approvedClasses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sinClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'The Class successfully approved',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                fetch(`https://assignment-12-server-lyart-xi.vercel.app/classes/${sinClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // const remaining = allClasses.filter(c => c._id !== sinClass._id);
                            // setAllClasses(remaining);
                            refetch();
                        }
                    })
            })
    }

    // Handle Deny Class
    const handleDenyClass = sinClass => {
        // console.log(sinClass);
        fetch(`https://assignment-12-server-lyart-xi.vercel.app/classes/${sinClass._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Successfully Deleted!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    refetch();
                }
            })
    }

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
                            classes?.map((sinClass, index) => <tr
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
                                    <button onClick={() => handleApproveClass(sinClass)} className="btn btn-ghost btn-xs bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Approve</button> <br />
                                    <button onClick={() => handleDenyClass(sinClass)} className="btn btn-ghost btn-xs bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Deny</button> <br />
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