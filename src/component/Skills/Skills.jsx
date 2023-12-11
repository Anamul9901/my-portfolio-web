import Contai from "../Shared/Contai";


const Skills = () => {
    return (
        <div className="bg-neutral-300 py-20">
            <Contai>
           <div >
           <h2>Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                <div>
                    <h2 className="font-bold">HTML</h2>
                    <progress className="progress w-full progress-success " value={100} max="100"></progress>
                </div>

                <div>
                    <h2 className="font-bold">CSS</h2>
                    <progress className="progress progress-success w-full" value="80" max="100"></progress>
                </div>

                <div>
                    <h2 className="font-bold">JAVASCRIPT</h2>
                    <progress className="progress progress-success w-full" value="70" max="100"></progress>
                </div>

                <div>
                    <h2 className="font-bold">REACT</h2>
                    <progress className="progress progress-success w-full" value="80" max="100"></progress>
                </div>

                <div>
                    <h2 className="font-bold">TAILWIND</h2>
                    <progress className="progress progress-success w-full" value="100" max="100"></progress>
                </div>
            </div>
           </div>
            </Contai>

        </div>
    );
};

export default Skills;