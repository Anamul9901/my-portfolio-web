import Contai from "../Shared/Contai";
import './AboutMe.css'
import { MdArrowForwardIos } from "react-icons/md";


const AboutMe = () => {
    return (
        <div className="styleAbout text-white">
            <Contai>
                <h2 className="text-2xl font-bold">LEARN MORE ABOUT ME</h2>
                <div className=" ">
                    <div className=" ">
                    <h2 className="text-3xl font-bold">Website Developer</h2>
                        <p>As a web developer who is eager to continuously improve myself in the field of website, I am applying to you. I want to focus on my contributions and goals in the field of web development. With my experience and skills in the website world, I can help you successfully realise your projects. I am constantly trying to learn and improve myself by following the latest developments in the sector I am in.</p>
                    </div>

                    <div className=" ">
                         <p className="flex items-center">
                         <span className="text-green-500"><MdArrowForwardIos /></span>
                         <p><span className="font-bold">Birthday:</span> 10-02-2004</p>
                         </p>
                    </div>
                    
                </div>
            </Contai>
        </div>
    );
};

export default AboutMe;