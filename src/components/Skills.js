import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import java from "../assets/img/Java.svg";
import javascript from "../assets/img/JavaScript.svg";
import react from "../assets/img/React.svg";
import node from "../assets/img/NodeJs.svg";
import git from "../assets/img/Git.svg";
import css from "../assets/img/Css.svg";
import html from "../assets/img/html.png";
import csharp from "../assets/img/CShart.svg";
import mysql from "../assets/img/MySql.svg";
import postgreSql from "../assets/img/PostgreSql.svg";
import c from "../assets/img/c++.png";
import mongoDB from "../assets/img/Mongodb.png";
import nodemailer from "../assets/img/Nodemailer.png";
import cloudinary from "../assets/img/Cloudinary.png";
import redux from "../assets/img/Redux.png";
import auth0 from "../assets/img/Auth0.png";
import apiMercadoPago from "../assets/img/ApiMercadoPago.png";
import colorSharp from "../assets/img/color-sharp.png";
import {useTranslation} from "react-i18next";

export const Skills = () => {
    const [t, i18n] = useTranslation("global");
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>{t("skills.description")}</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                                </div>  
                                <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React.js</h5>
                                </div>
                                <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                                </div>
                                <div className="item">
                                <img src={css} alt="Image" />
                                <h5>Css</h5>
                                </div>
                                <div className="item">
                                <img src={csharp} alt="Image" />
                                <h5>Csharp</h5>
                                </div>
                                <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySql</h5>
                                </div>
                                <div className="item">
                                <img src={postgreSql} alt="Image" />
                                <h5>PostgreSql</h5>
                                </div>
                                <div className="item">
                                <img src={html} alt="Image" />
                                <h5>Html</h5>
                                </div>
                                <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C++</h5>
                                </div>
                                <div className="item">
                                <img src={mongoDB} alt="Image" />
                                <h5>MongoDb</h5>
                                </div>
                                <div className="item">
                                <img src={nodemailer} alt="Image" />
                                <h5>Nodemailer</h5>
                                </div>
                                <div className="item">
                                <img src={cloudinary} alt="Image" />
                                <h5>Cloudinary</h5>
                                </div>
                                <div className="item">
                                <img src={redux} alt="Image" />
                                <h5>Redux</h5>
                                </div>
                                <div className="item">
                                <img src={auth0} alt="Image" />
                                <h5>Autho</h5>
                                </div>
                                <div className="item">
                                <img src={apiMercadoPago} alt="Image" />
                                <h5>Api Mercado Pago</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}