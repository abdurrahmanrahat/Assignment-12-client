import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';

const Header = () => {
    const [users, setUsers] = useState();

    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const roleUser = users?.filter(u => u.email === user?.email);
    const matchUserRole = roleUser?.[0]?.role;
    // console.log(matchUserRole);


    const isAdmin = matchUserRole === 'admin';
    const isInstructor = matchUserRole === 'instructor';
    const isStudent = matchUserRole === 'student';

    const navLists = <>
        <li className='text-lg'><Link to='/'>Home</Link></li>
        <li className='text-lg'><Link to='/instructors'>Instructors</Link></li>
        <li className='text-lg'><Link to='/classes'>Classes</Link></li>
        {
            isAdmin && <li className='text-lg'><Link to='/dashboard/manageclasses'>Dashboard </Link></li>
        }
        {
            isInstructor && <li className='text-lg'><Link to='/dashboard/myclasses'>Dashboard </Link></li>
        }
        {
            isStudent && <li className='text-lg'><Link to='/dashboard/myselectedclass'>Dashboard </Link></li>
        }
    </>

    // Handle Logout
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar fixed z-10 bg-opacity-40 bg-black max-w-screen-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLists}
                    </ul>
                </div>
                <Link to="/"><img className='w-20' src={Logo} alt="" /></Link>
                <h2 className='text-4xl font-medium ml-2'>FLLS</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLists}
                </ul>
            </div>
            <div className="navbar-end">
                <span className='mr-4'><ThemeToggle></ThemeToggle></span>
                {
                    user ? <>
                        <img className='w-12 rounded-full mr-4' src={user.photoURL} alt="" />
                        <button onClick={handleLogout} className="btn btn-active text-lg bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">logOut</button>
                    </> :
                        <Link to='/login'>
                            <button className="btn btn-active text-lg bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Header;