import Contai from "../Shared/Contai";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SiPolymerproject } from "react-icons/si";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { CiStreamOn } from "react-icons/ci";


const Education = () => {
    return (
        <div className="py-10 style text-white">
            <Contai>

                <h2 className="text-2xl font-bold uppercase pt-2 pb-8">education</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr className="text-white">
                                    <th>No.</th>
                                    <th>Exam</th>
                                    <th>School/Clg</th>
                                    <th>Poient</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>PSC</td>
                                    <td>Prijkandi Primary School</td>
                                    <td>A+</td>
                                    <td>2014</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>JSC</td>
                                    <td>Prijkandi High School</td>
                                    <td>A+</td>
                                    <td>2018</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>SSC</td>
                                    <td>Prijkandi High School</td>
                                    <td>A+</td>
                                    <td>2020</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>HSC</td>
                                    <td>Narsingdi Gov. College</td>
                                    <td>A+</td>
                                    <td>2022</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>BSc in CSE</td>
                                    <td>NU</td>
                                    <td>Not yet(1st semister)</td>
                                    <td>2027</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold pt-12 pb-10">INTERESTS</h2>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
                            <div className=" p-4 flex items-center gap-4 bg-stone-800 rounded-md cursor-pointer">
                                <MdOutlineSettingsSuggest className="text-2xl"/>
                                <h2>New Technologies</h2>
                            </div>
                            <div className=" p-4 flex items-center gap-4 bg-stone-800 rounded-md cursor-pointer">
                                <SiPolymerproject className="text-2xl"/>
                                <h2>
                                    Developing a project</h2>
                            </div>
                            <div className=" p-4 flex items-center gap-4 bg-stone-800 rounded-md cursor-pointer">
                                <LiaNetworkWiredSolid className="text-2xl"/>
                                <h2>Networking</h2>
                            </div>
                            <div className=" p-4 flex items-center gap-4 bg-stone-800 rounded-md cursor-pointer">
                                <CiStreamOn className="text-2xl"/>
                                <h2>
                                    Live Stream</h2>
                            </div>

                        </div>
                    </div>

                </div>

            </Contai>
        </div>
    );
};

export default Education;