import Contai from "../Shared/Contai";


const Skills = () => {
    return (
        <div className="bg-gray-300 py-10">
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
                    <h2 className="font-bold">HTML</h2>
                    <h2>100%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={100} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold">HTML</h2>
                    <h2>100%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={100} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold">HTML</h2>
                    <h2>100%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={100} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold">HTML</h2>
                    <h2>100%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={100} max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                    <h2 className="font-bold">HTML</h2>
                    <h2>100%</h2>
                    </div>
                    <progress className="progress w-full progress-success " value={100} max="100"></progress>
                </div>
 
            </div>
           </div>
            </Contai>

        </div>
    );
};

export default Skills;