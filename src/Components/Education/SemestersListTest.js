import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {Context} from "../../index";

const SemestersListTest = observer(() => {
    const {semesters} = useContext(Context)
    if(semesters.AllDisciplines !== undefined) {
        semesters.setDiscipline(semesters.AllDisciplines[0]?.disciplineSegments)
    }
    useEffect(() => {
        if(semesters.AllDisciplines !== undefined) {
            semesters.setDiscipline(semesters.AllDisciplines[semesters.IndexSemester]?.disciplineSegments)
        }
    },[semesters.IndexSemester])

    return (
        <ListGroup>
            {semesters.Semesters?.map((type,index) =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type?.id === semesters.selectedSemesters?.id}
                    onClick={() => {semesters.setIndexSemester(index); semesters.setSelectedSemesters(type)}}
                    key={type?.id}
                >
                    {type?.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default SemestersListTest;



