import { NavLink } from "react-router-dom";
import Contai from "../Shared/Contai";
import './Banner.css'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Banner = () => {
    return (
        <div className=" style h-[80vh] flex items-center">
            <Contai>
                <div className="flex flex-col-reverse md:flex-row gap-20 md:gap-0 justify-between items-center text-white">
                    <div>
                        <div>
                        <h2 className="text-4xl font-bold">Hi, I'm Anmul Haque</h2>
                        <p className="text-xl pt-3">I'm a passionate Software Developer from İstanbul</p>
                        </div>
                        <div className="flex items-center justify-center pt-8 gap-5">
                            <NavLink to="https://www.youtube.com/watch?v=pJQXGmMofro" target="_blan" className="btn glass rounded-full text-white text-2xl"><FaLinkedin /></NavLink>
                            <button className="btn glass text-white rounded-full text-2xl"><FaGithub /></button>
                            <button className="btn glass rounded-full text-white text-2xl"><FaFacebook /></button>
                        </div>
                    </div>
                    <div>
                        <img className="w-64" src={'https://i.ibb.co/QJ3NGXj/Anamul-Haque-removebg.png'} alt="" />
                    </div>
                </div>
            </Contai>
        </div>
    );
};

export default Banner;