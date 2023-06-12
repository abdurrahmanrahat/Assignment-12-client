import { useEffect } from 'react';
import ClassesCoverImg from '../../assets/classes-page-cover.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useState } from 'react';

const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setAllClasses(data))
    }, [])

    return (
        <div>
            <div>
                <img src={ClassesCoverImg} className=' h-screen w-screen' alt="" />
            </div>
            {/* title */}
            <SectionTitle
                subHeading='Select your desired'
                heading='few classes'
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
                            <th className="text-left">Instructor Name</th>
                            <th className="text-left">Available Seats</th>
                            <th className="text-right pe-4">Price</th>
                            <th className="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map((sinClass, index) => <tr
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
                                <td className="text-lg">{sinClass.seats}</td>
                                <td className="text-lg text-right">${sinClass.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-sm bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Select</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Classes;