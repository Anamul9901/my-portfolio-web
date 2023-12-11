import AboutMe from "../../component/AboutMe/AboutMe";
import Banner from "../../component/Banner/Banner";
import Education from "../../component/Education/Education";
import Skills from "../../component/Skills/Skills";



const Home = () => {
    return (
        <div>

            <Banner />
            <Skills />
            <AboutMe />
            <Education />
        </div>
    );
};

export default Home;