import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
          👾 Create Dream and Execute it 🚀 <br />
          
          </div>
          
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/bryan.oviedosanchez" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/bryan-oviedo-323795152/" target="_blank" rel="noopener noreferrer">
            <img src="/linked2.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Bryanovi/" target="_blank" rel="noopener noreferrer">
            <img src="/github4.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
