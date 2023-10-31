import React from "react";
import "./myprojects.css";
const MyProject = () => {
  return (
    <>
      <div className="flex justify-center mb-7">
        <div className="typewriter">
          <h1 className="my-project">My Projects!</h1>
        </div>
      </div>
      <div className=" flex justify-center gap-40">
        <div className="card-container">
          <div className="card">
            <h1>Wash My Ride</h1>
            <br />
            <p>
              Wash My Ride is a full stack web developed to Providing car wash
              services at your doorstep.
            </p>
            <p className=" flex justify-center">
              <a
                href="https://github.com/Tokens-Army/MERAKI_Academy_Project_5"
                target="_blank"
              >
                <span className="cursor-pointer">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/github--v1.png"
                    alt="github--v1"
                  />
                  github
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
          <div className="card">
            <h1>Socioverse</h1>
            <br />
            <p>
              A social media platform to connect with friends and make new ones.
            </p>
            <p className=" flex justify-center">
              <a
                href="https://github.com/C8-MohAlawneh/MERAKI_Academy_Project_4"
                target="_blank"
              >
                <span className=" cursor-pointer">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/github--v1.png"
                    alt="github--v1"
                  />
                  github
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
      </div>
    </>
  );
};

export default MyProject;
