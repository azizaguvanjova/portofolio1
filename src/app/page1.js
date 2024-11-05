import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Page1 = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between py-7 px-10">
      <nav className="flex flex-row justify-between text-white">
        <h2 className="text-2xl font-inter font-bold">Namık Korona</h2>
        <div className="flex items-center space-x-4">
          <div className="flex justify-between  gap-3">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contacts</a>
          </div>
          <div className="flex justify-between gap-3 ">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>

      <img
        src="/bg-design.png"
        alt="background-image"
        className="w-10/12 h-auto relative  "
      />
      <div className="flex flex-row gap-8 absolute">
        <div className="absolute text-white top-40 font-poppins flex flex-col gap-5">
          <h4 className="text-3xl font-medium">Hi, I'm Namik,</h4>
          <h1 className="text-8xl font-bold">
            I'M A <br /> DEVELOPER
          </h1>
          <div className="text-white/50 text-xl  font-normal">
            <p>Interactive Elements:</p>
            <p>Prototyping for Web:</p>
            <p>Responsıve design:</p>
            <p>Collaborative Design Workflows:</p>
          </div>
          <span className="font-extrabold text-3xl underline ">
            View My Projects
          </span>
        </div>
        <div className="flex relative left-[750px] top-36">
          <img src="/profile.png" alt="profile resim" className="w-11/12" />
        </div>
      </div>
    </div>
  );
};

export default Page1;
