import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useNews} from "../../hooks/hooks";
import "../Home/Home.css"
import HomeItemNews from "../../Components/news/HomeItemNews";
import Loading from "../../Components/UI/Loading/Loading";
import PostNewsList from "../../Components/news/PostNewsList";

const HomeItemsNews = () => {
    const params = useParams()
    const news = useNews()
    const currentArray = []
    const findNews = (news, params) => {
        try {
            for (let index = 0; index < news?.length; index++) {
                if (news[index].id === params.id) {
                    currentArray.push(news[index])
                }
            }
        } catch (e) {
            alert(e)
        }
    }
    findNews(news, params)

    return (
        <>
        {news === undefined
            ? <Loading/>
            : <HomeItemNews news={currentArray}
            />
        }
        </>
)
    ;
};

export default HomeItemsNews;
