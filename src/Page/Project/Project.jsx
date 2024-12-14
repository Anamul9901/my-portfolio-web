import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Contai from "../../component/Shared/Contai";
import { NavLink } from "react-router-dom";

const Project = () => {
  const projectData = [
    {
      img: "https://i.ibb.co.com/998wmTz/Screenshot-2024-12-14-164614.png",
      name: "DVS",
      live_link: "https://electronic-voting-system-beta.vercel.app/",
      frontend_code:
        "https://github.com/dreamwarrior6m/Electronic-Voting-System",
      video:
        "https://www.linkedin.com/posts/anamul-haque-772264299_i-created-a-web-application-about-election-activity-7174032906544250882-lTXG?utm_source=share&utm_medium=member_desktop",
      desctiption: "This is team project and I led the team",
      backend_code: "https://github.com/dreamwarrior6m/EVS-server",
    },
    {
      img: "https://i.ibb.co.com/t25kKhr/Screenshot-2024-12-14-173213.png",
      name: "CoockUp",
      live_link: "https://l2-a6-recipe-sharing-client.vercel.app/",
      frontend_code:
        "https://github.com/Anamul9901/l2-a6-recipe-sharing-client",
      video:
        "https://drive.google.com/file/d/12b2KWW7gsuvjUwaV9jQa9_qoozxAaYaN/view?usp=drive_link",
      desctiption: "",
      backend_code: "https://github.com/Anamul9901/l2-a6-recipe-sharing-server",
    },
    {
      img: "https://i.ibb.co.com/2qZ5XmH/Screenshot-2024-12-14-173315.png",
      name: "Sports Zone",
      live_link: "https://l2-assign5-client.vercel.app/",
      frontend_code: "https://github.com/Anamul9901/l2-assign5-client",
      video:
        "https://drive.google.com/file/d/1I20beoihu3D8w-2ECBx4fkWFX-l_QpGz/view",
      desctiption: "",
      backend_code:
        "https://github.com/Anamul9901/level2-assign3-server-sports-booking",
    },
    {
      img: "https://i.ibb.co/bgYjrb6/prot-1.png",
      name: "e-SHOP",
      live_link: "https://assignment-12-f43f7.web.app/",
      frontend_code: "https://github.com/Anamul9901/e-SHOP-12",
      video: "",
      desctiption: "",
      backend_code: "",
    },
    {
      img: "https://i.ibb.co/bbTjN6C/Screenshot-328.png",
      name: "TC-Library",
      live_link: "http://anamul-11.surge.sh/",
      frontend_code: "https://github.com/Anamul9901/online-college-library-11",
      video: "",
      desctiption: "",
      backend_code: "",
    },
    {
      img: "https://i.ibb.co/Zgmr2Xf/port-2.png",
      name: "Gaming World",
      live_link: "https://assignment-9-593b2.web.app/",
      frontend_code: "https://github.com/Anamul9901/gamming-world-9",
      video: "",
      desctiption: "",
      backend_code: "",
    },
    {
      img: "https://i.ibb.co/hVmRfBd/Screenshot-336.png",
      name: "e-Bazar",
      live_link: "https://assignment-10-5dbf5.web.app/",
      frontend_code: "https://github.com/Anamul9901/Online-shop-10",
      video: "",
      desctiption: "",
      backend_code: "",
    },
  ];
  return (
    <div className="pt-20 style h-full ">
      <Contai>
        <div className=" flex justify-center">
          <Carousel>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/Zgmr2Xf/port-2.png"}
              />
            </div>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/n8S6bhg/Screenshot-332.png"}
              />
            </div>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/bgYjrb6/prot-1.png"}
              />
            </div>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/N6v7Ty6/Screenshot-325.png"}
              />
            </div>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/wwmbLmg/Screenshot-323.png"}
              />
            </div>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/pwZ9x5q/Screenshot-340.png"}
              />
            </div>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/hVmRfBd/Screenshot-336.png"}
              />
            </div>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/S69qHxg/Screenshot-335.png"}
              />
            </div>
            <div>
              <img
                className="w-52"
                src={"https://i.ibb.co/1QwfWMq/Screenshot-339.png"}
              />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4 md:px-8">
          {projectData?.map((project) => (
            <div className="card bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <figure className="relative">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 transition-opacity hover:opacity-100">
                  <h2 className="text-lg md:text-2xl font-bold">
                    {project.name}
                  </h2>
                </div>
              </figure>
              <div className="p-6 text-white">
                <h2 className="text-xl font-semibold ">{project.name} </h2>
                <h2 className="text- font-semibold mb-4">
                  {project.desctiption}{" "}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <NavLink
                    to={project.live_link}
                    target="_blank"
                    className="btn text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 px-4 py-2 rounded-md shadow-md text-white"
                  >
                    Live Demo
                  </NavLink>
                  <NavLink
                    to={project.video}
                    target="_blank"
                    className="btn text-sm font-medium bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 px-4 py-2 rounded-md shadow-md text-white"
                  >
                    Watch
                  </NavLink>
                  <NavLink
                    to={project.frontend_code}
                    target="_blank"
                    className="btn text-sm font-medium bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-4 py-2 rounded-md shadow-md text-white"
                  >
                    Frontend
                  </NavLink>
                  <NavLink
                    to={project.backend_code}
                    target="_blank"
                    className="btn text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 px-4 py-2 rounded-md shadow-md text-white"
                  >
                    Backend
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Contai>
    </div>
  );
};

export default Project;
