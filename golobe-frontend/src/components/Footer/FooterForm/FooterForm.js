import React from "react";
import FooterFormImage from "../../../assets/footer-form-image.png";

const FooterForm = () => {
  return (
    <div className="bg-[#CDEAE1] mx-16 flex justify-between rounded-3xl -mb-[9.5rem] ">
      <div className="ms-5 my-5 flex flex-col justify-around">
        <h2 className="text-4xl font-bold">
          Subscribe <br /> Newsletter
        </h2>
        <div>
          <p className="text-2xl font-semibold">The Travel</p>
          <p>
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            className="w-full rounded-lg px-3 py-4 outline-none"
            placeholder="Your email address"
          />
          <button className="bg-black text-white px-3 py-4 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
      <div className="me-5">
        <img src={FooterFormImage} alt="Mailbox" />
      </div>
    </div>
  );
};

export default FooterForm;
