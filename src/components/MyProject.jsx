import React, { useState } from "react";
import "./myprojects.css";
import washMyRide from "../assets/washMyRide.png";
import socioverse from "../assets/socioverse.png";
const MyProject = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <>
      <div className="flex justify-center mb-20 mt-20">
        <div className="typewriter">
          <h1 className=" font-extrabold">My Projects!</h1>
        </div>
      </div>
      <div className=" flex justify-center gap-40 projects">
        <div className="card-container">
          <div className="card text-center text-container">
            <h1>Wash My Ride</h1>
            <br />
            <p>
              Wash My Ride is a full stack web developed to Providing car wash
              services at your doorstep.
            </p>
            <p className=" flex justify-center">
              <a>
                <span className="cursor-pointer">
                  <button
                    className=" bg-blue-500 p-2 rounded mt-4"
                    id="myBtn"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    More details
                  </button>
                </span>
              </a>
            </p>

            <div className="layers">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card text-center text-container">
            <h1>Socioverse</h1>
            <br />
            <p>
              A social media platform to connect with friends and make new ones.
            </p>
            <p className=" flex justify-center">
              <span className="cursor-pointer">
                <button
                  className=" bg-blue-500 p-2 rounded mt-4"
                  id="myBtn"
                  onClick={() => {
                    setOpen1(true);
                  }}
                >
                  More details
                </button>
              </span>
            </p>
            <div className="layers">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div>
      <Project1 open={open} setOpen={setOpen} />
      <Project2 open1={open1} setOpen1={setOpen1} />
    </>
  );
};

export default MyProject;

const Project1 = ({ open, setOpen, newClass }) => {
  return (
    <div id="myModal" className={open ? "OpenModal" : "modal"}>
      <div className="modal-content">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="w-full rounded-t-lg" src={washMyRide} />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Built using
            </h5>
            <div className="mb-3 font-bold flex">
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
              <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
              <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
              <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
              <img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white" />
            </div>
            <div className="mb-3 font-bold flex">
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Live Demo
            </h5>
            <p className="mb-3 font-normal text-blue-700 dark:text-gray-400">
              <a href="https://wash-my-ride.netlify.app/" target="_blank">
                https://wash-my-ride.netlify.app/
              </a>
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Youtube Demo
            </h5>
            <p className="mb-3 font-normal text-blue-700 dark:text-gray-400">
              <a
                href="https://www.youtube.com/watch?v=6MG4TvjthKo"
                target="_blank"
              >
                https://www.youtube.com/watch?v=6MG4TvjthKo
              </a>
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Github
            </h5>
            <p className="mb-3 font-normal text-blue-700 dark:text-gray-400">
              <a
                href="https://github.com/Tokens-Army/MERAKI_Academy_Project_5"
                target="_blank"
              >
                https://github.com/Tokens-Army/MERAKI_Academy_Project_5
              </a>
            </p>
            <a
              onClick={() => {
                setOpen(false);
              }}
              className=" hover:cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const Project2 = ({ open1, setOpen1 }) => {
  return (
    <div id="myModal" className={open1 ? "OpenModal" : "modal"}>
      <div className="modal-content">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="w-full rounded-t-lg" src={socioverse} />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Built using
            </h5>
            <div className="mb-3 font-bold flex">
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
              <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white " />
              <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
            </div>
            <div className="mb-3 font-bold flex">
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Github
            </h5>
            <p className="mb-3 font-normal text-blue-700 dark:text-gray-400">
              <a
                href="https://github.com/C8-MohAlawneh/MERAKI_Academy_Project_4"
                target="_blank"
              >
                https://github.com/C8-MohAlawneh/MERAKI_Academy_Project_4
              </a>
            </p>
            <a
              onClick={() => {
                setOpen1(false);
              }}
              className=" hover:cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
