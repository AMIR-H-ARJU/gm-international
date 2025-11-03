import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Slide1 from "../../assets/pictures/Group 308.png";
import { FaArrowRight } from "react-icons/fa";
import plane from "../../assets/pictures/Union.png";
import whatsapp from "../../assets/pictures/Frame 185.png";
import send from "../../assets/pictures/Frame 1618871615.png";
import Vector from "../../assets/pictures/Vector.png";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    // <Carousel                                  
    //   showArrows={true}
    //   infiniteLoop={true}
    //   showThumbs={false}
    //   showStatus={false}
    //   autoPlay={true}
    //   interval={5000}
    // >
    <>
      <div className=" mt-6">
        <img
          src={Slide1}
          alt="Slide 1"
          className="object-cover -translate-y-6 w-full h-96 md:h-[500px]"
        />
        <div className="absolute top-1/4   left-8 text-white">
          <div className="text-6xl ">
            <motion.img
              whileHover={{
                x: 300, // move to the right
                y: -200, // move up
                rotate: 45, // tilt the plane
                opacity: 0, // fade out as it "flies away"
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              src={plane}
              className="h-35 absolute translate-x-59 -translate-y-3"
              alt=""
            />
            <h2 className="translate-x-90 translate-y-20 text-black font-semibold">
              We Provide You Best <br />
              <span className="text-red-600 font-bold">International</span>
              Deals
              <p className="text-xl  text-slate-240 text-center -translate-x-20 mt-4">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero <br /> et velit interdum, ac aliquet odilitora
                torquent per conubia nostra, <br /> per inceptos hi condimentum
                lobortiselit.
              </p>
            </h2>
            <Link className="">
              <button className="btn skeleton flex items-center gap-2 p-2  mt-5 rounded-2xl bg-[#CA2328] translate-x-145 translate-y-25 mt-5 text-white text-xl ">
                About Us <FaArrowRight />
              </button>
            </Link>
          </div>
          {/* <div className="translate-x-300 absolute">
          <img src={whatsapp} className="h-16 translate-x-8 w-20 rounded-r-xl" alt="" />
          <img src={send} className="h-16 mt-3 translate-x-8 rounded w-20" alt="" />
        </div> */}
        </div>
      </div>
      <div className=" mx-auto mt-10 w-3/4 mt-20 shadow-2xl rounded-xl bg-[#DDD]">
        <img
          src={Vector}
          className="absolute translate-y-3 translate-x-3"
          alt=""
        />
        <input
          type="text"
          className="shadow-lg pl-10 w-4/4 rounded-xl h-10 outline:0"
          placeholder="Search Here"
        />
      </div>
    </>
    // </Carousel>
  );
}
