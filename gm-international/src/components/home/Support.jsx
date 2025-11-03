import union from "../../assets/pictures/union 3.png";
import union2 from "../../assets/pictures/Union 4.png";

export default function Support() {
  return (
    <>
      <div className="mt-20 mb-40 max-w-5xl mx-auto">
        <div className="mt-6">
          <img src={union} alt="Slide 1" className="object-cover -translate-x-20  w-80 h-70 " />
          <div className="   absolute  ">
            <div className="text-6xl">
              <img
                src={union2}
                className="h-70 translate-x-200 -translate-y-75"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 -translate-y-100 absolute translate-x-50">
        <h2 className="text-4xl font-bold text-center py-1">
          Supporting Your Success <br /> We're Here to Help and
          <span className="text-red-600">Support You!</span>
        </h2>
        <p className="text-center mt-6 text-sm font-semibold text-slate-500">
          We’re here for you every step of the way. So count on us as <br /> we
          ensure your success and satisfaction.
        </p>
        <div className="flex  justify-center gap-10  mt-10">
          <div className="w-2/4">
            <input
              type="text"
              className="bg-slate-100 p-2 shadow-xl rounded-xl outline-0 w-4/4 border-1 border-red-600/40"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <button className="btn skeleton w-20 bg-red-600 text-white font-semibold">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
