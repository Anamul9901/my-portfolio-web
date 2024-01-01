
import Contai from "../../component/Shared/Contai";
import pdf from "../../assets/Image/Anamul's_Resume .pdf"



const Resume = () => {



    return (
        <div className="style pt-20 ">
            <Contai>
                <div className="actual-receipt bg-white text-black   p-20">
                    {/* <h2>Resume</h2>
                    <h2 className="text-3xl font-bold">CHECK MY RESUME</h2> */}

                    <div className="grid grid-cols-1 gap-5 gap-y-10">
                        <div>

                            <div className="flex justify-between pb-2">
                                <div>
                                    <h2 className="text-5xl font-bold">ANAMUL HAQUE</h2>
                                    <p className="text-2xl font-bold pb-3">Frontend Developer</p>

                                    <div className="flex gap-6">
                                        <div>
                                            <div className="flex gap-2">
                                                <a className="text-blue-700 font-bold text-sm underline" href="https://anamul-portfolio.surge.sh/"
                                                    target="_blan">Portfolio</a>
                                                <a className="text-blue-700 font-bold text-sm underline" href="https://github.com/Anamul9901"
                                                    target="_blan">Github</a>
                                                <a className="text-blue-700 font-bold text-sm underline" href="https://www.linkedin.com/in/anamul-haque-772264299/"
                                                    target="_blan">Linkedin</a>
                                            </div>
                                            <div>
                                                <p className="text-blue-700 underline font-bold text-sm">anamulhaque9901@gmail.com</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm">+8801864668089</p>
                                            <p className="text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>

                                </div>
                                <div  >
                                    <img className="w-[130px]" src={'https://i.ibb.co/161dhbQ/Anamul.jpg'} alt="" />
                                </div>
                            </div>
                            <hr />
                            <h2 className="font-bold text-xl text-blue-500 pt-3">OBJECTIVE</h2>
                            <p>I am a frontend developer. I am at the beginning ofmycareerandIamtryingmybesttoimprovemyself.As
                                a web developer who is eager to continuously improvemyselfinthefieldofwebsites,Iamapplyingtoyou.I
                                wanttofocusonmycontributionsandgoalsinwebdevelopment.</p>
                        </div>

                        <div>
                            <h2 className="font-bold text-xl text-blue-500">SKILLS</h2>
                            <p><span className="font-bold">Forntend: </span>HTML5 || CSS3 || JavaScript || Tailwind CSS || React</p>
                            <p><span className="font-bold">Backend: </span>Node.js || MongoDB || Express.js</p>
                            <p><span className="font-bold">Tools: </span>Git || Github || Firebase || VS Code || NPM || React Router || JWT || Surge || Vercel</p>
                            <p><span className="font-bold">Otheres: </span>Photo Editing || Video Editing</p>
                        </div>

                        <div>
                            <h2 className="font-bold text-xl text-blue-500 pt-3">PROJECT</h2>
                            <div>
                                <p className="font-bold">1. E-commerce: (E-Shop)</p>
                                <p>This is a buy-sell website similar to platforms like Daraz and Alibaba. The platform includes user, shop moderator, and admin roles. Users can purchase
                                    products from any shop. while moderators can add products for sale. Admins oversee and review
                                    activities, taking necessary actions as required.
                                </p>
                                <p className="pt-2"><span className="font-bold text-gray-500">Technologies:</span> React | Node.js | MongoDB</p>
                                <div className="flex gap-4">
                                    <a className="text-blue-700 font-bold text-sm underline" href="https://assignment-12-f43f7.web.app/"
                                        target="_blan">Live web</a>
                                    <a className="text-blue-700 font-bold text-sm underline" href="https://github.com/Anamul9901/e-SHOP-12"
                                        target="_blan">Client code</a>
                                    <a className="text-blue-700 font-bold text-sm underline" href="https://github.com/Anamul9901/e-SHOP-server-12"
                                        target="_blan">Server code</a>
                                </div>
                            </div>
                            <div className="pt-5">
                                <p className="font-bold">2. Library: (TC-Library)    </p>
                                <p>This is an online library website where users can explore books across different categories and access information for downloading.  Users also have the option to borrow any available book from the collection. Admin can add and update books.

                                </p>
                                <p className="pt-2"><span className="font-bold text-gray-500">Technologies:</span> React | Node.js | MongoDB</p>
                                <div className="flex gap-4">
                                    <a className="text-blue-700 font-bold text-sm underline" href="http://anamul-11.surge.sh/"
                                        target="_blan">Live web</a>
                                    <a className="text-blue-700 font-bold text-sm underline" href="https://github.com/Anamul9901/online-college-library-11"
                                        target="_blan">Client code</a>
                                    <a className="text-blue-700 font-bold text-sm underline" href="https://github.com/Anamul9901/e-SHOP-server-12"
                                        target="_blan">Server code</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Sumary</h2>
                            <h2>ANAMUL HAQUE</h2>
                            <p>I am a fontend developer. I a at the beginning of my career and i am trying my berst to improve myself.</p>
                            <ol>
                                <li>Dhaka, Bangladesh</li>
                                <li> +8809696668089</li>
                                <li>anamulhaque9901@gmail.com</li>
                            </ol>
                        </div>
                    </div>

                </div>

                <div className="pt-5 flex justify-center relative -mt-20">
                    <a href={pdf} download><button className="btn btn-sm btn-primary">download</button></a>
                </div>

            </Contai>
        </div>
    );
};

export default Resume;