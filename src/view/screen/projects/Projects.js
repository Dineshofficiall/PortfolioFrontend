// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container } from "react-bootstrap";
// css
import "./project.css";
import { Link, Outlet } from "react-router-dom";
var Projects = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { id: "projects" },
            React.createElement(Container, { className: "col-12 col-md-9 col-lg-8" },
                React.createElement("div", { className: "d-flex flex-column align-items-center justify-content-center mb-5" },
                    React.createElement("h1", null, "Projects"),
                    React.createElement("article", { className: "col-10 col-sm-8 text-center py-3" }, "I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.")),
                React.createElement("div", { className: "d-flex justify-content-center align-items-center" },
                    React.createElement("div", { className: "col-11 col-md-7 col-lg-5" },
                        React.createElement("ul", { className: "navigation" },
                            React.createElement("li", null,
                                React.createElement(Link, { to: "" }, "App")),
                            React.createElement("li", null, "|"),
                            React.createElement("li", null,
                                React.createElement(Link, { to: "webProject" }, "Web")),
                            React.createElement("li", null, "|"),
                            React.createElement("li", null,
                                React.createElement(Link, { to: "androidProject" }, "Android"))))),
                React.createElement(Outlet, null)))));
};
export default Projects;
