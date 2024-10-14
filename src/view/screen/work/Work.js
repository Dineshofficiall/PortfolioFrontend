// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { WorkIcon } from "../../../Images/WorkIcon";
import "./Work.css";
var Work = function () {
    var icon = WorkIcon();
    return (React.createElement("section", { id: "work", className: "my-5 py-5" },
        React.createElement(Container, { className: "col-12 col-md-10 col-lg-7" },
            React.createElement("div", { className: "text-center mb-5" },
                React.createElement("h1", null, "Work Experience "),
                React.createElement("article", null, "My work experience as a full stack engineer and working on companies and projects.")),
            React.createElement(Row, { className: "col-12 ms-0 ms-sm-2 contents" },
                React.createElement("aside", { className: "content-inner-block" },
                    React.createElement(Col, { className: "col-12 border rounded-4 p-1 p-sm-3 mb-4 box" },
                        React.createElement("div", { className: "d-flex align-items-center" },
                            React.createElement(Image, { src: icon.hemaIcon, width: 45, className: "me-3", alt: "" }),
                            React.createElement("div", null,
                                React.createElement("h5", { className: "m-0 pt-2" }, "Hema enterprise, Cuddalore TamilNadu"),
                                React.createElement("small", { className: "m-0" }, "ReactNative Developer - Mobile Development"))),
                        React.createElement("div", { className: "mt-3 mb-2" },
                            React.createElement("em", { style: { fontSize: "12.3px", fontWeight: "lighter" } }, "Sep 2024 - Present")),
                        React.createElement("ul", null,
                            React.createElement("li", { className: "list-block" }, "In my role as a React Native frontend developer at Hema Enterprise Pvt Ltd for the past 2 months, I have gained profound insights into system architecture, particularly the MVVM (Model-View-ViewModel) design pattern."),
                            React.createElement("li", { className: "list-block" }, "Collaborating with seasoned professionals has significantly deepened my comprehension of best practices in application development."),
                            React.createElement("li", { className: "list-block" }, "I successfully completed an independent project focused on event management, which allowed me to effectively apply my skills and creativity."),
                            React.createElement("li", { className: "list-block" }, "Following this project, I advanced to real-time initiatives, including the development of a meeting agenda and a form builder, which further enriched my practical experience in crafting responsive mobile applications."))))))));
};
export default Work;
