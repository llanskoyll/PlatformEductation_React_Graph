import React, {useEffect, useState} from 'react'
import "./Home.css"
import {Container} from "react-bootstrap";
import {useNews} from "../../hooks/hooks";
import PostNewsList from "../../Components/news/PostNewsList";
import Loading from "../../Components/UI/Loading/Loading";

const Home = () => {
    const news = useNews()

    return (
        <Container>
            <div className="row">
                <div className="col-lg-12">
                    <div className="home mt-5">
                        <div className="main">
                            {news === undefined
                                ?   <Loading/>
                                :   <PostNewsList news={news}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home;