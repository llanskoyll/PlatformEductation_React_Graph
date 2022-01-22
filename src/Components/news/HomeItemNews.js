import React from 'react';
import {Container} from "react-bootstrap";
import HomeItemNavbar from "./HomeItemNavbar";

const HomeItemNews = ({news}) => {
    return (
        <>

        <Container className="mt-5 itemNews">
            <HomeItemNavbar/>
            <div className="titleItemNews">
                {news[0]?.title}
                <hr/>
            </div>
            <div className="bodyItemNews">
                {news[0]?.body}
            </div>
        </Container>
        </>
    );
};

export default HomeItemNews;
