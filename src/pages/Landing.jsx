import BG_IMG from "../assets/BG_IMG.png";
import home from "../assets/icons/home.png";
import ray from "../assets/icons/ray.png";
import settings from "../assets/icons/setting.png";
import microphone from "../assets/icons/microchip.png";
import symbol from "../assets/icons/symbol.png";
import srikanta from "../assets/rankers/srikanta.jpg";
import soumya from "../assets/rankers/soumya.png";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Landing = () => {
  const navigate = useNavigate();

  const [enrolling, setEnrolling] = useState(false);

  // get user id through cookies
  const [userId, setUserId] = useState("");

  // true if user already a course enroll
  const [isEnroll, setIsEnroll] = useState(false);

  useEffect(() => {
    const alreadyEnroll = axios
      .get("http://localhost:8080/get-course-before-enroll", {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data.data.success)
        // true bcz user has already enrolling the course
        if (data.data.success) setIsEnroll(true);
      });
  },);

  const handleResume = () => {
    navigate("/dashboard");
  };

  const handleEnroll = async () => {
    setEnrolling(true);

    try {
      // 1. Check logged-in user
      const userResponse = await axios.get("http://localhost:8080/get-user", {
        withCredentials: true,
      });

      console.log("Login status:", userResponse.data.success);

      // User is NOT logged in
      if (!userResponse.data.success) {
        navigate("/signin");
        return;
      }

      // User IS logged in
      const userId = userResponse.data.userId;

      console.log("User ID:", userId);

      // 2. Get course
      const courseResponse = await axios.get(
        "http://localhost:8080/get-course",
        {
          withCredentials: true,
        },
      );

      console.log("Course response:", courseResponse.data);

      if (!courseResponse.data.success) {
        console.log("Course not found");
        return;
      }

      const courseId = courseResponse.data.courseId;

      console.log("Course ID:", courseId);

      // 3. Enroll user
      const enrollResponse = await axios.post(
        "http://localhost:8080/course-enroll",
        {
          studentId: userId,
          courseId: courseId,
        },
        {
          withCredentials: true,
        },
      );

      if (enrollResponse.data.success) {
        alert(enrollResponse.data.message);
      }
    } catch (error) {
      console.error("Enrollment error:", error);
    } finally {
      setEnrolling(false);
    }
  };
  return (
    <>
      <div className="bg-[#0d0d0d] w-full h-full">
        <div className="text-white text-[20px] flex flex-col gap-3 items-center">
          <div className="flex gap-1 leading-none">
            <div class="z-10 w-10 h-10 -mr-4 rounded-full border-[#0d0d0d] bg-blue-500">
              <img src={srikanta} alt="" className="rounded-full w-10 h-10" />
            </div>
            <div class="z-20 w-10 h-10 -mr-4 rounded-full border-[#0d0d0d] bg-red-500">
              <img src={soumya} alt="" className="rounded-full w-10 h-10" />
            </div>
            <div class="z-30 w-10 h-10 -mr-4 rounded-full border-[#0d0d0d] bg-orange-500">
              <img src={srikanta} alt="" className="rounded-full w-10 h-10" />
            </div>
            <div class="z-40 w-10 h-10 -mr-4 rounded-full border-[#0d0d0d] bg-pink-500">
              <img src={soumya} alt="" className="rounded-full w-10 h-10" />
            </div>
            <div class="z-50 w-10 h-10 rounded-full border-[#0d0d0d] bg-yellow-500">
              <img src={srikanta} alt="" className="rounded-full w-10 h-10" />
            </div>
          </div>
          <div className="leading-none">
            <h1 className="Trusted by many toppers">Trusted by many toppers</h1>
          </div>
          <p className="leading-none text-[10px] text-white/80">
            Excellent ⭐⭐⭐⭐⭐ 4.9/5
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center mt-10">
            <h1 className="leading-none text-white text-[40px] font-[600]">
              Crack Ojee 2026
            </h1>
            <div className="flex gap-4 font-[600]">
              <h1 className="text-white text-[30px] leading-none font-[600]">
                with{" "}
              </h1>
              <h1 className="text-[30px] text-purple-400 leading-none">
                Mock Tests
              </h1>
            </div>

            <h1 className="text-[30px] text-purple-400   leading-none font-[600]">
              and confidence
            </h1>
            {/* <h1 className="text-[30px] text-purple-400 leading-none font-[600]">Hands-on Mock Tests</h1> */}
          </div>
          <div className="flex flex-col items-center text-white/40 text-[12px] font-[350]">
            <p>Master Engineering Mechanics & Electrical & Electronics</p>
            <p>and Mathmatics with exam-based MCQs, mock tets.</p>
          </div>
        </div>
        <div className="p-3 w-full">
          <Link to="/signin">
            <button className=" rounded-sm font-[500] bg-purple-500 text-white w-full p-3">
              Dashboard
            </button>
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <p className="text-white/90 text-[12px]">
            Trusted by 40+ Top 100 Rankers
          </p>
        </div>
        <div className="">
          {
            // this section for school name
          }
        </div>
        <div className="flex flex-col items-center justify-center mt-5 px-6">
          <h1 className="text-white text-[25px] font-semibold text-center">
            Why Choose UpScore?
          </h1>

          <p className="mt-3 max-w-2xl text-center text-white/80 text-[16px] leading-7">
            Stop guessing what to study next. Practice with real exam-style
            questions, take full-length mock tests, track your progress, and
            build the confidence to achieve your dream OJEE rank.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-5 p-2">
          <div className="flex flex-col items-center hover:border-t-2 hover:border-purple-600 duration-300 ease-in">
            <h1 className="text-white">Topic-wise MCQs</h1>
            <p className="text-white/60 text-[12px] text-center">
              Practice chapter-wise questions covering Mathematics, Physics,
              Chemistry, and Engineering subjects.
            </p>
          </div>
          <div className="flex flex-col items-center hover:border-t-2 hover:border-purple-600 duration-300 ease-in">
            <h1 className="text-white">Track Your Progress</h1>
            <p className="text-white/60 text-[12px] text-center">
              .Monitor your performance with detailed reports and see your
              improvement over time.
            </p>
          </div>
          <div className="flex flex-col items-center hover:border-t-2 hover:border-purple-600 duration-300 ease-in">
            <h1 className="text-white">Real Exam Experience</h1>
            <p className="text-white/60 text-[12px] text-center">
              Attempt realistic mock tests that simulate the actual OJEE exam
              environment
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-white text-[25px] font-[400] text-center">
            <i>Encouraged by OJEE Top Rankers</i>
          </h1>
          <p className="text-white/90 text-[12px] leading-5 text-center p-4">
            Top rankers appreciate UpScore's practical approach to preparation
            and recommend it as a smart platform for consistent practice and
            exam readiness.
          </p>
        </div>

        <div className="p-4 w-full">
          <div className="w-full text-white bg-[#5200eb]/80 backdrop-blur-lg rounded-md p-2">
            <div className="p-2 w-full">
              <div className="border-1 w-30 rounded-full p-1">
                <p className="text-center">LE-TECH</p>
              </div>
              <h1 className="mt-4 text-[20px] font-[300]">
                Complete Ojee Foundation
              </h1>
              <p className="text-white/80 text-[12px] mt-4">
                Get Ahead of the Competition by Mastering OJEE Preparation.
              </p>
              <h1 className="text-[40px]">Free</h1>
              <div>
                <ul className="text-[12px]">
                  <li>✅ Complete OJEE Course</li>
                  <li>✅ Chapter-wise Practice</li>
                  <li>✅ Full-Length Mock Tests</li>
                  <li>✅ Previous Year Questions</li>
                  <li>✅ Detailed Solutions</li>
                  <li>✅ AI Features</li>
                </ul>
              </div>
              {isEnroll ? (
                <button
                  onClick={handleResume}
                  className="w-full rounded-md mt-2 bg-white text-[#3902a0] p-2 font-medium hover:bg-gray-100 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Resume
                </button>
              ) : (
                <button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="w-full rounded-md mt-2 bg-white text-[#3902a0] p-2 font-medium hover:bg-gray-100 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {enrolling ? "Enrolling..." : "Enroll for Free"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
