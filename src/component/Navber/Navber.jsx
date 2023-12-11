import { Link, NavLink } from "react-router-dom";




const Navber = () => {






    const navitem = <>
        <li>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#ff5151] underline font-black md:text-xl ' : "lg:text-white text-[#f76b00] font-bold md:text-xl"
            }>Home</NavLink>
        </li>

        <li>
            <NavLink to='/project' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#ff5151] underline font-black md:text-xl ' : "lg:text-white text-[#f76b00] font-bold md:text-xl"
            }>My Project</NavLink>
        </li>

        <li>
            <NavLink to='/resume' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#ff5151] underline font-black md:text-xl ' : "lg:text-white text-[#f76b00] font-bold md:text-xl"
            }>Resume</NavLink>
        </li>
        <li>
            <NavLink to='/contact' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#ff5151] underline font-black md:text-xl ' : "lg:text-white text-[#f76b00] font-bold md:text-xl"
            }>Conract</NavLink>
        </li>


    </>
    return (
        <div className="bg-opacity-100 bg-black text-white max-w-[1250px] mx-auto">

            <div className="navbar fixed z-10 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitem}
                        </ul>
                    </div>
                    <Link to='/'>
                        <div className="flex items-center">
                           
                            <h2 className="font-bold md:text-xl">ANAMUL HAQUE</h2>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitem}
                    </ul>
                </div>
                
                <div className="navbar-end">
                    


                </div>
            </div>
        </div>

    );
};

export default Navber;