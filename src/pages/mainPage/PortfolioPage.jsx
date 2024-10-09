// eslint-disable-next-line no-unused-vars
import React from 'react'
import About from '../../view/screen/about/About'
import Skills from '../../view/screen/skills/Skills'
import Projects from '../projects/Projects'
import Education from '../../view/screen/education/Education'
import Contact from '../../view/screen/contact/Contact'
import Work from '../../view/screen/work/Work'

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