import medical from "../../assets/pictures/medical0.png";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function MedBanner() {
  return (
    <>
      <div className="max-w-5xl container mx-auto">
        <div className="flex  justify-between gap-5 py-10">
          <div className="flex flex-col gap-5 pt-14 ">
            <h2 className="text-5xl  font-bold text-black ">
              Serving Patient with <br />
              <span className="text-red-600">our best services</span>
            </h2>
            <p className="text-lg text-slate-500  font-semibold">
              Gorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
              elit.Gorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit.Gorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn skeleton w-1/4 bg-[#CA2328] text-white py-1 rounded-2xl">
              Book Now <FaArrowRight />
            </button>
          </div>
          <div>
            <motion.img
              className="text-center      rounded-xl p-2  "
              animate={{
                y: [0, -10, 0],
                x: [0, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
              whileHover={{ scale: 1.2, rotate: 4 }}
              src={medical}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
