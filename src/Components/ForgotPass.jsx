import React from "react";
const ForgotPass = ()=>{
    
 return(
    <div className="min-h-screen flex justify-center place-items-center bg-slate-900">
        <div className="bg-white flex flex-col p-5 rounded-md w-80 h-auto">
            <div className="flex place-items-center">
                <img className="h-14 w-14" src="/assets/logo.png" alt="logo"></img>
                <h1 className=" font-bold text-orange-500 text-2xl ml-3">Forgot the pass?</h1>                
            </div>
            <label htmlFor=""></label>
            <input className="outline-none bg-blue-100 p-2 my-8" type="password" placeholder="Enter id or Email"></input>
            <button className=" bg-orange-500 text-white py-2 font-semibold">Go</button>
        </div>
    </div>)
};

export default ForgotPass;