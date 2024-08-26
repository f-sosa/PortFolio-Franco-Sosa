import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from "react-bootstrap-icons";
import colorSharp2 from "../assets/img/color-sharp2.png";
//import { Modal } from "../components/Modal";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";

//GreenCorner
import login from "../assets/img/Login.PNG";
import home from "../assets/img/Home.PNG";
import product from "../assets/img/Productos.PNG";
import producSpecific from "../assets/img/Producto-Especifico.PNG";
import favorite from "../assets/img/Favorite.PNG";
import guide from "../assets/img/Guide.PNG";
import testimonial from "../assets/img/Testimonial.PNG";
import order from "../assets/img/Ordenes.PNG";
import adminEdit from "../assets/img/Admin-EditUser.PNG";
//Country
import homeCountry from "../assets/img/Home-Country.PNG";
import detailCountry from "../assets/img/Detail-Country.PNG";
import activityCountry from "../assets/img/Activity-Country.PNG";
//Carpooling
import loginCarpooling from "../assets/img/Login-Carpooling.PNG";
import registerCarpooling from "../assets/img/Register-Carpooling.PNG"
import registerCarpooling2 from "../assets/img/Register-Carpooling2.PNG";
import homeCarpooling from "../assets/img/Home-Carpooling.PNG";
import editTravel from "../assets/img/EditTravel-Carpooling.PNG";
import passenger from "../assets/img/Passenger-Carpooling.PNG";
import travel from "../assets/img/Travel-Carpooling.PNG";
import notify from "../assets/img/Notify-Carpooling.PNG";
//--
//import projImg1 from "../assets/img/project-img1.png";
//import projImg3 from "../assets/img/project-img3.png";
//import captura from "../assets/img/Favorite.PNG"
import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";

export const Projects = () => {

    const [t, i18n] = useTranslation("global");
    const [url, setUrl] = useState("https://green-corner.vercel.app");
    const [page, setPage] = useState(true);
    const [title, setTitle] = useState("🍃GreenCorner🍃");
    const [showModal, setShowModal] = useState(false);
    const [RepositoryGreenCorner, setRepository] = useState(true);


    const greenCorner = [t("projects.greenCornerInformation1"), t("projects.greenCornerInformation2"), t("projects.greenCornerInformation3"), t("projects.greenCornerInformation4"), t("projects.greenCornerInformation5")];
    const country = [t("projects.countryInformation1"), t("projects.countryInformation2"), t("projects.countryInformation3")];
    const carpooling = [t("projects.carpoolingInformation1"),t("projects.carpoolingInformation2") ,t("projects.carpoolingInformation3") ,t("projects.carpoolingInformation4") ];
    const [achievements, setAchievements] = useState(greenCorner);
    const [backend, setBackend] = useState(["Node.js", "Express"]);
    const [frontend, setFrontend] = useState(["React", "Redux", "JavaScript"]);
    const [dataBase, setDataBase] = useState(["PostgreSQL", "Sequelize"]);
    const [implementaciones, setImplementaciones] = useState(["Tailwind Css", "Aos", "Cloudinary", "Auth0", "Nodemailer", "API Mercado Pago"]);



    const projects = [
        {
            title: t("projects.greenCornerTitle1"),
            description: t("projects.greenCornerDescription1"),
            imgUrl: login,
        },
        {
            title: t("projects.greenCornerTitle2"),
            description: t("projects.greenCornerDescription2"),
            imgUrl: home,
        },
        {
            title: t("projects.greenCornerTitle3"),
            description: t("projects.greenCornerDescription3"),
            imgUrl: product,
        },
        {
            title: t("projects.greenCornerTitle4"),
            description: t("projects.greenCornerDescription4"),
            imgUrl: producSpecific,
        },
        {
            title: t("projects.greenCornerTitle5"),
            description: t("projects.greenCornerDescription5"),
            imgUrl: favorite,
        },
        {
            title: t("projects.greenCornerTitle6"),
            description: t("projects.greenCornerDescription6"),
            imgUrl: guide,
        },
        {
            title: t("projects.greenCornerTitle7"),
            description: t("projects.greenCornerDescription7"),
            imgUrl: testimonial,
        },
        {
            title: t("projects.greenCornerTitle8"),
            description: t("projects.greenCornerDescription8"),
            imgUrl: order,
        },
        {
            title: t("projects.greenCornerTitle9"),
            description: t("projects.greenCornerDescription9"),
            imgUrl: adminEdit,
        },
    ];

    const project2 = [
        {
            title: t("projects.countryTitle1"),
            description: t("projects.countryDescription1"),
            imgUrl: homeCountry,
        },
        {
            title: t("projects.countryTitle2"),
            description: t("projects.countryDescription2"),
            imgUrl: detailCountry,
        },
        {
            title: t("projects.countryTitle3"),
            description: t("projects.countryDescription3"),
            imgUrl: activityCountry,
        },
    ];

    const project3 = [
        {
            title: t("projects.carpoolingTitle1"),
            description: t("projects.carpoolingDescription1"),
            imgUrl: loginCarpooling,
        },
        {
            title: t("projects.carpoolingTitle2"),
            description: t("projects.carpoolingDescription2"),
            imgUrl: registerCarpooling,
        },
        {
            title: t("projects.carpoolingTitle3"),
            description: t("projects.carpoolingDescription3"),
            imgUrl: registerCarpooling2,
        },
        {
            title: t("projects.carpoolingTitle4"),
            description: t("projects.carpoolingDescription4"),
            imgUrl: homeCarpooling,
        },
        {
            title: t("projects.carpoolingTitle5"),
            description: t("projects.carpoolingDescription5"),
            imgUrl: editTravel,
        },
        {
            title: t("projects.carpoolingTitle6"),
            description: t("projects.carpoolingDescription6"),
            imgUrl: passenger,
        },
        {
            title: t("projects.carpoolingTitle7"),
            description: t("projects.carpoolingDescription7"),
            imgUrl: travel,
        },
        {
            title: t("projects.carpoolingTitle8"),
            description: t("projects.carpoolingDescription8"),
            imgUrl: notify,
        },
    ];

    useEffect(() => {
        switch (title) {
          case "🍃GreenCorner🍃":
            setAchievements([
              t("projects.greenCornerInformation1"), 
              t("projects.greenCornerInformation2"), 
              t("projects.greenCornerInformation3"), 
              t("projects.greenCornerInformation4"), 
              t("projects.greenCornerInformation5")
            ]);
            break;
          case "🌎Country🌎":
            setAchievements([
              t("projects.countryInformation1"), 
              t("projects.countryInformation2"), 
              t("projects.countryInformation3")
            ]);
            break;
          case "🚘Carpooling🚘":
            setAchievements([
              t("projects.carpoolingInformation1"), 
              t("projects.carpoolingInformation2"), 
              t("projects.carpoolingInformation3"), 
              t("projects.carpoolingInformation4")
            ]);
            break;
          default:
            break;
        }
      }, [url,i18n.language, title]);

    const handleSelect = (eventKey) => {
        switch (eventKey) {
            case 'first':
                setTitle("🍃GreenCorner🍃");
                setUrl("https://green-corner.vercel.app");
                setPage(true);
                setAchievements(greenCorner);
                setBackend([]);
                setFrontend([]);
                setDataBase([]);
                setImplementaciones([]);
                setBackend(["Node.js", "Express"]);
                setFrontend(["React", "Redux", "JavaScript"]);
                setDataBase(["PostgreSQL", "Sequelize"]);
                setImplementaciones(["Tailwind Css", "Aos", "Cloudinary", "Auth0", "Nodemailer", "API Mercado Pago"]);
                setRepository(true);
                break;

            case 'second':
                setTitle("🌎"+t("projects.country-project")+"🌎");
                setUrl("https://github.com/f-sosa/Country-Pi");
                setPage(false);
                setAchievements(country);
                setBackend([]);
                setFrontend([]);
                setDataBase([]);
                setImplementaciones([]);
                setBackend(["Node.js", "Express"]);
                setFrontend(["React", "Redux", "JavaScript"]);
                setDataBase(["PostgreSQL", "Sequelize"]);
                setImplementaciones(["Aos"]);
                setRepository(false);
                break;

            case 'third':
                setTitle("🚘Carpooling🚘");
                setUrl("https://github.com/f-sosa/Carpooling");
                setPage(false);
                setAchievements(carpooling);
                setBackend([]);
                setFrontend([]);
                setDataBase([]);
                setImplementaciones([]);
                setBackend(["Java"]);
                setFrontend(["Nada"]);
                setDataBase(["SQL"]);
                setImplementaciones(["Android Studio"]);
                setRepository(false);

                break;

            default:

                break;
        }
    };
    const toggleModal = () => {
        setShowModal(!showModal);
    };


    return (
        <section className="project" id="project">

            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>{t("projects.projects-title")}</h2>
                                    <p>📚📷{t("projects.description")}📷📚</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={handleSelect}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">🍃🌹GreenCorner🍃🌹</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">🌎{t("projects.country-project")}🌎</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">🚘🚕Carpooling🚘🚕</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <button className="modal-button" onClick={toggleModal}>{t("projects.specification")}</button>
                            <Modal isOpen={showModal}>
                                <ModalHeader className="header-modal">
                                    {title}
                                </ModalHeader>
                                <ModalBody>
                                    <h4 className="modal-about">🌟 {t("projects.key-Achievements")}</h4>
                                    {achievements.map((skill, index) => (
                                        <div key={index} className="skill-about">
                                            {skill}
                                        </div>
                                    ))}

                                    <h4 className="modal-about">⚙️ {t("projects.tech-Stack")}</h4>
                                </ModalBody>
                                <ModalFooter className="modal-footer">
                                    <div className="modal-skills">
                                        Backend:   <div className="skills-list">
                                            {backend.map((skill, index) => (
                                                <div key={index} className="skill-item">
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>

                                        Frontend:
                                        <div className="skills-list">
                                            {frontend.map((skill, index) => (
                                                <div key={index} className="skill-item">
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                        Base de datos:
                                        <div className="skills-list">
                                            {dataBase.map((skill, index) => (
                                                <div key={index} className="skill-item">
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                        Implementacion:
                                        <div className="skills-list">
                                            {implementaciones.map((skill, index) => (
                                                <div key={index} className="skill-item">
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Button className="modal-close" onClick={toggleModal}>X</Button>
                                </ModalFooter>

                            </Modal>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {project2.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {project3.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        <div>
                            <a href={url} target="_blank">
                                <button className="project-button">
                                    {page ? t("projects.page") : t("projects.repository")}
                                    <ArrowRightCircle size={25} />
                                </button>
                            </a>
                        </div>
                        <div>
                            {RepositoryGreenCorner ? <a href="https://github.com/gabrielagi/PF-G4-GreenCorner" target="_blank"><button className="project-button">Repository <ArrowRightCircle size={25} /></button></a> : ""}
                        </div>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background"></img>
        </section>
    );
};
