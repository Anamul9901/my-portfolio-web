import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";
import Footer from "../component/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;