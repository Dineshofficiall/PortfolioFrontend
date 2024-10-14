import { Route, Routes } from "react-router-dom";
import Navbar from "./view/screen/navbar/PortfolioNavbar";
import PortfolioPage from "./view/screen/mainPage/PortfolioPage";
import ProjectDetail from "./view/screen/ProjectDetail/ProjectDetail";
import Error from "./view/screen/404/Error";
import AllProject from "./view/screen/projects/AllProject";
import WebProject from "./view/screen/projects/WebProject";
import AndroidProject from "./view/screen/projects/AndroidProject";
import React from "react";
// import Footer from "./pages/footer/Footer"
var App = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar, null),
        React.createElement("main", null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(PortfolioPage, null) },
                    React.createElement(Route, { path: "", element: React.createElement(AllProject, null) }),
                    React.createElement(Route, { path: "webProject", element: React.createElement(WebProject, null) }),
                    React.createElement(Route, { path: "androidProject", element: React.createElement(AndroidProject, null) })),
                React.createElement(Route, { path: "/project/details/:id", element: React.createElement(ProjectDetail, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(Error, null) })))));
};
export default App;
