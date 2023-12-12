import Contai from "../Shared/Contai";
import './AboutMe.css'
import { MdArrowForwardIos } from "react-icons/md";


const AboutMe = () => {
    return (
        <div className="styleAbout text-white pb-10">
            <Contai>
                <h2 className="text-2xl font-bold py-10">LEARN MORE ABOUT ME</h2>
                <div className="md:flex items-center">

                    <div className="flex justify-center">
                        <img className="w-52" src={'https://i.ibb.co/161dhbQ/Anamul.jpg'} alt="" />
                    </div>

                <div className="flex-1 ml-4">
                    <div className=" ">
                        <h2 className="text-xl font-bold pb-2 pt-5 md:pt-0 text-center md:text-left">Website Developer</h2>
                        <p>As a web developer who is eager to continuously improve myself in the field of website, I am applying to you. I want to focus on my contributions and goals in the field of web development. With my experience and skills in the website world, I can help you successfully realise your projects. I am constantly trying to learn and improve myself by following the latest developments in the sector I am in.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 pt-3">
                        <div className=" ">
                            <p className="flex items-center">
                                <span className="text-green-500"><MdArrowForwardIos /></span>
                                <p><span className="font-bold">Name:</span> Anamul Haque</p>
                            </p>
                        </div>
                        <div className=" ">
                            <p className="flex items-center">
                                <span className="text-green-500"><MdArrowForwardIos /></span>
                                <p><span className="font-bold">Birthday:</span> 10-02-2004</p>
                            </p>
                        </div>
                        <div className=" ">
                            <p className="flex items-center">
                                <span className="text-green-500"><MdArrowForwardIos /></span>
                                <p><span className="font-bold">Age:</span> 19</p>
                            </p>
                        </div>
                        <div className=" ">
                            <p className="flex items-center">
                                <span className="text-green-500"><MdArrowForwardIos /></span>
                                <p><span className="font-bold">Website:</span> https://anamul-portfolio.surge.sh/project</p>
                            </p>
                        </div>

                        <div className=" ">
                            <p className="flex items-center">
                                <span className="text-green-500"><MdArrowForwardIos /></span>
                                <p><span className="font-bold">Phone:</span> +8809696668089</p>
                            </p>
                        </div>
                        <div className=" ">
                            <p className="flex items-center">
                                <span className="text-green-500"><MdArrowForwardIos /></span>
                                <p><span className="font-bold">Mail:</span> anamulhaque9901@gmail.com</p>
                            </p>
                        </div>
                        <div className=" ">
                            <p className="flex items-center">
                                <span className="text-green-500"><MdArrowForwardIos /></span>
                                <p><span className="font-bold">Location:</span> Dhaka, Bangladesh</p>
                            </p>
                        </div>
                        <div className=" ">
                            <p className="flex items-center">
                                <span className="text-green-500"><MdArrowForwardIos /></span>
                                <p><span className="font-bold">Freelance:</span> Available</p>
                            </p>
                        </div>
                    </div>
                        <div className="pt-3">
                            <h2>I am a fontend developer. I am at the beginning of my career and I am trying my best to improve myself.</h2>
                        </div>

                </div>
                </div>
            </Contai>
        </div>
    );
};

export default AboutMe;