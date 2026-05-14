import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from "./LoginValidation";

const Login = () => {

    const [error, setError] = useState({}) 
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event)=>{
         event.preventDefault();
         setError(validation(values))
    }

    const handleInut = (event)=>{
         setValues(prev => ({...prev, [event.target.name] : [event.target.values] }) )
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>

          <input
            type="email"
            name="email"
            onChange={handleInut}
            placeholder="Enter your email"
            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error.email && <spna className="text-red-700" >{error.email}</spna>}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error.password && <spna className="text-red-700" >{error.password}</spna>}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>
        <p className="mb-4">you are agree to this term,s and policy</p>

        <Link
          to="/signup"
          className=" block w-full text-center bg-white-100 border hover:bg-gray-200 text-black py-3 rounded-lg font-semibold transition"
        >
          Craete an Account 
        </Link>

      </form>
    </div>
  );
};

export default Login;
