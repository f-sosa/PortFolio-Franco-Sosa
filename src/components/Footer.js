import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/Logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/wsp.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">                              
                 <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon-footer">
                        <a href="https://www.linkedin.com/in/f-sosa/" target="_blank"><img src={navIcon1} /></a>
                        <a href="https://github.com/f-sosa" target="_blank"><img src={navIcon2} /></a>
                        <a href="https://wa.me/541167961881" target="_blank"><img src={navIcon3} /></a>
                    </div>
                    <p>CopyRight 2024. All Right Reserved </p>
                 </Col>
                </Row>
            </Container>
        </footer>
    )
}