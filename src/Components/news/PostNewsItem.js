import React from 'react';
import {Col, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const PostNewsItem = ({news}) => {
    const router = useHistory()

    return (
        <>
            {news?.map( (post,index) =>
                <tr key = {index}>
                    <th>Произвольная дата</th>
                    <th>
                        <Row
                            className="d-flex justify-content-between align-items-center"
                            style = {{cursor: "pointer"}}
                        >
                            <Col md = {12} onClick={() => router.push(`/home/${post.id}`)}>
                                {post.title}
                            </Col>
                        </Row>
                    </th>
                </tr>
            )}
        </>
    );
};

export default PostNewsItem;