import student from "../../assets/pictures/student.png";
import medical from "../../assets/pictures/medical.png";
import tourism from "../../assets/pictures/tourism.png";
import business from "../../assets/pictures/business.png";
import intstudent from "../../assets/pictures/studentint.png";
import person from "../../assets/pictures/person.png";
import { motion } from "framer-motion";
export default function Explore() {
  return (
    <>
      <h2 className="text-4xl text-black font-bold mt-30">
        <span className="text-red-600">Explore </span>
        Your Journey We <br />
        Provide You The Best
      </h2>
      <p className="text-sm mt-2 text-slate-500">
        Jorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit. Nunc vulputate libero et velit interdum, ac alielit.
      </p>
      <div className="flex   mt-20 justify-center gap-5">
        <motion.div
          className="text-center border-2 shadow-xl    rounded-xl p-2  border-slate-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={student}
            className="mx-auto w-30 overflow-hidden hover:overflow-x cursor-pointer"
            alt=""
          />
          <h2 className="text-sm text-slate-500">
            Jorem ipsum dolor sit amet, <br /> cons.Jorem ipsum dolor sit.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="text-center border-2 shadow-xl  rounded-xl p-2  border-slate-300"
        >
          <img src={medical} className="mx-auto w-30" alt="" />
          <h2 className="text-sm text-slate-500">
            Jorem ipsum dolor sit amet, <br /> cons.Jorem ipsum dolor sit.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="text-center border-2 shadow-xl  rounded-xl p-2  border-slate-300"
        >
          <img src={tourism} className="mx-auto w-30" alt="" />
          <h2 className="text-sm text-slate-500">
            Jorem ipsum dolor sit amet, <br /> cons.Jorem ipsum dolor sit.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="text-center border-2 shadow-xl  rounded-xl p-2  border-slate-300"
        >
          <img src={business} className="mx-auto w-30 mt-1" alt="" />
          <h2 className="text-sm text-slate-500 mt-1">
            Jorem ipsum dolor sit amet, <br />
            cons.Jorem ipsum dolor sit.
          </h2>
        </motion.div>
      </div>
      <div className="flex justify-center mt-12 gap-8 items-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="p-2  border-2 shadow-xl  rounded-xl   border-slate-300 px-4"
        >
          <img src={intstudent} alt="" />
          <h2 className="text-center text-sm font-semibold text-slate-500">
            Jorem ipsum dolor sit amet, <br /> cons.Jorem ipsum dolor sit.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="  border-2 shadow-xl  rounded-xl p-2 border-slate-300 px-5"
        >
          <img src={person} className="mx-auto" alt="" />
          <h2 className="text-4xl text-[#2F3F61] font-bold">
            International Tourist
          </h2>
          <h2 className="text-center text-sm font-semibold text-slate-500">
            Jorem ipsum dolor sit amet, <br /> cons.Jorem ipsum dolor sit.
          </h2>
        </motion.div>
      </div>
      <div></div>
    </>
  );
}
