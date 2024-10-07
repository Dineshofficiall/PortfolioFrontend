// eslint-disable-next-line no-unused-vars
import React from 'react'
import About from '../../view/screen/about/About'
import Skills from '../../view/screen/skills/Skills'
import Projects from '../projects/Projects'
import Education from '../education/Education'
import Contact from '../contact/Contact'
import Work from '../work/Work'

function PortfolioPage() {
    return (
        <>
            <About />
            <Skills />
            <Work />
            <Projects />
            <Education />
            <Contact />
        </>
    )
}

export default PortfolioPage