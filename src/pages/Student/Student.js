import React, {useContext, useEffect} from 'react';
import './Student.css'
import {Col, Container, Row} from "react-bootstrap";
import SemestresListTest from "../../Components/Education/SemestersListTest";
import Disciplines from '../../Components/Education/Disciplines'
import {useSemesterList, useSubject} from "../../hooks/hooks";
import {Context} from "../../index";

const Student = () => {
    const {semesters} = useContext(Context)

    const countSemesters = (useSemesterList()?.curriculum_segment?.curriculum?.segments)
    semesters.setSemesters(countSemesters)

    const AllCountSubject = (useSubject()?.curriculum_segment?.curriculum?.parent?.segments)
    if (AllCountSubject !== undefined) {
        semesters.setAllDisciplines(AllCountSubject)
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col md={3}>
                    <SemestresListTest/>
                </Col>
                <Col md={9}>
                    <Disciplines/>
                </Col>
            </Row>
        </Container>
    )
};

export default Student;