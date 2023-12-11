import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const Project = () => {
    return (
      <div className="">
          <div className="flex justify-center items-center h-[60vh]">
            <Flicking
                align="prev"
                circular={true}
                onMoveEnd={e => {
                    console.log(e);
                }}>
                <div className="panel w-42">
                    <img className="w-40" src={'https://i.ibb.co/XF7q1b3/Alibaba-4.jpg'} alt="" />
                </div>
                <div className="panel">
                    <img className="w-40" src={'https://i.ibb.co/5kL0vnz/eBay-3.jpg'} alt="" />
                </div>
                <div className="panel">
                    <img className="w-40" src={'https://i.ibb.co/sqTB1g1/eBay-1.jpg'} alt="" />
                </div>
            </Flicking>
        </div>
      </div>
    );
};

export default Project;