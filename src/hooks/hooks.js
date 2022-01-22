import React, {useEffect, useState} from 'react'
import {useQuery} from "@apollo/client";
import {
    GET_CURRICULUMPROFILE,
    GET_GROUP, GET_NEWS, GET_NOTIFICATIONS, GET_SEMESTERLIST,
    GET_SUBJECT,
    GET_USER,
    GET_USER_PROFILE
} from "../query/query";

export const useUser = () => {
    const {data, loading, error} = useQuery(GET_USER)
    const [user, setUser] = useState('')
    useEffect(() => {
        if (!loading) {
            setUser(data.user)
        }
    }, [data])
    return user
}
export const useNotifications = () => {
    const {data, loading, error} = useQuery(GET_NOTIFICATIONS)
    const [notifications, setNotifications] = useState('')
    useEffect(() => {
        if(!loading) {
            setNotifications(data.notifications)
        }
    },[data])
    return notifications
}
export const useNews =  () => {
    const {data, loading, error} = useQuery(GET_NEWS)
    const [news, setNews] = useState()
    useEffect(() => {
        if (!loading) {
            setNews(data.news)
        }
    }, [data])
    return news
}
export const useCheckemail = () => {
    const {data, loading, error} = useQuery(GET_USER_PROFILE)
    const [status, setStatus] = useState(true)

    useEffect(() => {
        if (!loading) {
            if (data) {
                setStatus(true)
            } else {
                setStatus(false)
            }

        }
    }, [data])
    return status
}
export const useGroup = () => {
    const {data, loading, error} = useQuery(GET_GROUP)
    const [group, setGroup] = useState([])

    useEffect(() => {
        if (!loading) {
            setGroup(data.group)
        }
    }, [data])
    return group
}
export const useSemesterList = () => {
    const {data, loading, error} = useQuery(GET_SEMESTERLIST)
    return data
}
export const useCurriculumProfile = () => {
    const {data, loading, error} = useQuery(GET_CURRICULUMPROFILE)
    return data
}
export const useSubject = () => {
    const {data, loading, error} = useQuery(GET_SUBJECT)
    return data
}
