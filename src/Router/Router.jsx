import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Project from "../Page/Project/Project";
import Resume from "../Page/Resume/Resume";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/project',
                element: <Project />
            },
            {
                path: '/resume',
                element: <Resume />
            }
        ]
    }
])
export default router;