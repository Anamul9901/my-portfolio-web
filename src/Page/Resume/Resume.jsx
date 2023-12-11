
import Contai from "../../component/Shared/Contai";
import pdf from "../../assets/Image/Niche Selection.pdf"



const Resume = () => {

    

    return (
        <div className="style h-screen pt-20">
            <Contai>
                <div className="actual-receipt card text-white bg-zinc-700 p-4">
                    <h2>Resume</h2>
                    <h2 className="text-3xl font-bold">CHECK MY RESUME</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-10">
                        <div>
                            <h2>Sumary</h2>
                            <h2>ANAMUL HAQUE</h2>
                            <p>I am a fontend developer. I a at the beginning of my career and i am trying my berst to improve myself.</p>
                            <ol>
                                <li>Dhaka, Bangladesh</li>
                                <li> (+880)1864668089</li>
                                <li>anamulhaque9901@gmail.com</li>
                            </ol>
                        </div>

                        <div>
                            <h2>Sumary</h2>
                            <h2>ANAMUL HAQUE</h2>
                            <p>I am a fontend developer. I a at the beginning of my career and i am trying my berst to improve myself.</p>
                            <ol>
                                <li>Dhaka, Bangladesh</li>
                                <li> (+880)1864668089</li>
                                <li>anamulhaque9901@gmail.com</li>
                            </ol>
                        </div>

                        <div>
                            <h2>Sumary</h2>
                            <h2>ANAMUL HAQUE</h2>
                            <p>I am a fontend developer. I a at the beginning of my career and i am trying my berst to improve myself.</p>
                            <ol>
                                <li>Dhaka, Bangladesh</li>
                                <li> (+880)1864668089</li>
                                <li>anamulhaque9901@gmail.com</li>
                            </ol>
                        </div>

                        <div>
                            <h2>Sumary</h2>
                            <h2>ANAMUL HAQUE</h2>
                            <p>I am a fontend developer. I a at the beginning of my career and i am trying my berst to improve myself.</p>
                            <ol>
                                <li>Dhaka, Bangladesh</li>
                                <li> (+880)1864668089</li>
                                <li>anamulhaque9901@gmail.com</li>
                            </ol>
                        </div>

                        <div>
                            <h2>Sumary</h2>
                            <h2>ANAMUL HAQUE</h2>
                            <p>I am a fontend developer. I a at the beginning of my career and i am trying my berst to improve myself.</p>
                            <ol>
                                <li>Dhaka, Bangladesh</li>
                                <li> (+880)1864668089</li>
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