import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import logo from '../assets/img/Logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/wsp.svg';
import { useTranslation } from "react-i18next";


export const NavBar = () => {
    const [t, i18n] = useTranslation("global");
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [selectedLang, setSelectedLang] = useState({ code: 'es', label: 'English', flag: 'https://flagsapi.com/US/flat/64.png' });
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {  
         //Scrollea manualmente para donde quieras que se posicione la seccion skills
        if (value === 'skills') {
            const element = document.getElementById('skills');
            const offset = -600;  // Ajusta este valor según el espacio que quieras dejar arriba del elemento.
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition + offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',  // Desplazamiento suave.
            });
        }
    
        setActiveLink(value);
    };
    


    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang.code);
        setSelectedLang(lang);
    }

    const languages = [
        { code: 'en', label: 'English', flag: 'https://flagsapi.com/US/flat/64.png' },
        { code: 'es', label: 'Español', flag: 'https://flagsapi.com/ES/flat/64.png' }
    ];


    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t("navbar.home")}</Nav.Link>
                        <Nav.Link  href="#" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}onClick={(e) => { e.preventDefault(); onUpdateActiveLink('skills');}}>{t("navbar.skills")}</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>{t("navbar.projects")}</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/f-sosa/" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/f-sosa" target="_blank"><img src={navIcon2}  alt="" /></a>
                            <a href="https://wa.me/541167961881" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <a href="#connect"  onClick={() => onUpdateActiveLink('connect')}><button className="vvd" onClick={() => console.log('connect')}><span>{t("navbar.let's-connect")}</span></button></a>

                        <div className="language">
                            <div className="language-selected">
                                <img className="br-8" src={selectedLang.flag} alt={selectedLang.label} />{selectedLang.label}
                            </div>
                            <ul>
                                {languages.map((lang) => (
                                    <li key={lang.code}>
                                        <a href="#"  onClick={() => changeLanguage(lang)}>
                                            <img className="br-8" src={lang.flag} alt={lang.label} /> <div className="color-label">{lang.label}</div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}