import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Col, Row, Table} from "react-bootstrap";
import './../../pages/Student/Student.css'

const Disciplines = observer(() => {
    const {semesters} = useContext(Context)
    return (
        <Row className="d-flex">
                <Col md={1} className="headcheckDiscipline">
                    Check
                </Col>
                <Col md={10} className="headcheckDiscipline">
                    Дисциплины
                </Col>
                <Col md={1} className="headcheckDiscipline">
                    Check
                </Col>
            {semesters.Discipline?.map(type =>
                <>
                    <Col md={1} className="checkDiscipline">
                        Check
                    </Col>
                    <Col md={10} className="DisciplineName">
                        {type.discipline.name}
                    </Col>
                    <Col md={1} className="checkDiscipline">
                        Check
                    </Col>
                </>
            )}
        </Row>
    );
});

export default Disciplines;
