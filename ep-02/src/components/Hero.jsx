import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <section className="font-display mx-auto mt-20 flex w-full max-w-5xl flex-col items-start justify-start gap-5 p-6 md:flex-row">
        <div className="flex w-full max-w-3/5 flex-col gap-y-2.5 overflow-hidden">
          <div className="hero-badge shadow-nav mt-4 w-fit rounded-full border border-gray-400 bg-neutral-800 px-4 py-1 text-center text-sm tracking-normal text-neutral-200 backdrop-blur-xl">
            Trusted by 1.5M+ Developers Worldwide
          </div>
          <h1 className="mt-4 w-full max-w-md bg-gradient-to-b from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text pt-4 text-6xl font-bold tracking-tight text-transparent">
            Consistency and Community
          </h1>
          <p className="font-hero mt-5 w-full max-w-xl text-xl leading-[25px] tracking-tight text-neutral-600">
            Content is everywhere. We provide what is rare
            <span className="text-imp font-semibold text-neutral-900">
              “An Unmatched, Community-Driven Learning Experience”
            </span>
            with peer learning, bounties, code reviews, doubt sessions, alumni
            network.
          </p>
          <div className="mt-12 flex w-fit justify-start gap-4">
            <button className="shadow-nav text-md cursor-pointer rounded-md rounded-tl-xl rounded-br-xl border border-neutral-600 bg-neutral-900 px-3 py-1 text-neutral-200 transition duration-200 hover:bg-neutral-800">
              Start Learning
            </button>
            <button className="shadow-nav text-md cursor-pointer rounded-md rounded-tl-xl rounded-br-xl border border-gray-600 bg-white px-3 py-1 text-neutral-900 transition duration-200 hover:bg-neutral-100">
              See the impact
            </button>
          </div>
        </div>
        <div className="flex w-full max-w-2/5 items-center justify-center">
          <img src="./src/assets/chai.png" alt="" className="w-fit" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
