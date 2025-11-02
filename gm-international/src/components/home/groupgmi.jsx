import Marquee from "react-fast-marquee";
export default function GmiGroup() {
  return (
    <>
      <div className="bg-[#FFF]/80 py-10  mt-10">
        <h2 className="text-4xl text-black font-bold mb-5 text-left"> GM 
          <span className="text-red-600"> Group</span>
        </h2>
        <Marquee
          pauseOnHover={true}
          gradient={true}
          speed={40}
          loop={0}
          className="text-3xl font-bold text-slate-400 flex gap-10 pb-5"
        >
          |  GM INTERNATIONAL
          | GM IT  
          | GM GRAPHICS & MULTIMEDIA 
          | GM LOGISTICS 
          | GM COLLECTION
        </Marquee>
      </div>
    </>
  );
}
