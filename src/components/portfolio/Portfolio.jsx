import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Inventory Management - Web",
    img: "/InvControl-Web.png",
    desc: "The project focused on inventory management within the FISEI faculty aims to streamline the tracking and administration of various assets, such as computers, cameras, and software licenses.",
    participation: "I was responsible for developing the frontend of the web application using Angular.",
    link: "https://github.com/Invcontrol-Back/dasfrontend",
    technologies: ["/angular.png", "/python.png", "/django.png"]
  },
  {
    id: 2,
    title: "Inventory Manage - Mobile",
    img: "/InvControl-Movil.png",
    desc: "This project on inventory management within the FISEI faculty incorporates the use of QR codes to efficiently track and manage computers.",
    participation: "I was responsible for developing the frontend of the mobile application using Flutter and using the services made in Django.",
    link: "https://github.com/Invcontrol-Back/MovilFrontend",
    technologies: ["/flutter.png", "/django.png"]
  },
  {
    id: 3,
    title: "Project Managment - Web",
    img: "https://neubox.com/blog/wp-content/uploads/2023/09/Blog_Neubox_Gestio%CC%81n-de-tareas-1_Imagen-1.webp",
    desc: "This project management app is designed for efficient project tracking and task management. Angular to provide a dynamic and MongoDB is used for flexible and scalable data storage. ",
    participation: "I was responsible for developing the frontend of the web application using Angular and integrating the API endpoints for CRUD operations.",
    link: "https://github.com/Bryanovi/CONCURSO",
    technologies: ["/angular.png", "/mongo.png"]
  },
  {
    id: 4,
    title: "Project Store Mobiles - Web",
    img: "https://tecnosoluciones.com/wp-content/uploads/2024/06/Crear-un-Sitio-Web-para-una-Tienda-de-Celulares-y-Accesorios.webp",
    desc: "An online store developed using Angular for a dynamic, responsive user interface and MongoDB for scalable, flexible data storage. It allows users to browse products, add items to the cart.",
    participation: "I participated in the development of the user interface, the implementation of the shopping cart function.",
    link: "https://github.com/Bryanovi/Service-Telephone",
    technologies: ["/angular.png", "/mongo.png","/firebase.png"]
  },
  {
    id: 5,
    title: "Project Store Clothes - Mobile",
    img: "https://applicantes.com/wp-content/uploads/2021/06/patpat-app-ropa-ninos-barata.jpg",
    desc: "The Mobile Clothing Store App allows users to browse a wide range of clothing products, add them to their shopping cart, and securely complete purchases. It offers features like user authentication, order tracking, and a smooth shopping experience. Built with Android Studio and Firebase.",
    participation: "I contributed to the development of the mobile application using Android Studio, focusing on the user authentication and order tracking features.",
    link: "https://github.com/Bryanovi/ProjectStoreClothes",
    technologies: ["/androids.png", "/firebase.png","/mongo.png"]
  },
  {
    id: 6,
    title: "Implementation LED Lighting System of EP-EMA - Intern",
    img: "/em2.jpg",
    desc: "He, together with his team, focused on developing an APP implementation for the automatic activation and control of the LED Lighting System.",
    participation: "I conducted research topics and scientific articles, collecting important information on both networks and databases. I was a test manager, documentation, and user manuals.",
    link: "",
    technologies: ["/flutter.png"]
  },
  {
    id: 7,
    title: "Research agent in Virtual Reality for the UTA - Intern",
    img: "https://invdes.com.mx/wp-content/uploads/2022/08/02-08-22-virtual-800x445.jpg",
    desc: "I am focused on creating a virtual reality (VR) app designed to serve as a guide for individuals without medical knowledge. This app will provide an immersive learning experience, teaching users about surgical instruments and medical procedures. This can help individuals better understand the medical field and its tools.",
    participation: "I conduct research on scientific articles, compiling important information. I am a manager in the area of ​​surgical instrument modeling.",
    link: "",
    technologies: ["/unityb.png", "/blender.png"]
  }
];

const certificates = [
  { id: 1, img: "/HATUN.png" },
  { id: 2, img: "/JAVA1.png" },
  { id: 3, img: "/JAVA2.png" },
  { id: 4, img: "/RED.png" }
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
            <h3>Participation</h3>
            <p>{item.participation}</p>
            {/* Nueva sección de tecnologías */}
            <div className="technologies">
              {item.technologies.map((tech, index) => (
                <img key={index} src={tech} alt="Technology" />
              ))}
            </div>
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

const CertificatesSection = () => {
  return (
    <section className="certificates">
      <div className="certificatesBackground">
        <h2>My Certifications</h2>
        <div className="certificatesContainer">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificateItem">
              <img src={certificate.img} alt={`Certificate ${certificate.id}`} />
            </div>
          ))}
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
      <CertificatesSection />
    </div>
  );
};

export default Portfolio;