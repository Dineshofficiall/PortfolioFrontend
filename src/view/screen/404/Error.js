// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./errorStyle.css";
var Error = function () {
    return (React.createElement(Container, { className: "unknown-url-block" },
        React.createElement(Row, null,
            React.createElement(Image, { src: "https://material-kit-react.devias.io/assets/error-404.png", className: "object-fit-contain", style: { height: "60vh" } }),
            React.createElement(Col, { sm: 12, className: "d-flex justify-content-center align-items-center " },
                React.createElement("p", null, "Unknown Url")),
            React.createElement(Col, { sm: 12 },
                React.createElement("h4", { className: "fw-bold text-center" }, "404 Not Found")))));
};
export default Error;
