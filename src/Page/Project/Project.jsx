import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Contai from "../../component/Shared/Contai";

const Project = () => {
    return (
        <div className="pt-20 style h-full ">
            <Contai>
                <div className=" flex justify-center">
                    <Carousel>
                        <div>

                            <img className="w-52" src={'https://i.ibb.co/DRJHjn7/target3.jpg'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/WfVT66Q/target1.jpg'} />
                        </div>
                        <div>
                            <img className="w-52" src={'https://i.ibb.co/DRJHjn7/target3.jpg'} />
                        </div>

                    </Carousel>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-20">

                    <div className="card glass text-white">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary">Live demo</button>
                                <button className="btn btn-sm btn-primary">view code</button>
                            </div>
                        </div>
                    </div>

                    <div className="card glass text-white">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-primary">Live demo</button>
                                <button className="btn btn-sm btn-primary">view code</button>
                            </div>
                        </div>
                    </div>

                    <div className="card glass text-white">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary">Live demo</button>
                                <button className="btn btn-sm btn-primary">view code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Contai>
        </div>
    );
};

export default Project;