// eslint-disable-next-line no-unused-vars
import React from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Education from '../education/Education';
import Contact from '../contact/Contact';
import Work from '../work/Work';
var PortfolioPage = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(About, null),
        React.createElement(Skills, null),
        React.createElement(Work, null),
        React.createElement(Projects, null),
        React.createElement(Education, null),
        React.createElement(Contact, null)));
};
export default PortfolioPage;
