import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SingupValidation from './SingupValidation'

const Singup = () => {

  const [error, setError] = useState({})

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    setError(SingupValidation(values))
  }

  const handleInput = (event) => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Name
          </label>

          <input
            type="text"
            name="name"
            onChange={handleInput}
            placeholder="Enter your name"
            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error.name && (
            <span className="text-red-700">
              {error.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            onChange={handleInput}
            placeholder="Enter your email"
            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error.email && (
            <span className="text-red-700">
              {error.email}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            onChange={handleInput}
            placeholder="Enter your password"
            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error.password && (
            <span className="text-red-700">
              {error.password}
            </span>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Sign Up
        </button>

        <p className="mb-4 mt-3">
          you are agree to this terms and policy
        </p>

        <Link
          to="/login"
          className="block w-full text-center border hover:bg-gray-200 text-black py-3 rounded-lg font-semibold transition"
        >
          Login
        </Link>

      </form>
    </div>
  )
}

export default Singup