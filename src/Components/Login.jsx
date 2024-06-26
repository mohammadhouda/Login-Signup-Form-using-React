import React from "react";

import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate();
 return(
    <div className="min-h-screen flex justify-center place-items-center bg-slate-900">
        <div className="bg-white flex flex-col p-5 rounded-md w-80 h-auto">
            <div className="flex place-items-center">
                <img className="h-14 w-14" src="/assets/logo.png" alt="logo"></img>
                <h1 className=" relative pb-3 ml-3 before:absolute before:h-1 before:w-full before:bottom-0 after:absolute after:bottom-0 after:h-1 after:left-0 after:w-1/2 after:bg-slate-900 after:rounded-sm before:bg-orange-400 font-bold text-4xl text-orange-400 before:rounded-sm">Login</h1>                
            </div>
            <input className="outline-none bg-blue-100 p-2 my-8" type="password" placeholder="username"></input>
            <input className="outline-none bg-blue-100 p-2 mb-8" type="password" placeholder="Password"></input>
            <button
          className="text-orange-500 font-bold cursor-pointer hover:underline mr-auto"
          onClick={() => navigate('/forgot-password')}
        >
          forgot password?
        </button>
        <button
          className="text-orange-500 font-bold cursor-pointer hover:underline ml-auto"
          onClick={() => navigate('/signup')}
        >
          Sign up
        </button>
        </div>
    </div>)
};

export default Login;