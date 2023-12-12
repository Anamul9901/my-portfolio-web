import { NavLink } from "react-router-dom";
import Contai from "../Shared/Contai";
import './Banner.css'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Banner = () => {
    return (
        <div className=" style md:h-[90vh] flex items-center pb-10 pt-10">
            <Contai>
                <div className="flex flex-col-reverse md:flex-row gap-20 md:gap-0 justify-between items-center text-white">
                    <div>
                        <div>
                            <h2 className="text-4xl font-bold">Hi, I'm Anmul Haque</h2>
                            <p className="text-xl pt-3">I'm a passionate Website Developer from Bangladesh</p>
                        </div>
                        <div className="flex items-center justify-center pt-8 gap-5">
                            <NavLink to="https://www.linkedin.com/in/anamul-haque-772264299/" target="_blan" className="btn glass rounded-full text-white text-2xl"><FaLinkedin /></NavLink>

                            <NavLink to="https://github.com/Anamul9901" target="_blank" className="btn glass text-white rounded-full text-2xl"><FaGithub /></NavLink>

                            <NavLink to="https://www.facebook.com/Anamul114" target="_blank" className="btn glass rounded-full text-white text-2xl"><FaFacebook /></NavLink>
                        </div>
                    </div>
                    <div className="pt-10 md:pt-0">
                        <img className="w-64 rounded-3xl shadow-lg" src={'https://i.ibb.co/QJ3NGXj/Anamul-Haque-removebg.png'} alt="" />
                    </div>
                </div>


                
               <div className="text-white pt-20">
               <h2 className="text-2xl font-bold uppercase pb-6">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-bold">HTML</h2>
                            <h2>100%</h2>
                        </div>
                        <progress className="progress w-full progress-error " value={100} max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-bold">CSS</h2>
                            <h2>90%</h2>
                        </div>
                        <progress className="progress w-full progress-error " value={90} max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-bold uppercase">javascript</h2>
                            <h2>70%</h2>
                        </div>
                        <progress className="progress w-full progress-error" value={70} max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-bold uppercase">react</h2>
                            <h2>80%</h2>
                        </div>
                        <progress className="progress w-full progress-error " value={80} max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-bold">MongoDB</h2>
                            <h2>65%</h2>
                        </div>
                        <progress className="progress w-full progress-error " value={65} max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-bold">Node.JS</h2>
                            <h2>70%</h2>
                        </div>
                        <progress className="progress w-full progress-error " value={70} max="100"></progress>
                    </div>

                </div>
               </div>
            </Contai>
        </div>
    );
};

export default Banner;