import img1 from "../../assets/pictures/Rectangle 103.png";
import img2 from "../../assets/pictures/Rectangle 105.png";
import img3 from "../../assets/pictures/Rectangle 107.png";
export default function MedAvailable() {
  return (
    <>
      <h2 className="text-black text-4xl font-bold mt-10 text-center">
        Some Hospitals Are{" "}
        <span className="text-red-600">Available Here !</span>
      </h2>
      <p className="text-center text-lg text-slate-500 font-semibold mt-5">
        Gorem ipsum dolor sit amet, consectetur adipiscing elit.Gorem <br />{" "}
        ipsum dolor sit amet, consectetur adipiscing elit.Gorem ipsum <br />{" "}
        dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="flex gap-10 mb-50 justify-center mt-30">
        <div>
          <div className="image-card-wrapper  shadow bg-slate-100 rounded-xl">
            <div className="image-card">
              <img src={img1} alt="Patient" className="card-image relative hover:-translate-y-10 transition-transform duration-[800ms] ease-linear " />
              <h2 className="text-center text-xl font-bold">Hospital Name</h2>
            </div>

            {/* Button outside the card */}
            <button className="card-btn text-center translate-y-15 bg-slate-100 shadow-xl w-full rounded-lg p-2"><h2 className="font-bold cursor-pointer text-lg text-red-600">View Details</h2></button>
          </div>
        </div>
        <div>
          <div className="image-card-wrapper  shadow  bg-slate-100 rounded-xl">
            <div className="image-card h-70">
              <img src={img2} alt="Patient" className="card-image relative transition-transform duration-[800ms] ease-linear hover:-translate-y-10" />
              <h2 className="text-center text-xl font-bold">Hospital Name</h2>
            </div>

            {/* Button outside the card */}
            <button className="card-btn text-center translate-y-15 bg-slate-100 shadow-xl w-full rounded-lg p-2"><h2 className="font-bold cursor-pointer text-lg text-red-600">View Details</h2></button>
          </div>
        </div>
        <div>
          <div className="image-card-wrapper  shadow rounded-xl bg-slate-100">
            <div className="image-card h-70 ">
              <img src={img3} alt="Patient" className="card-image relative hover:-translate-y-10 transition-transform duration-[800ms] ease-linear" />
              <h2 className="text-center text-xl font-bold">Hospital Name</h2>
            </div>

            {/* Button outside the card */}
<button className="card-btn text-center translate-y-15 bg-slate-100 shadow-xl w-full rounded-lg p-2"><h2 className="font-bold cursor-pointer text-lg text-red-600">View Details</h2></button>          </div>
        </div>
      </div>
    </>
  );
}
