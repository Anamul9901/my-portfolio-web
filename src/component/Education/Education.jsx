import Contai from "../Shared/Contai";


const Education = () => {
    return (
        <div className="py-10 style text-white">
            <Contai>
           
            <h2>education</h2>
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
            </Contai>
        </div>
    );
};

export default Education;