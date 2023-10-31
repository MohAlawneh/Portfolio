import React, { useEffect, useState } from "react";
import image from "../assets/MY Image.jpeg";
const Aboutme = () => {
  return (
    <div>
      <section className=" dark:bg-gray-900">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src={image}
                alt="My photo"
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <div className="waviy">
                    <span style={{ "--i": "1" }}>M</span>
                    <span style={{ "--i": "2" }}>O</span>
                    <span style={{ "--i": "3" }}>H</span>
                    <span style={{ "--i": "4" }}>A</span>
                    <span style={{ "--i": "5" }}>M</span>
                    <span style={{ "--i": "6" }}>M</span>
                    <span style={{ "--i": "7" }}>A</span>
                    <span style={{ "--i": "8" }}>D</span>
                    <br />
                    <span style={{ "--i": "9" }}>A</span>
                    <span style={{ "--i": "9" }}>L</span>
                    <span style={{ "--i": "10" }}>A</span>
                    <span style={{ "--i": "10" }}>W</span>
                    <span style={{ "--i": "11" }}>N</span>
                    <span style={{ "--i": "11" }}>E</span>
                    <span style={{ "--i": "11" }}>H</span>
                  </div>
                  <p className="text-blue-200 ">Full Stack Developer</p>
                </div>

                <div className="mt-4 text-lg leading-relaxed text-white md:text-xl typewriter">
                  <h1>“The game doesn't start yet”.</h1>
                </div>
              </div>
              <div className="w-20">
                <a
                  href="https://www.linkedin.com/in/moha-alawneh/"
                  target="_blank"
                >
                  <img
                    width="48"
                    height="48"
                    className=" hover:w-20 hover:cursor-pointer"
                    src="https://img.icons8.com/doodle/48/linkedin--v2.png"
                    alt="linkedin--v2"
                  />
                </a>
                <a href="https://github.com/MohAlawneh" target="_blank">
                  <img
                    width="48"
                    height="48"
                    className=" hover:w-21 hover:cursor-pointer"
                    src="https://img.icons8.com/doodle/48/github--v1.png"
                    alt="github--v1"
                  />
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
