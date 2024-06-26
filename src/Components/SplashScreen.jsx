import React from "react";

const SplashScreen = () => {
  return (
    <div className="splash-screen min-h-screen bg-slate-900 flex flex-col justify-center place-items-center gap-2">
      <img className=" h-40 w-40" src="/assets/logo.png" alt="logo"></img>
      <div className="flex gap-4">
        <p className=" text-white tracking-wide text-5xl font-semibold">
          Welcome
        </p>
        <ul className="flex gap-2 place-items-end">
          <li className=" h-6 w-6 rounded-full bg-orange-400 animate-upDown animate-delay-200 "></li>
          <li className=" h-6 w-6 rounded-full bg-orange-400 animate-upDown animate-delay-300"></li>
          <li className=" h-6 w-6 rounded-full bg-orange-400 animate-upDown animate-delay-500"></li>
        </ul>
      </div>
    </div>
  );
};

export default SplashScreen;
