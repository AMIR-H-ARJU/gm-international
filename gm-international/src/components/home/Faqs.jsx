export default function Faqs() {
  return (
    <>
      <h2 className="text-4xl text-center mt-20 font-bold text-black ">
        FA
        <span className="text-red-600">
          Q'<span className="text-3xl">s</span>
        </span>
      </h2>
      <div className=" w-3/4 mx-auto mb-10  flex flex-col gap-3 text-black">
        <div className="collapse collapse-plus   mt-10  bg-[#FE252C]/20">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title  font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm items-center">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#FE252C]/20 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#FE252C]/20 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#FE252C]/20 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#FE252C]/20 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#FE252C]/20 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </>
  );
}
