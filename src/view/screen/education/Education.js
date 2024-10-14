// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { EducationalViewModal } from '../../../viewModal/EducationalViewModal';
// CSS
import './education.css';
var Education = function () {
    var educationalModal = EducationalViewModal();
    return (React.createElement("section", { id: "education", className: 'my-5 py-5' },
        React.createElement(Container, { className: 'col-12 col-md-10 col-lg-7' },
            React.createElement("div", { className: 'text-center mb-5' },
                React.createElement("h1", null, "Education"),
                React.createElement("article", null, "My education has been a journey of self-discovery and growth. My educational details are as follows.")),
            React.createElement(Row, { className: 'col-12 ms-0 ms-sm-2 contents' },
                React.createElement("aside", { className: 'content-inner-block' }, educationalModal.map(function (data, index) { return (React.createElement(Col, { key: index, className: 'col-12 border rounded-4 p-3 mb-4 box' },
                    React.createElement("div", { className: 'd-flex align-items-center' },
                        React.createElement(Image, { src: data.eduIcon, width: 45, className: 'me-3', alt: data.iconAlt }),
                        React.createElement("div", null,
                            React.createElement("h5", { className: 'm-0' }, data.schoolingName),
                            React.createElement("small", { className: 'm-0' }, data.domain))),
                    React.createElement("div", { className: 'mt-3 mb-2' },
                        data.CGPA && React.createElement("h6", { className: 'm-0' }, data.CGPA),
                        React.createElement("em", { style: { fontSize: "12.3px", fontWeight: "lighter" } }, data.courseDuration)),
                    React.createElement("article", { className: 'educationPassage' }, data.description))); }))))));
};
export default Education;
