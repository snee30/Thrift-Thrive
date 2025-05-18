import React from "react";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="p-[10px_20px] bg-[var(--cream)] flex justify-between flex-wrap items-center"
    >
      <div className="newsletter">
        <h4 className="text-2xl font-bold text-[#74512d] italic">
          Sign Up For a Sustainable Future
        </h4>
        <br />
        <p className="text-sm font-semibold text-[var(--forestgreen)]">
          Get E-mail updates about our latest shop and special offers
        </p>
      </div>
      <div className="form flex w-[40%]">
        <input
          type="text"
          placeholder="Your Email Address"
          className="h-[3.125rem] px-5 w-full border border-transparent rounded-l outline-none bg-white"
        />
        <button className="h-[3.125rem] px-5 w-max bg-[#7bc0a3] text-white border border-transparent rounded-r">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
