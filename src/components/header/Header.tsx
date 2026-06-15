import portraitImg from "../../assets/portrait.jpg";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import emailLogo from "../../assets/email.svg";

import { motion } from "motion/react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div
        style={{
          paddingTop: "50px",
        }}
      />
      <div id="header-container">
        <div>
          <img
            id="portrait-img"
            src={portraitImg}
            className="portrait"
            alt="Portrait"
            width="100%"
          />
          <div
            style={{
              padding: "20px",
            }}
          />
          <Socials />
        </div>
        <div>
          <h1>Matti Kähkönen</h1>
          <div
            style={{
              height: "100%",
              padding: "25px",
              textAlign: "left",
            }}
          >
            Welcome to my page! I'm Matti Kähkönen, I'm a young aspiring
            software developer. Currently, I'm working on finishing me Master's
            thesis and I'm employed by Visma Solutions Oy as a Junior QA
            Engineer. On this page you can information about my academic and
            professional history. Feel free to connect with me on LinkedIn,
            check through my commits on GitHub or get in touch via e-mail!
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "45% 45%",
                gap: "10%",
              }}
            >
              <Interests />
              <Hobbies />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Socials() {
  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "20% 20% 20%",
        gridTemplateRows: "auto",
        columnGap: "20%",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <motion.a
        href="mailto:matti.kahkonen99@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <img src={emailLogo} width="100%" alt="Github link" title="Email" />
      </motion.a>
      <motion.a
        href="https://github.com/mfk99/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <img
          src={githubLogo}
          width="100%"
          alt="Github link"
          title="My Github"
        />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/mattikahkonen/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <img
          src={linkedinLogo}
          width="100%"
          alt="LinkedIn link"
          title="My LinkedIn"
        />
      </motion.a>
    </div>
  );
}

function Interests() {
  return (
    <div>
      <h3>Interests</h3>
      <ul>
        <li>Software Development</li>
        <li>Algorithms</li>
        <li>Combinatorial optimization</li>
        <li>SAT</li>
      </ul>
    </div>
  );
}

function Hobbies() {
  return (
    <div>
      <h3>Hobbies</h3>
      <ul>
        <li>Literature (classic, fiction, philosophy)</li>
        <li>Gym</li>
        <li>Computer hardware</li>
        <li>Video games</li>
      </ul>
    </div>
  );
}
