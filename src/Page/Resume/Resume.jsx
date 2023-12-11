import { useState } from "react";
import Contai from "../../component/Shared/Contai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";



const Resume = () => {
    const [loader, setLoader] = useState(false);

    const downloadPDF = () =>{
        const capture = document.querySelector('.actual-receipt');
        setLoader(true);
        html2canvas(capture).then((canvas)=>{
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('receipt.pdf');
        })
    }

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

                <div className="relative text-center -mt-20">
                <button className="receipt-modal-download-button text-white font-bold btn bg-pink-500 "
                onClick={downloadPDF}
                disabled={!(loader===false)}
                > 
                    
                    {loader?(
                        <span className="text-pink-500">Downloading...</span>
                    ):(
                        <span>Download</span>
                    )}
                </button>
                </div>

            </Contai>
        </div>
    );
};

export default Resume;