"use client";

import React, { useState } from "react";

const Contact = () => {

  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    console.log(email);
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section className="xl:px-[100px] md:px-[75px] px-7 pb-[160px] md:pb-[105px] xl:pb-[140px]">
      <div
        className="xl:px-[100px] md:px-[75px] px-7 xl:py-[100px] md:py-[75px] py-12 rounded-3xl xl:rounded-4xl"
        style={{
          background: "linear-gradient(90deg, #F4E7FF 0%, #FDDDDE 100%)",
        }}
      >

        <div className="text-start">
          <h2 className="xl:text-[80px] xl:tracking-[-1.6px] md:text-[60px] md:leading-[1.2] text-[48px] leading-[1.1] font-normal">
            Need custom Al Ul for your product?
          </h2>
          <p className="xl:text-[80px] xl:tracking-[-1.6px] md:text-[60px] md:leading-[1.2] text-[48px] leading-[1.1] text-gray-5 font-normal">
            Headstart is an Al interface design studio.
            <br />
            We design Al-native apps, dashboards and flows end-to-end.
          </p>
        </div>

        <div className="xl:mt-[120px] md:mt-[100px] mt-16 flex flex-col items-start">
          <label
            htmlFor="email"
            className="text-main mb-8 text-xl xl:text-[28px]"
          >
            Talk to us about a project →
          </label>

          <form
            onSubmit={handleSubmit}
            className="inline-flex w-full md:w-auto md:min-w-[456px] xl:min-w-[608px] gap-4 bg-white rounded-full overflow-hidden"
          >
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@email.com"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-[30px] xl:pl-10 py-3 xl:py-5 text-main placeholder:text-gray-5 text-xl xl:text-[28px] focus:outline-none"
            />
            <button
              type="submit"
              className="block w-fit pr-[30px] xl:pr-10 py-3 xl:py-5 text-main font-medium text-xl xl:text-[28px] hover:opacity-80 cursor-pointer min-w-fit"
            >
              Send
            </button>
          </form>

          <p className="mt-8 text-main  text-xl xl:text-[28px]">
            {
              isSubmitted ? "Thanks for reaching out, we’ll be in touch shortly." : "We take on a small number of high-impact projects."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

