import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const img_hosting_tkn = import.meta.env.VITE_image_uplode_token;

const AddaClass = () => {

    const { user } = useContext(AuthContext);

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_tkn}`;

    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.classImage[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    console.log(imgURL);

                    const { classNameSpe, instructorName, instructorEmail, price, seats } = data;
                    const newClass = {
                        classNameSpe,
                        classImg: imgURL,
                        instructorName,
                        instructorEmail,
                        price: parseFloat(price),
                        seats: parseFloat(seats),
                        totalES: 0
                    }
                    console.log(newClass);
                    // send newClass to the db
                    fetch('http://localhost:5000/classes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            reset();
                            Swal.fire({
                                title: 'Success!',
                                text: 'New Class successfully pushed',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                                // setTimeout: 1000
                            })
                        }
                    })
                }
            })

    };

    return (
        <div>
            {/* Section Title */}
            <SectionTitle
                heading='upload class'
                subHeading='Are you ready to'
            ></SectionTitle>

            {/* Form Here */}
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 mx-4 md:mx-auto">

                <div className="flex gap-8 md:mb-4">
                    {/* Instructor Name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" placeholder="Instructor name" defaultValue={user?.displayName} {...register("instructorName", { required: true })} className="input input-bordered w-full" readOnly />
                    </div>
                    {/* Instructor Email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="text" placeholder="Instructor name" defaultValue={user?.email} {...register("instructorEmail", { required: true })} className="input input-bordered w-full" readOnly />
                    </div>
                </div>

                <div className="md:flex gap-8 md:mb-4">
                    {/* Class Name Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" placeholder="Class name" {...register("classNameSpe", { required: true })} className="input input-bordered w-full " />
                    </div>

                    {/* Class Photo Upload */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image*</span>
                        </label>
                        <input type="file" {...register("classImage", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                </div>

                <div className="md:flex gap-8">
                    {/* Available Seats Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="text" placeholder="00" {...register("seats", { required: true })} className="input input-bordered w-full " />
                    </div>

                    {/* Available Seats Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="text" placeholder="$" {...register("price", { required: true })} className="input input-bordered w-full" />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center my-10">
                    <input className="btn btn-outline mt-4 text-lg bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddaClass;