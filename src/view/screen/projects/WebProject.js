// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// image
import { ProjectImage } from '../../../Images/ProjectImage';
var WebProject = function () {
    var img = ProjectImage();
    return (React.createElement("aside", { className: 'content-inner-block' },
        React.createElement(Row, { xs: 1, sm: 2, lg: 3, className: "g-4 g-sm-5 g-md-4 g-lg-3 my-4" }, Array.from({ length: 5 }).map(function (_, idx) { return (React.createElement(Col, { key: idx },
            React.createElement(Card, { className: 'p-2 rounded-4 project-card' },
                React.createElement(Card.Img, { variant: "top", className: 'rounded-4 p-2 object-fit-cover project-card', height: 180, src: img.projectCardImg }),
                React.createElement(Card.Header, { className: 'header-content' },
                    React.createElement("li", null, "Bootstrap"),
                    React.createElement("li", null, "React Js"),
                    React.createElement("li", null, "Java"),
                    React.createElement("li", null, "Redux"),
                    React.createElement("li", null, "Spring Boot"),
                    React.createElement("li", null, "Docker")),
                React.createElement(Card.Body, { className: 'project-card pt-2 pb-2 px-2' },
                    React.createElement(Card.Title, { className: 'project-card my-0' }, "Card title"),
                    React.createElement("p", { className: 'date-range' },
                        React.createElement("em", null, "Aug 2024 - Sep 2024")),
                    React.createElement(Card.Text, { className: 'project-description' }, "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),
                React.createElement("hr", { className: 'mt-0 mb-2' }),
                React.createElement(Card.Footer, { className: 'card-footer' }, "last Modified : 23/05/2023")))); }))));
};
export default WebProject;
