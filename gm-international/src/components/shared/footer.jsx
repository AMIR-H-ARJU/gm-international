import { Link } from "react-router-dom";
import logoImg from "../../assets/pictures/Frame 52.png";
import facebook from "../../assets/pictures/Facebook.svg";
import tiktok from "../../assets/pictures/Tiktok.svg";
import Wechat from "../../assets/pictures/wechat-logo-wechat-icon-transparent-free-png 1.png";
import instagram from "../../assets/pictures/Instagram.svg";
export default function Footer() {
  return (
    <>
      <div className="bg-[linear-gradient(to_bottom,#CA2328,#FF5E63)] rounded p-4 pt-10 text-white">
        <div className="flex mb-4">
          <div className="w-1/4">
            <img src={logoImg} alt="" />
          </div>
          <div className="w-1/4 ml-20 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Explore</h2>
            <Link><h2 className="text-lg font-semibold">New Offers</h2></Link>
            <Link><h2 className="text-lg font-semibold">Scholership</h2></Link>
            <Link><h2 className="text-lg font-semibold">Services</h2></Link>
          </div>
          <div className="w-1/4 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <Link><h2 className="text-lg font-semibold">About Us</h2></Link>
            <Link><h2 className="text-lg font-semibold">Testimonial</h2></Link>
            <Link><h2 className="text-lg font-semibold">FAQ</h2></Link>
          </div>
          <div className="flex flex-col gap-4 w-1/4 text-left">
            <h2 className="text-2xl font-semibold">Social Media </h2>
            <div className="flex gap-3 text-">
              <Link className="text-lg">
                <img src={facebook} className="h-7" alt="" />
              </Link>
              <Link className="text-lg">
                <img src={Wechat} className="h-7" alt="" />
              </Link>
              <Link className="text-lg">
                <img src={instagram} className="h-7" alt="" />
              </Link>
              <Link>
                <img src={tiktok} className="h-7" alt="" />
              </Link>
            </div>
            <input
              className="text-left w-60 outline-0 bg-white/30 p-2 rounded-lg"
              type="email"
              placeholder="Your Mail"
            />
            <button className="text-center p-1 text-red-600 bg-white rounded-lg font-bold cursor-pointer w-20 text-center ">
              Submit
            </button>
          </div>
        </div>
        <hr className="" />
        <div className="flex  mt-2 justify-between">
          <div className="font-bold">Terms & Conditions</div>
          <div className="font-semibold text-slate-300">All Rights Reserved by <span className="font-semibol text-white/70"> &copy;</span>Gm-International 2025 </div>
          <div className="font-bold">Privacy Policy</div>
        </div>
      </div>
    </>
  );
}
