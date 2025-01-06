import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Inventory Management System - Web",
    img: "/InvControl-Web.png",
    desc: "The project focused on inventory management within the FISEI faculty aims to streamline the tracking and administration of various assets, such as computers, cameras, and software licenses. It integrates a central management system to monitor the availability, usage, and maintenance status of these resources.. The project aims to improve resource allocation, prevent overuse or loss of assets, and enhance overall operational efficiency within the faculty.",
    link: "https://github.com/Invcontrol-Back/dasfrontend",
  },
  {
    id: 2,
    title: "Inventory Management System - Mobile",
    img: "/InvControl-Movil.png",
    desc: "This project on inventory management within the FISEI faculty incorporates the use of QR codes to efficiently track and manage computers. By assigning unique QR codes to each computer, the system allows for quick and accurate identification, updating, and location tracking. Staff can scan the QR codes to access detailed information about the computers, such as their specifications, maintenance history, and current user assignment.",
    link: "https://github.com/Invcontrol-Back/MovilFrontend",
  },
  {
    id: 3,
    title: "Project Managment - Web",
    img: "https://neubox.com/blog/wp-content/uploads/2023/09/Blog_Neubox_Gestio%CC%81n-de-tareas-1_Imagen-1.webp",
    desc: "This project management app is designed for efficient project tracking and task management. It leverages Angular to provide a dynamic and MongoDB is used for flexible and scalable data storage, making it ideal for handling large amounts of project-related information. The app includes features like user authentication, task assignments, and detailed reporting, allowing teams to track progress, manage resources, and generate insights on project performance..",
    link: "https://github.com/Bryanovi/CONCURSO",
  },
  {
    id: 4,
    title: "Project Store Mobiles - Web",
    img: "https://tecnosoluciones.com/wp-content/uploads/2024/06/Crear-un-Sitio-Web-para-una-Tienda-de-Celulares-y-Accesorios.webp",
    desc: "An online store developed using Angular for a dynamic, responsive user interface and MongoDB for scalable, flexible data storage. It allows users to browse products, add items to the cart, and complete purchases. Features include user authentication, product categorization, order tracking, and payment processing, all integrated seamlessly for an optimal shopping experience. The app ensures fast performance and easy management of product listings, inventory, and customer data.",
    link: "https://github.com/Bryanovi/Service-Telephone",
  },
  {
    id: 5,
    title: "Project Store Clothes - Mobile",
    img: "https://applicantes.com/wp-content/uploads/2021/06/patpat-app-ropa-ninos-barata.jpg",
    desc: "The Mobile Clothing Store App allows users to browse a wide range of clothing products, add them to their shopping cart, and securely complete purchases. It offers features like user authentication, order tracking, and a smooth shopping experience. Built with Android Studio and Firebase, it ensures seamless navigation and secure transactions.",
    link: "https://github.com/Bryanovi/ProjectStoreClothes",
  },
  {
    id: 6,
    title: "Implementation and control of the LED Lighting System of EP-EMA - Intern",
    img: "/em2.jpg",
    desc: "He, together with his team, focused on developing an APP implementation for the automatic activation and control of the LED Lighting System and Security System of EP-EMA, including the multiple safety features used in this implementation.",
    link: "",
  },
  {
    id: 7,
    title: "Research agent in Virtual Reality for the UTA - Intern",
    img: "https://invdes.com.mx/wp-content/uploads/2022/08/02-08-22-virtual-800x445.jpg",
    desc: "I am focused on creating a virtual reality (VR) app designed to serve as a guide for individuals without medical knowledge. This app will provide an immersive learning experience, teaching users about surgical instruments and medical procedures. By leveraging VR technology, my goal is to offer accessible training that can help individuals better understand the medical field and its tools, enhancing their knowledge in a safe, interactive environment.",
    link: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link && (
  <a href={item.link} target="_blank" rel="noopener noreferrer">
    <button>See Repository</button>
  </a>
)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects and Work Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
