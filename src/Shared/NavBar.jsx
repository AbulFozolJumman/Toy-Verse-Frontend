import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 p-5 font-bold max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>All Toys</Link></li>
                            <li><Link to='/'>My Toys</Link></li>
                            <li><Link to='/'>Add A Toy</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-28" src="https://i.ibb.co/WygR9cw/Toy-Verse-Logo.png" alt="" />
                        <h2 className="font-bold text-4xl ml-3">Toy Verse</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>All Toys</Link></li>
                        <li><Link to='/'>My Toys</Link></li>
                        <li><Link to='/'>Add A Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <img className="h-12 rounded-full" src="https://i.ibb.co/WygR9cw/Toy-Verse-Logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;