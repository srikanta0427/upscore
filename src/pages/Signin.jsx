import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);
  const [message, setMessage] = useState("");



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // getting complete data from user
    const { email, password } = formData;

    // Call your backend API here

    const result = await axios.post(
      "http://localhost:8080/signin",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
    if (!result.data.success) {
      setStatus(false);
      setMessage(result.data.message);
    } else {
      setStatus(false);
      // setNavigates(true);

      setMessage("");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div class="bg-[#0d0d0d] w-full items-center flex h-screen">
        <div className="text-white w-full rounded-md">
          <div className="flex justify-center">
            <img src="" alt="" />
            <h1 className="text-[20px]">upScore</h1>
          </div>
          <div>
            {!status && (
              <div className="text-red-400 text-[13px] text-center mt-4">
                <h2>{message}</h2>
              </div>
            )}
          </div>
          <div className="p-4">
            <form onSubmit={handleSubmit} className="p-2">
              <div className="w-full">
                <label htmlFor="email" className="block text-[15px]">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full rounded-md border-2 border-gray-400/50 p-1 focus:border-purple-900 focus:outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-[15px]">
                  Password
                </label>

                <input
                  id="email"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  className="w-full rounded-md border-2 border-gray-400/50 p-1 focus:border-purple-900 focus:outline-none"
                />
                <div className="flex justify-end text-blue-500 text-[13px]">
                  <Link>
                    <label htmlFor="">forget password</label>
                  </Link>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <button
                  type="submit"
                  className="rounded-md text-center w-full bg-[#5200EB]/80 p-1"
                >
                  Signin
                </button>
                <Link to="/signup">
                  <label htmlFor="" className="text-[13px] text-blue-500">
                    Register here
                  </label>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
