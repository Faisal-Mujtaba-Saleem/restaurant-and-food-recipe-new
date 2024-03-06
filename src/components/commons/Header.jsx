import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { RefContext } from '../../contexts/RefContext';

import Logo from "../../assets/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavLinks = [
    {
        label: "HOME",
        route: '/'
    },
    {
        label: "ABOUT",
        route: '/'
    },
    {
        label: "TODAY'S SPECIAL",
        route: '/'
    },
    {
        label: "MENU",
        route: '/'
    },
    {
        label: "RESERVATION",
        route: '/'
    },
    {
        label: "TEAM",
        route: '/'
    },
    {
        label: "GALLERY",
        route: '/'
    },
    {
        label: "CONTACT",
        route: '/'
    },
    {
        label: "SEATS",
        route: '/seats'
    },
    {
        label: "BLOG",
        route: '/blogs'
    },
]
const Header = () => {
    const [activeSection, setActiveSection] = useState(null);

    const headerRef = useRef(null);
    const responsiveHeaderRef = useRef(null);
    const navRef = useRef(null);

    const {
        homeRef,
        aboutRef,
        contactRef,
        teamRef,
        reservationRef,
        menuRef,
        galleryRef,
        todaySpecialRef,
        seatsRef,
        blogsRef
    } = useContext(RefContext);

    useEffect(() => {
        window.onscroll = (e) => {
            if (!headerRef.current.className.includes("fixed top-0 w-screen")) {
                headerRef.current.classList.add("fixed");
                headerRef.current.classList.add("top-0");
                headerRef.current.classList.add("w-screen");
            }
            if (window.scrollY === 0) {
                headerRef.current.classList.remove("fixed");
                headerRef.current.classList.remove("top-0");
                headerRef.current.classList.remove("w-screen");
            }

            if (!responsiveHeaderRef.current.className.includes("fixed top-0 w-screen")) {
                responsiveHeaderRef.current.classList.add("fixed");
                responsiveHeaderRef.current.classList.add("top-0");
                responsiveHeaderRef.current.classList.add("w-screen");
            }
            if (window.scrollY === 0) {
                responsiveHeaderRef.current.classList.remove("fixed");
                responsiveHeaderRef.current.classList.remove("top-0");
                responsiveHeaderRef.current.classList.remove("w-screen");
            }
        }
    }, [])

    useEffect(() => {
        if (
            !!homeRef &&
            !!aboutRef &&
            !!todaySpecialRef &&
            !!menuRef &&
            !!reservationRef &&
            !!teamRef &&
            !!galleryRef &&
            !!contactRef
        ) {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Percentage of the section visible
            };
            const observer = new IntersectionObserver((entries) => {
                console.log(entries);
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        switch (entry.target) {
                            case homeRef.current:
                                setActiveSection("HOME");
                                break;
                            case aboutRef.current:
                                setActiveSection("ABOUT");
                                break;
                            case todaySpecialRef.current:
                                setActiveSection("TODAYS-SPECIAL");
                                break;
                            case menuRef.current:
                                setActiveSection("MENU");
                                break;
                            case reservationRef.current:
                                setActiveSection("RESERVATION");
                                break;
                            case teamRef.current:
                                setActiveSection("TEAM");
                                break;
                            case galleryRef.current:
                                setActiveSection("GALLERY");
                                break;
                            case contactRef.current:
                                setActiveSection("CONTACT");
                                break;
                            case seatsRef.current:
                                setActiveSection("SEATS");
                                break;
                            case blogsRef.current:
                                setActiveSection("BLOG");
                                break;
                            default:
                                setActiveSection(null);
                                break;
                        }
                    }
                });
            },
                observerOptions);

            const sections = [
                homeRef?.current,
                aboutRef?.current,
                todaySpecialRef?.current,
                menuRef?.current,
                reservationRef?.current,
                teamRef?.current,
                galleryRef?.current,
                contactRef?.current,
                seatsRef?.current,
                blogsRef?.current
            ];

            sections.forEach((section) => {
                if (section) {
                    observer.observe(section);
                }
            });

            return () => {
                sections.forEach((section) => {
                    if (section) {
                        observer.unobserve(section);
                    }
                });
            };
        }
    }, [
        homeRef,
        aboutRef,
        todaySpecialRef,
        menuRef,
        reservationRef,
        teamRef,
        galleryRef,
        contactRef,
        seatsRef,
        blogsRef
    ]);

    useEffect(() => {
        if (navRef.current?.querySelector(`#${activeSection}`)) {
            Array.from(navRef.current.children).forEach((link) => {
                if (link.classList.contains("text-[#f4b350]") || link.classList.contains("after:opacity-[1]")) {
                    link.classList.remove("text-[#f4b350]");
                    link.classList.remove("after:opacity-[1]");
                }
            })
            const activeLink = navRef.current?.querySelector(
                `#${activeSection}`
            );
            activeLink.className += " text-[#f4b350] after:opacity-[1]";
        }
    }, [activeSection])



    function handleLinkClick(e) {
        switch (e.target.innerText) {
            case "HOME":
                homeRef.current.scrollIntoView();
                break;
            case "ABOUT":
                aboutRef.current.scrollIntoView();
                break;
            case "TODAY'S SPECIAL":
                todaySpecialRef.current.scrollIntoView();
                break;
            case "MENU":
                menuRef.current.scrollIntoView();
                break;
            case "RESERVATION":
                reservationRef.current.scrollIntoView();
                break;
            case "TEAM":
                teamRef.current.scrollIntoView();
                break;
            case "GALLERY":
                galleryRef.current.scrollIntoView();
                break;
            case "CONTACT":
                contactRef.current.scrollIntoView();
                break;

            default:
                break;
        }
    }
    return (
        <>
            <header ref={headerRef} className="text-gray-400 bg-[#222222] body-font z-10 lg:block hidden">
                <div className="mx-0 flex flex-col md:flex-row items-center justify-around w-full h-[12vh]">
                    <Link to="/" className="flex title-font font-medium text-white mb-4 md:!mb-0 cursor-pointer">
                        <img src={Logo} alt="PLATO^" />
                    </Link>
                    <nav ref={navRef} className="flex flex-wrap items-center justify-center text-base h-full">
                        {
                            NavLinks.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={link.route}
                                        id={
                                            link.label === "TODAY'S SPECIAL" ?
                                                "TODAYS-SPECIAL" :
                                                link.label
                                        }
                                        className={`px-3 h-full flex items-center justify-center text-[#999999] hover:!text-[#f4b350] text-xs font-medium cursor-pointer relative after:opacity-0 hover:after:opacity-[1] after:absolute after:top-0 after:bg-[#f4b350] after:h-1 after:w-[105%]`}
                                        onClick={handleLinkClick}>
                                        {link.label}
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>
            </header>

            {
                ['xxl'].map(
                    (expand, index) => <Navbar key={index} ref={responsiveHeaderRef} expand="xxl" className="bg-[#222222] text-gray-400 body-font w-screen lg:hidden block z-10">
                        <Container fluid className="h-full items-center">
                            <Navbar.Brand>
                                <Link to="/" className="flex title-font font-medium text-white cursor-pointer">
                                    <img src={Logo} alt="PLATO^" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" style={{
                                border: "2px solid #ddd",
                                backgroundColor: "#ddd"
                            }} />
                            <Navbar.Offcanvas
                                id="offcanvasNavbar-expand-xxl"
                                aria-labelledby="offcanvasNavbarLabel-expand-xxl"
                                placement="end"
                            >
                                <Offcanvas.Header closeButton className="bg-[#222222] text-gray-400">
                                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
                                        <Link to="/" className="flex title-font font-medium text-white cursor-pointer">
                                            <img src={Logo} alt="PLATO^" />
                                        </Link>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="bg-[#222222] text-gray-400">
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        {
                                            NavLinks.map((link, index) => <Nav.Item
                                                key={index}
                                                id={
                                                    link.label === "TODAY'S SPECIAL" ?
                                                        "TODAYS-SPECIAL" :
                                                        link.label
                                                }
                                                className="py-2">
                                                <Link
                                                    to={link.route}
                                                    className={`text-[#999999] hover:!text-[#f4b350] cursor-pointer text-sm font-medium`}
                                                    onClick={handleLinkClick}>
                                                    {link.label}
                                                </Link>
                                            </Nav.Item>
                                            )
                                        }
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                )
            }
        </>
    )
}

export default Header;