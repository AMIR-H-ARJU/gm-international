import aboutGm from '../../assets/pictures/Aboutframe.png'

export default function AboutUs() {
  return (
    <>
      <h2 className="text-4xl font-bold pt-5 translate-y-15">
        About <span className="text-red-600">Us</span>
      </h2>
      <div className=" flex justify-betwwen gap-10 items-center ">
        <div className="w-3/4">
            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.</p>
        </div>
        <div className=''>
            <img src={aboutGm} className='w-4/4' alt="" />
        </div>
      </div>
    </>
  );
}
