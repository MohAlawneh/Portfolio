import React from "react";
import "./MySkills.css";

const allSkills = [
  {
    img: "https://img.icons8.com/color/96/javascript--v1.png",
    name: "Javascript",
  },
  {
    img: "https://img.icons8.com/color/96/html-5--v1.png",
    name: "HTML5",
  },
  {
    img: "https://img.icons8.com/color/96/css3.png",
    name: "CSS3",
  },
  {
    img: "https://img.icons8.com/fluency/48/node-js.png",
    name: "Node JS",
  },
  {
    img: "https://img.icons8.com/officel/80/react.png",
    name: "React JS",
  },
  {
    img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png",
    name: "Redux",
  },
  {
    img: "https://img.icons8.com/color/96/mongodb.png",
    name: "MongoDb",
  },
  {
    img: "https://img.icons8.com/color/96/postgreesql.png",
    name: "PostgreSQL",
  },
  {
    img: "https://img.icons8.com/color/96/bootstrap--v1.png",
    name: "Bootstrap",
  },
  {
    img: "https://img.icons8.com/nolan/96/tailwind_css.png",
    name: "Tailwind",
  },
];
const MySkills = () => {
  return (
    <>
      <div className="flex justify-center mb-7 mt-20">
        <div className="typewriter">
          <h1 className="my-project">My Skills!</h1>
        </div>
      </div>
      <div className="flex justify-center mb-7 mt-20">
        <div id="skills">
          {allSkills.map((skill) => {
            return (
              <div className="skill" key={skill.name}>
                <div className="one-skill">
                  <img
                    width="100%"
                    height="100%"
                    src={skill.img}
                    alt="javascript--v1"
                  />
                  <h1 style={{ color: "white", textAlign: "center" }}>
                    {skill.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MySkills;
