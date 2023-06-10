import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import usePasswordToggle from "../../Hooks/usePasswordToggle";

const Register = () => {
    const [passwordInputType, toggleIcon] = usePasswordToggle();

    // const [disabled, setDisabled] = useState(null);
    // const passwordRef = useRef();
    // const confirmPassRef = useRef();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photo = data.photo;
        console.log(name, email, password, photo);

    };

    // Handle Pass Match
    // const handlePasswordMatch = () => {
    //     // console.log(passwordRef);
    //     const password = passwordRef.current.value;
    //     const confirmPass = confirmPassRef.current.value;
    //     console.log(password);
    //     if(password === confirmPass){
    //         setDisabled(false);
    //     }

    // }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col w-2/5 p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign UP</h1>
                    <p className='text-sm text-gray-400'>
                        Sign up as a new student
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        {/* Name Field */}
                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'>
                                Your Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name'
                                {...register("name", { required: true, maxLength: 80 })}
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.name?.type === 'required' && <p className="text-red-600 text-xl">Provide your name</p>}
                        </div>

                        {/* Photo Field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="file" {...register("photo", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                            {errors.photo?.type === 'required' && <p className="text-red-600 text-xl">Provide your Photo</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email'
                                {...register("email", { required: true, maxLength: 80 })}
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.email?.type === 'required' && <p className="text-red-600 text-xl">Provide your Email</p>}
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type={passwordInputType}
                                name='password'
                                id='password'
                                // ref={passwordRef}
                                placeholder='*******'
                                {...register("password", { required: true, maxLength: 80 })}
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900'
                            />
                            {errors.password?.type === 'required' && <p className="text-red-600 text-xl">Provide your Password</p>}
                            <span className="absolute top-10 right-4 z-10 cursor-pointer">{toggleIcon}</span>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="relative">
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Confirm Password
                                </label>
                            </div>
                            <input
                                // onBlur={handlePasswordMatch}
                                type={passwordInputType}
                                name='confirmPass'
                                id='confirmPass'
                                // ref={confirmPassRef}
                                placeholder='*******'
                                {...register("confirmPass", { required: true, maxLength: 80 })}
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900'
                            />
                            {errors.confirmPass?.type === 'required' && <p className="text-red-600 text-xl">Match your password</p>}
                            <span className="absolute top-10 right-4 z-10 cursor-pointer">{toggleIcon}</span>
                        </div>
                    </div>

                    <div>
                        <input className='bg-[#0B0016] w-full rounded-md py-3 text-white' type="submit" value="Sign Up" />
                    </div>
                </form>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>

                {/* Google Signin Button */}
                <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FaGoogle size={32} />
                    <p>Continue with Google</p>
                </div>

                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link to='/login' className='hover:underline hover:text-rose-500 text-gray-600'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;