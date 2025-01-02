import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={"animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          My experiences on
          <br /> Software tools
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box coding"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Coding Platforms (IDEs)</h2>
          <p>
            I have worked extensively with powerful coding platforms such as
            Visual Studio Code, which offers an intuitive environment with
            useful extensions. Additionally, I have experience with IntelliJ IDEA,
            Netbeans for Java development, and Python projects. These platforms
            have greatly improved my productivity, efficiency in writing and managing code.
          </p>
          <div>
          <img src="/visual.png" alt="IDE" width="90" height="90"/>
          <img src="/inteli.png" alt="IDE" width="100" height="100"/>
          </div>
        </motion.div>
        <motion.div
          className="box programming"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Programming Languages</h2>
          
          <p>
            My coding experience spans multiple languages:
            Java for building scalable and robust backend systems.
            Python for a wide range of applications, including automation, data
            analysis, and AI development.
            JavaScript for both front-end and back-end development, enabling me
            to create dynamic and interactive web applications.
          </p>
          <div>
          <img src="/javas.png" alt="Programming Languages" width="100" height="100" />
          <img src="/python.png" alt="Programming Languages" width="80" height="80" />
          </div>
          <div >
          <img src="/php.png" alt="Programming Languages" width="100" height="60" />
          </div>

        </motion.div>
        <motion.div
          className="box webMobile"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web and Mobile Development Tools</h2>
          
          <p>
            I have worked with several frameworks and tools for both web and mobile
            development: Android Studio for building mobile applications. React and
            Angular for creating responsive and dynamic web interfaces. These tools
            have allowed me to create efficient and user-friendly applications.
          </p>
          <div>
          <img src="/androids.png" alt="Web and Mobile Development" width="80" height="80" />
          <img src="/react.png" alt="Web and Mobile Development" width="100" height="100" />
          <img src="/angular.png" alt="Web and Mobile Development" width="90" height="90" />

          </div>
        </motion.div>
        <motion.div
          className="box databases"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Databases</h2>
          
          <p>
            I have experience working with MySQL, a reliable and widely used relational
            database system. MySQL has been essential in managing data and ensuring
            seamless integration with my web and mobile applications.
          </p>
            <div>
          <img src="/mysqls.png" alt="Web and Mobile Development" width="80" height="80" />
          <img src="/mongo.png" alt="Web and Mobile Development" width="80" height="80" />
          </div>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
