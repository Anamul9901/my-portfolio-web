import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Contai from "../../component/Shared/Contai";
import { NavLink } from "react-router-dom";

const Project = () => {
    return (
        <div className="pt-20 style h-full ">
            <Contai>
                <div className=" flex justify-center">
                    <Carousel>
                        <div>

                            <img className="w-52" src={'https://i.ibb.co/Zgmr2Xf/port-2.png'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/n8S6bhg/Screenshot-332.png'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/bgYjrb6/prot-1.png'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/N6v7Ty6/Screenshot-325.png'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/wwmbLmg/Screenshot-323.png'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/pwZ9x5q/Screenshot-340.png'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/hVmRfBd/Screenshot-336.png'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/S69qHxg/Screenshot-335.png'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/1QwfWMq/Screenshot-339.png'} />
                        </div>

                    </Carousel>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-20">

                    <div className="card glass text-white">
                        <figure><img src={'https://i.ibb.co/bgYjrb6/prot-1.png'} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">e-SHOP</h2>
                            <div className="card-actions justify-end">
                            <NavLink to="https://assignment-12-f43f7.web.app/" target="_blank" className="btn btn-sm btn-primary">Live demo</NavLink>
                                <NavLink to="https://github.com/Anamul9901/e-SHOP-12" target="_blank" className="btn btn-sm btn-primary">view code</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="card glass text-white">
                        <figure><img src={'https://i.ibb.co/bbTjN6C/Screenshot-328.png'} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">TC-Library</h2>
                            <div className="card-actions justify-end">
                                <NavLink to="http://anamul-11.surge.sh/" target="_blank" className="btn btn-sm btn-primary">Live demo</NavLink>
                                <NavLink to="https://github.com/Anamul9901/online-college-library-11" target="_blank" className="btn btn-sm btn-primary">view code</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="card glass text-white">
                        <figure><img src={'https://i.ibb.co/Zgmr2Xf/port-2.png'} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Gaming World</h2>
                            <div className="card-actions justify-end">
                            <NavLink to="https://assignment-9-593b2.web.app/" target="_blank" className="btn btn-sm btn-primary">Live demo</NavLink>
                                <NavLink to="https://github.com/Anamul9901/gamming-world-9" target="_blank" className="btn btn-sm btn-primary">view code</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="card glass text-white">
                        <figure><img src={'https://i.ibb.co/hVmRfBd/Screenshot-336.png'} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">e-Bazar</h2>
                            <div className="card-actions justify-end">
                            <NavLink to="https://assignment-10-5dbf5.web.app/" target="_blank" className="btn btn-sm btn-primary">Live demo</NavLink>
                                <NavLink to="https://github.com/Anamul9901/Online-shop-10" target="_blank" className="btn btn-sm btn-primary">view code</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </Contai>
        </div>
    );
};

export default Project;