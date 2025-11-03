import packImg from "../../assets/pictures/Ellipse 16.png";
export default function MedOffer() {
  const patients = [
  {
    id: 1,
    name: "John Doe",
    img: "/patient1.jpg",
    infoLeft: "Age: 32",
    infoRight: "ID: #A123",
    note: "Regular check-up scheduled next week.",
  },
  {
    id: 2,
    name: "Sarah Khan",
    img: "/patient2.jpg",
    infoLeft: "Age: 28",
    infoRight: "ID: #B542",
    note: "Follow-up for blood test results.",
  },
  {
    id: 3,
    name: "Arif Hossain",
    img: "/patient3.jpg",
    infoLeft: "Age: 45",
    infoRight: "ID: #C879",
    note: "Needs prescription renewal.",
  },
];
    return (
    <>
      <div className="py-10 max-w-5xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-black ">
          Explore our popular <span className="text-red-600">offers</span>
        </h2>
        <p className="text-lg text-slate-500 mt-4 text-center font-semibold">
          Gorem ipsum dolor sit amet, consectetur adipiscing elit.Gorem ipsum
          dolor sit amet, <br />
          consectetur adipiscing elit.Gorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
       </div>
       <div className="card-container flex justify-center gap-10  ">
      {patients.map(() => (

        <div key='' className="card p-2">
          {/* Inner div 1: Image + Name */}
        <div className="flex flex-col gap-8  border-1 border-slate-200 rounded-2xl p-5" >
          <div className="card-header flex gap-10 items-center">
            <img src={packImg} alt='' />
            <h3 className="text-xl font-bold ">Patient Name</h3>
          </div>

          {/* Inner div 2: Two flexed info items */}
          <div className=" flex gap-8">
            <div className="text-semibold text-lg font-semibold">
                <h2>Amount</h2>
                <h2>BDT 4, 999</h2>
            </div>
            <div className="text-lg font-semibold">
                <h2>Deadline</h2>
                <h2>November 12, 2025</h2>
            </div>
          </div>

          {/* Inner div 3: Single text line */}
          <div className="card-note text-slate-500">
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Temporibus, minus?</p>
          </div>
          {/* Outer button */}
        </div>
          <button className="card-btn mt-5 rounded-xl btn hover:bg-red-500 bg-red-600 text-white">View Details</button>
        </div>
      ))}
    </div>
      <button className="w-full mt-10 mb-20 cursor-pointer "><span className="skeleton bg-red-600 p-2 hover:bg-red-700 py-2 text-xl rounded-2xl text-white">View More</span></button>
    </>
  );
}
