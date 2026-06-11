import portraitImg from "../../assets/portrait.jpg";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
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
      <div className="header-container" id="header-container">
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
              padding: "40px",
              textAlign: "left",
            }}
          >
            Welcome to my page! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam ac rhoncus quam. Fringilla quam urna. Cras
            turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In
            viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus
            porta. Mauris laoreet augue ut felis blandit, at iaculis odio
            ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu
            tincidunt neque tincidunt a.
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "40% 40%",
                gap: "20%",
              }}
            >
              <div>
                <h3>Interests</h3>
                <ul>
                  <li>Software Development</li>
                  <li>Algorithms</li>
                  <li>Combinatorial optimization</li>
                  <li>SAT</li>
                </ul>
              </div>
              <div>
                <h3>Hobbies</h3>
                <ul>
                  <li>Reading</li>
                  <li>Gym</li>
                  <li>Computer hardware</li>
                  <li>Video games</li>
                </ul>
              </div>
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
        gridTemplateColumns: "auto auto",
        columnGap: "50%",
        paddingLeft: "15%",
        paddingRight: "15%",
      }}
    >
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
