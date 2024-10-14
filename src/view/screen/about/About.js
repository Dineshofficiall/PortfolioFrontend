// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { ProfileIcon } from '../../../Images/ProfileIcon';
import "./about.css";
var About = function () {
    var icon = ProfileIcon();
    var _a = useState("Check Resume"), resumeStates = _a[0], setResumeStatus = _a[1];
    var resumeRedirection = function () {
        setResumeStatus("Redirecting . . . .");
        window.location.href = "https://drive.google.com/file/d/1_uNcfz0v329WQElHAJ4AyZXvYw1R1kJd/view?usp=drive_link";
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { id: "about" },
            React.createElement(Container, { className: 'my-3 py-3 my-lg-4 py-lg-2 px-lg-4' },
                React.createElement(Row, { className: 'd-md-flex justify-content-evenly' },
                    React.createElement(Col, { className: 'order-1 order-md-0 col-12 col-md-6 col-lg-7 px-3 ps-md-5 pe-md-2 my-4 my-md-0 d-flex flex-column justify-content-evenly align-items-start' },
                        React.createElement("div", { className: 'my-lg-4 name' },
                            React.createElement("h1", null, "Hi, I am"),
                            React.createElement("h1", null, "Dinesh Kumar")),
                        React.createElement("h1", { className: 'domain' }, "I am a fullstack developer"),
                        React.createElement("div", { className: 'py-3 py-md-0 my-lg-2' },
                            React.createElement("p", { className: 'header-passage' }, "I am an enthusiastic developer holding a BSc in Computer Science, complemented by two months of experience in React Native frontend development, with a focus on crafting responsive mobile applications. Driven by a desire to enhance my skill set, I am committed to contributing to innovative projects that deliver meaningful solutions.")),
                        React.createElement("div", { className: 'Resume-sec' },
                            React.createElement(Button, { variant: "outline-secondary rounded-pill", onClick: function () { return resumeRedirection(); } }, resumeStates))),
                    React.createElement(Col, { className: 'order-0 order-md-1 col-12 col-md-5 col-lg-4  pe-lg-4 py-lg-5 d-flex justify-content-center ' },
                        React.createElement(Image, { src: icon.Profile, alt: '', style: { width: "87%", height: "320px", objectFit: "cover", borderRadius: "56%" } })))))));
};
export default About;
