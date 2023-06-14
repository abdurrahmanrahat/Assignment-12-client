import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
    const [studentSelectedClasses, setStudentSelectedClasses] = useState([]);

    const { user } = useContext(AuthContext);



    useEffect(() => {
        fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setStudentSelectedClasses(data))
    }, [user])

    // Handle delete single class
    const handleDeleteClass = singleClass => {
        // console.log(singleClass);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClasses/${singleClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // refetch here
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = studentSelectedClasses.filter(sinCls => sinCls._id !== singleClass._id);
                            setStudentSelectedClasses(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            {/* Page Title */}
            <SectionTitle
                subHeading='See Selected'
                heading='All Classes'
            ></SectionTitle>

            {/* Table for displaying selected classes */}
            <div className="overflow-x-auto mb-10">
                <table className="table shadow-lg text-white text-lg">
                    {/* head */}
                    <thead className="py-2">
                        <tr className="bg-gradient-to-r from-[#0b0016] to-[#0a0115e7] text-white text-lg">
                            <th className="md:py-4">#</th>
                            <th className="text-left">Photo</th>
                            <th className="text-left">Class Name</th>
                            <th className="text-left">Ins. Name</th>
                            <th className="text-left">Price</th>
                            <th className="text-left">Payment</th>
                            <th className="text-left">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentSelectedClasses.map((singleClass, index) => <tr
                                key={index}
                                className="bg-gradient-to-r from-[#FFBD00] to-[#F75DC8] text-white">
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={singleClass.classImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-lg">
                                        <span className="badge badge-lg bg-yellow-400 text-lg">{singleClass.classNameSpe}</span>
                                    </div>
                                </td>
                                <td className="text-lg">{singleClass.instructorName}</td>
                                <td className="text-lg">${singleClass.price}</td>
                                <td>
                                    <Link to={{ pathname: '/dashboard/payment', state: singleClass.price }}>
                                        <button className="btn btn-ghost btn-sm bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Pay</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteClass(singleClass)} className="btn btn-ghost btn-sm bg-[#0E0C1A] hover:bg-[#0E0C1A] text-white hover:text-white">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;