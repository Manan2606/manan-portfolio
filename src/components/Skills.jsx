import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPython,
  FaDatabase,
  FaServer,
  FaLaravel,
  FaPhp,
  FaAndroid,
  FaGitAlt,
  FaAws,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import "../skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#563d7c" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "React.js", icon: <FaReact />, color: "#61dafb" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Vue.js", icon: <FaVuejs />, color: "#4fc08d" },
    { name: "Python", icon: <FaPython />, color: "#306998" },
    { name: "Machine Learning", icon: <FaDatabase />, color: "#FF6F00" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "REST APIs", icon: <FaServer />, color: "#673AB7" },
    { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
    { name: "PHP", icon: <FaPhp />, color: "#4F5B93" },
    { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            style={{ backgroundColor: skill.color }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
