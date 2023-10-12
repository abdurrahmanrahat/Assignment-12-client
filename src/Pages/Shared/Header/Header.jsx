import { Link } from "react-router-dom";
import NonUserPhoto from "../../../assets/non-user-photo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
// import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";
import DarkMoodToggle from "../../../components/DarkMoodToggle/DarkMoodToggle";
import ActiveLink from "./ActiveLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [users, setUsers] = useState();

  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://assignment-12-server-lyart-xi.vercel.app/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const roleUser = users?.filter((u) => u.email === user?.email);
  const matchUserRole = roleUser?.[0]?.role;
  // console.log(matchUserRole);

  const isAdmin = matchUserRole === "admin";
  const isInstructor = matchUserRole === "instructor";
  const isStudent = matchUserRole === "student";

  // const navLists = (
  //   <></>
  // );

  // Handle Logout
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-900 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
      <div className="flex items-center justify-between relative">
        {/* logo section */}
        <Link to="/">
          <h1 className="text-3xl font-bold">
            <span className="text-[#EE9322]">Foreign</span>
            <span className="text-[#9875ff]">Tone</span>
          </h1>
        </Link>

        {/* Nav items section */}
        <ul className="hidden lg:flex space-x-5 text-[17px]">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/instructors">Instructors</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/classes">Classes</ActiveLink>
          </li>
          {isAdmin && (
            <li>
              <ActiveLink to="/dashboard/manageclasses">Dashboard</ActiveLink>
            </li>
          )}
          {isInstructor && (
            <li>
              <ActiveLink to="/dashboard/myclasses">Dashboard</ActiveLink>
            </li>
          )}
          {isStudent && (
            <li>
              <ActiveLink to="/dashboard/myselectedclass">Dashboard</ActiveLink>
            </li>
          )}
        </ul>

        {/* Mobile menu */}
        <div className="lg:hidden">
          {/* toggle open icon */}
          <div onClick={() => setIsOpenMenu(true)}>
            <GiHamburgerMenu className="w-12 h-10 text-[#EE9322] p-2 ms-1 " />
          </div>

          {isOpenMenu && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-gray-950 rounded shadow-sm">
                {/* logo and close toggle icon */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/">
                      <h1 className="text-3xl font-bold">
                        <span className="text-[#EE9322]">Foreign</span>
                        <span className="text-[#9875ff]">Tone</span>
                      </h1>
                    </Link>
                  </div>
                  <div onClick={() => setIsOpenMenu(false)}>
                    <IoMdClose className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* mobile nav items */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <ActiveLink to="/">Home</ActiveLink>
                    </li>
                    <li>
                      <ActiveLink to="/instructors">Instructors</ActiveLink>
                    </li>
                    <li>
                      <ActiveLink to="/classes">Classes</ActiveLink>
                    </li>
                    {isAdmin && (
                      <li>
                        <ActiveLink to="/dashboard/manageclasses">
                          Dashboard
                        </ActiveLink>
                      </li>
                    )}
                    {isInstructor && (
                      <li>
                        <ActiveLink to="/dashboard/myclasses">
                          Dashboard
                        </ActiveLink>
                      </li>
                    )}
                    {isStudent && (
                      <li>
                        <ActiveLink to="/dashboard/myselectedclass">
                          Dashboard
                        </ActiveLink>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        {/* Mobile Navlinks end */}

        <div className="flex items-center">
          <div className="hidden md:block mr-4">
            {/* <ThemeToggle></ThemeToggle> */}
            <DarkMoodToggle></DarkMoodToggle>
          </div>
          <div>
            {user ? (
              <>
                <div className="flex">
                  <img
                    className="w-12 rounded-full mr-4 hidden md:block"
                    src={user.photoURL || NonUserPhoto}
                    alt=""
                  />
                  <button
                    onClick={handleLogout}
                    className="text-[17px] px-4 py-2 rounded-sm bg-[#EE9322] hover:bg-[#0E0C1A] text-white border-none"
                  >
                    logOut
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="text-[17px] px-4 py-2 rounded-sm bg-[#EE9322] hover:bg-[#0E0C1A] text-white border-none">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
