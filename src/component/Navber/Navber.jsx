import { Link, NavLink } from "react-router-dom";
import Contai from "../Shared/Contai";




const Navber = () => {






    const navitem = <>
        <p>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#ff5151] underline font-black  ' : " text-[#15e4ff] font-bold"
            }>Home</NavLink>
        </p>

        <p>
            <NavLink to='/project' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#ff5151] underline font-black  ' : " text-[#15ff76] font-bold "
            }>My Project</NavLink>
        </p>

        <p>
            <NavLink to='/resume' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#ff5151] underline font-black  ' : " text-[#15ff76] font-bold "
            }>Resume</NavLink>
        </p>
        <p>
            <NavLink to='/contact' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#ff5151] underline font-black  ' : " text-[#15ff76] font-bold "
            }>Conract</NavLink>
        </p>


    </>
    return (
      <div className="bg-[#be1919]">
          <div className="navbar  max-w-[1200px] mx-auto w-full text-white">
         
         <div className="navbar-start ">
               <div className="dropdown">
                   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                   </div>
                   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-md">
                       {navitem}
                   </ul>
               </div>
               <a className="btn btn-ghost text-xl uppercase">anamul haque</a>
           </div>
           <div className="navbar-center hidden lg:flex">
               <ul className="menu  menu-horizontal px-1 flex gap-5 text-lg">
                   {navitem}
               </ul>
           </div>
           <div className="navbar-end ">
               <NavLink to='https://github.com/Anamul9901' target="_blank" className="btn btn-sm">GitHub</NavLink>
           </div>
         
       </div>
      </div>

    );
};

export default Navber;