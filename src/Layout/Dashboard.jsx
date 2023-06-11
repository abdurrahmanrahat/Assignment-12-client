import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaUsers } from "react-icons/fa";


const Dashboard = () => {
    const isAdmin = true;

    const navLists = <>
        {
            isAdmin && <>
                {/* admin menu */}
                <li><NavLink to="/dashboard/manageclasses"><FaBook />Manage Classes</NavLink></li>
                <li><NavLink to="/dashboard/manageusers"><FaUsers />Manage Users</NavLink></li>
            </>
        }
        <li className="md:mx-16 text-lg"><NavLink to="/"><FaHome />Home</NavLink></li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-[#0B0016] text-white">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        {
                            isAdmin && <span className="text-xl font-semibold ml-14">Admin Dashboard</span>
                        }
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal flex items-center">
                            {/* Navbar menu content here */}
                            {navLists}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navLists}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;