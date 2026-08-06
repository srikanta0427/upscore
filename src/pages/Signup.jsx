import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const {
      name,
      email,
      password,
    } = formData;

    try {
      const response = await axios.post("http://localhost:8080/signup", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        alert("Account created successfully!");
        
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="bg-[#0d0d0d] w-full min-h-screen flex items-center">
        <div className="w-full text-white rounded-md">
          <div className="flex justify-center items-center gap-2">
            <img src="" alt="" />
            <h1 className="text-2xl font-semibold">upScore</h1>
          </div>

          <div className="p-4">
            <form onSubmit={handleSubmit} className="p-2 space-y-4">

              <div>
                <label htmlFor="name" className="block text-[13px]">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border-2 border-gray-400/50 p-1 focus:border-purple-900 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[13px]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border-2 border-gray-400/50 p-1 focus:border-purple-900 focus:outline-none"
                  required
                />
              </div>

              

              <div>
                <label htmlFor="password" className="block text-[13px]">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-md border-2 border-gray-400/50 p-1 focus:border-purple-900 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-[13px]"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-md border-2 border-gray-400/50 p-1 focus:border-purple-900 focus:outline-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#5200EB]/80 p-2 font-medium"
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-gray-400">
                Already have an account?{" "}
              </span>
              <Link
                to="/signin"
                className="text-blue-500 hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;