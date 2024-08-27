import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export const Contactt = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const { t, i18n } = useTranslation("global");
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t("contactt.button"));
  const [status, setStatus] = useState({});

  useEffect(() => {
    setButtonText(t("contactt.button"));
  }, [i18n.language]);
  
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText(t("contactt.sending"));

    try {
      let response = await fetch("", { // Cambiado el puerto a 3001
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText(t("contactt.button"));

      let result = await response.json();

      setFormDetails(formInitialDetails);

      if (result.code === 200) {

        Swal.fire({
          position: "mid-end",
          icon: "success",
          title: t("contactt.positive"),
          showConfirmButton: false,
          timer: 1500
        });


      } else {
        Swal.fire({
          position: "mid-end",
          icon: "error",
          title: t("contactt.negative"),
          showConfirmButton: false,
          timer: 1500
        });
       
      }
    } catch (error) {

      setButtonText(t("contactt.button"));

      Swal.fire({
        position: "mid-end",
        icon: "error",
        title: t("contactt.negative"),
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{t("contactt.get-in-touch")}</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder={t("contactt.first-name")} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder={t("contactt.last-name")} onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.((com)|(net)|(org)|(hotmail)|(gmail)|(outlook))$"  value={formDetails.email} placeholder={t("contactt.email")} onChange={(e) => onFormUpdate('email', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="tel" maxLength="12"  value={formDetails.phone} placeholder={t("contactt.phone")}onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder={t("contactt.message")} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>                 
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
            <label className="lbl-contact">{t("contactt.meet-title")}</label>
            <a href="https://calendly.com/francososa1/30min" target="_blank" className="a-meet">{t("contactt.meet")}</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
