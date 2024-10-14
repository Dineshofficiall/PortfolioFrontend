// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
// css
import "./skills.css";
import { SkillsViewModal } from "../../../viewModal/SkillsViewModal";
var SkillsScreen = function () {
    var skillsObject = SkillsViewModal();
    return (React.createElement("section", { id: "skills" },
        React.createElement(Container, { className: "col-12 col-md-11 col-lg-8 my-5" },
            React.createElement("div", { className: "text-center mb-5" },
                React.createElement("h1", null, "Skills"),
                React.createElement("article", null, "Here are some of my skills on which I have been working on for the past 9months")),
            React.createElement(Row, { xs: 1, sm: 2, md: 3, lg: 3, className: "d-flex justify-content-evenly align-items-center gap-5 p-3 p-sm-0" }, skillsObject.map(function (data, index) { return (React.createElement(Col, { key: index, className: "skillSet-parent" },
                React.createElement("h4", { className: "text-center mt-4 mb-0" }, data.technology),
                React.createElement("div", { className: "skillSet" }, data.programmingLanguage.map(function (skill, skillIndex) { return (React.createElement("div", { className: "icons-container", key: skillIndex },
                    React.createElement(Image, { src: skill.image, width: 23, alt: skill.imgAlt }),
                    React.createElement("li", null, skill.skill))); })))); })))));
};
export default SkillsScreen;
