import React from "react";

function Hero() {
  return (
    <div className="font-display my-40 flex w-full flex-col items-center justify-center">
      <h1 className="w-full max-w-xl bg-gradient-to-b from-neutral-100 to-neutral-500 bg-clip-text text-center text-5xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of Intutive Finance
      </h1>
      <p className="mt-8 max-w-2xl text-center text-neutral-400 selection:bg-white">
        Transform your <span className="text-primary"> financial </span> journey
        with our intuitive platform and look forward to your{" "}
        <span className="text-primary">life</span> and you children.Have a very
        good life you should be <span className="text-primary">proud</span> of
        which.
      </p>
      <div className="mt-8 flex w-full max-w-md items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Enter your Email"
          className="focus:ring-primary flex-1 rounded-md border border-neutral-600 px-3 py-1 text-neutral-100 transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-3 py-2 text-neutral-100">
          <div className="via-primary absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent to-transparent"></div>
          Join Waitlist
        </button>
      </div>
    </div>
  );
}

export default Hero;
