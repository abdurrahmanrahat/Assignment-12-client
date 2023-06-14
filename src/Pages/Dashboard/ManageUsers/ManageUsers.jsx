import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('https://assignment-12-server-lyart-xi.vercel.app/users', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    // Handle make admin 
    const handleMakeAdmin = user => {

        if (user.role === 'admin') {
            Swal.fire({
                title: 'Error!',
                text: `${user.name} is already admin!`,
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        else {
            fetch(`https://assignment-12-server-lyart-xi.vercel.app/users/admin/${user._id}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount) {
                        // refetch();
                        Swal.fire({
                            title: 'Success!',
                            text: `${user.name} is now Admin!`,
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }

    // Handle Make Instructor
    const handleMakeInstructor = user => {
        console.log(user);

        if (user.role === 'instructor') {
            Swal.fire({
                title: 'Error!',
                text: `${user.name} is already Instructor!`,
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        else {
            fetch(`https://assignment-12-server-lyart-xi.vercel.app/users/instructor/${user._id}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount) {
                        // refetch();
                        Swal.fire({
                            title: 'Success!',
                            text: `${user.name} is now an Instructor!`,
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }

    return (
        <div>
            {/* Title */}
            <SectionTitle
                subHeading='Here are listed'
                heading='All Users'
            ></SectionTitle>

            {/* Table Here */}
            <div className="overflow-x-auto mb-20">
                <table className="table shadow-lg text-white text-lg">
                    {/* head */}
                    <thead className="py-2">
                        <tr className="bg-gradient-to-r from-[#0a0115e7] to-[#0b0016] text-white text-lg">
                            <th className="py-4">#</th>
                            <th className="text-left">UserName</th>
                            <th className="text-left">UserEmail</th>
                            <th className="text-left">Role</th>
                            <th className="text-left">Make Instructor</th>
                            <th className="text-left">Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr
                                key={index}
                                className="bg-gradient-to-r from-[#F75DC8] to-[#FFBD00] text-white">
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td className="text-lg">
                                    {
                                        user.role ? user.role : 'student'
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-sm bg-[#F75DC8] hover:bg-[#0E0C1A] text-white hover:text-white">Instructor</button>
                                </td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-[#F75DC8] hover:bg-[#0E0C1A] text-white hover:text-white">Admin</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;