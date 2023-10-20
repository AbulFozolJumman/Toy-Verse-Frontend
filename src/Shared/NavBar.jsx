import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";

// This is Footer section
const NavBar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    console.log("nav", user);

    // This is User logout handler
    const handleSignOut = () => {
        userSignOut()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="py-3 shadow-lg">
            <div className="navbar bg-transparent p-5 font-bold max-w-7xl mx-auto container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allToys'>All Toys</Link></li>
                            {
                                user && <>
                                    <li><Link to='/myToys'>My Toys</Link></li>
                                    <li><Link to='/addToy'>Add A Toy</Link></li>
                                    {/* <li><Link to='/error'>Error</Link></li> */}
                                </>
                            }
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-28" src="https://i.ibb.co/WygR9cw/Toy-Verse-Logo.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        {
                            user && <>
                                <li><Link to='/myToys'>My Toys</Link></li>
                                <li><Link to='/addToy'>Add A Toy</Link></li>
                            </>
                        }
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {/* <li><Link to='/error'>Error</Link></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ?
                                <div className="flex items-center justify-center">
                                    <div className="tooltip tooltip-left tooltip-info" data-tip={user?.displayName}>
                                        <img className="h-12 rounded-full" src={user?.photoURL} alt="" />
                                    </div>
                                    <button onClick={handleSignOut} className="btn btn-ghost px-3"><span className="text-4xl text-pink-500"><FaSignOutAlt></FaSignOutAlt></span></button>
                                </div>
                                : <li className="list-none bg-pink-500 hover:bg-pink-400 text-pink-900 hover:text-pink-800 font-bold px-4 py-2 rounded-md"><Link to='/login'>Login</Link></li>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;