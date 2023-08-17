import React from "react";
import "./Education.css";

import college_logo from "../../Image/college_logo.png";
function Education() {
  const my_education_data = [
    {
      index: 1,
      education_logo_link: college_logo,
      college_name: "Cvr College of Engineering",
      college_degree_name: "B.Tech in Computer Science and Engineering",
      education_spam: "2020-Present",
      education_info: [
        {
          index: 1,
          educ_info:
            "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, Ml etc.",
        },
        {
          index: 2,
          educ_info:
            "⚡ Apart from this, I have done courses on Back-end Development, and Full Stack Development (MERN).",
        },
        {
          index: 3,
          educ_info:
            "⚡  I have implemented several projects based on what I've learnt by my Self.",
        },
      ],
      btn_name: "Visit Website",
      btn_link: "https://cvr.ac.in/home4/",
    },
  ];
  return (
    <>
      <div className="educ_container">
        <div className="educ_div_section">
          {my_education_data.map((data, index) => {
            return (
              <>
                <div className="educ_upper_section" key={index}>
                  <div className="educ_container_one">
                    <img src="https://th.bing.com/th/id/R.660269134a26059bc7627031251999e3?rik=5TWjk%2bOjMTb%2bYA&riu=http%3a%2f%2fcvr.ac.in%2fhome4%2fimages%2fcollege-overview.jpg&ehk=ga8t2L11j6CJL6T4ZS6RvProEAPuzlfN5U0w7lYmTQU%3d&risl=&pid=ImgRaw&r=0" alt="educ_image" />
                  </div>
                  <div className="educ_container_two">
                    <div className="upper_container_section">
                      <div className="upper_left">
                        {/* <img
                          src="https://th.bing.com/th/id/R.660269134a26059bc7627031251999e3?rik=5TWjk%2bOjMTb%2bYA&riu=http%3a%2f%2fcvr.ac.in%2fhome4%2fimages%2fcollege-overview.jpg&ehk=ga8t2L11j6CJL6T4ZS6RvProEAPuzlfN5U0w7lYmTQU%3d&risl=&pid=ImgRaw&r=0"
                          alt="college logo"
                        /> */}
                      </div>
                      <div className="upper_middle">
                        <h3>{data.college_name}</h3>
                        <div className="upper_right">
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: "green" }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="educ_lower_section">
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className="educ_data_info" key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                      <div className="educ_btn">
                        <a href={data.btn_link}>
                          <button>{data.btn_name}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
