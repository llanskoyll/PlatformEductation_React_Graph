import React from 'react';
import {Table} from "react-bootstrap";
import PostNewsItem from "./PostNewsItem";

const PostNewsList = ({news}) => {
    return (
        <Table
            striped bordered hover
        >
            <thead>
            <tr>
                <th>Дата</th>
                <th>Описание</th>
            </tr>
            </thead>
            <tbody>
                <PostNewsItem news = {news} />
            </tbody>
        </Table>
    );
};

export default PostNewsList;