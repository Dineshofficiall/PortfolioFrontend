// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Col, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { NavIcon } from '../../../Images/NavIcon';
var PortfolioNavbar = function () {
    var icon = NavIcon();
    var _a = useState("GitHub Profile"), gitHubStatus = _a[0], setGithubStates = _a[1];
    var githubRedirection = function () {
        setGithubStates("Redirecting . . . .");
        window.location.href = "https://github.com/Dineshofficiall";
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar, { sticky: "top", collapseOnSelect: true, expand: "lg" },
            React.createElement(Container, { className: 'px-0 px-lg-5' },
                React.createElement(Col, { className: 'col-md-3 ms-2 ms-lg-0 d-flex justify-content-start justify-content-md-center align-items-center' },
                    React.createElement(Image, { style: { width: '40px', marginRight: '.8rem' }, src: icon.seoLogo, alt: 'Logo' }),
                    React.createElement(Navbar.Brand, null, "Portfolio")),
                React.createElement(Navbar.Toggle, { "aria-controls": "responsive-navbar-nav" }),
                React.createElement(Navbar.Collapse, { className: 'py-4 py-lg-0 ', id: "responsive-navbar-nav" },
                    React.createElement(Nav, { className: "col-lg-8 mb-4 mb-lg-0 d-flex justify-content-evenly align-items-center me-auto" },
                        React.createElement(ScrollLink, { activeClass: "active", className: "nav-link", to: "about", spy: true, smooth: true, offset: -70, duration: 500, style: { cursor: "pointer" } }, "About"),
                        React.createElement(ScrollLink, { activeClass: "active", className: "nav-link", to: "skills", spy: true, smooth: true, offset: -70, duration: 500, style: { cursor: "pointer" } }, "Skills"),
                        React.createElement(ScrollLink, { activeClass: 'active', className: 'nav-link', to: 'work', spy: true, smooth: true, offset: -70, duration: 500, style: { cursor: "pointer" } }, "Work"),
                        React.createElement(ScrollLink, { activeClass: "active", className: "nav-link", to: "projects", spy: true, smooth: true, offset: -70, duration: 500, style: { cursor: "pointer" } }, "Projects"),
                        React.createElement(ScrollLink, { activeClass: "active", className: "nav-link", to: "education", spy: true, smooth: true, offset: -70, duration: 500, style: { cursor: "pointer" } }, "Education")),
                    React.createElement(Nav, { className: 'col-lg-3' },
                        React.createElement(Button, { variant: "outline-secondary rounded-pill", onClick: function () { return githubRedirection(); } }, gitHubStatus)))))));
};
export default PortfolioNavbar;
