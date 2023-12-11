import Contai from "../Shared/Contai";


const Skills = () => {
    return (
        <div className="style py-10 text-white">
            <Contai>
           <div >
           <h2 className="text-2xl font-bold uppercase pb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold">HTML</h2>
                    <h2>100%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={100} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold">CSS</h2>
                    <h2>90%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={90} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold uppercase">javascript</h2>
                    <h2>70%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={70} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold uppercase">react</h2>
                    <h2>80%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={80} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold">MongoDB</h2>
                    <h2>65%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={65} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold">Node.JS</h2>
                    <h2>70%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={70} max="100"></progress>
                </div>
 
            </div>
           </div>
            </Contai>

        </div>
    );
};

export default Skills;