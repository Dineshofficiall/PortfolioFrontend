import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { SkillsViewModal } from '../../viewModal/SkillsViewModal';
import { TechnologyCategory } from '../../types/SkillsTypes';

export const SkillsComponent: React.FC = () => {
    const skillsObject: TechnologyCategory[]  = SkillsViewModal();

    return (
        <>
            <Row  xs={1} sm={2} md={3} lg={3} className="d-flex justify-content-evenly align-items-center gap-5 p-3 p-sm-0">
            { skillsObject.map((data, index) => (
                <Col key={index} className='skillSet-parent'>
                    <h4 className='text-center mt-4 mb-0'>{data.technology}</h4>
                    <div className='skillSet'>
                        {data.programmingLanguage.map((skill, skillIndex) => (
                            <div className='icons-container' key={skillIndex}>
                                <Image src={skill.image} width={23} alt={skill.imgAlt} />
                                <li>{skill.skill}</li>
                            </div>
                        ))}
                    </div>
                </Col>
                ))}
            </Row>     
        </>
    )
};