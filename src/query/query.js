import {gql} from "@apollo/client";

export const GET_USER = gql`  
    query {
        user {
            id, name,first_name,middle_name,last_name
        }
    }
`
export const GET_NEWS = gql `
    query {
        news {
            id,title,body
        }
    }
`

export const GET_NOTIFICATIONS = gql`
    query {
        notifications {
            id,title,message,link
        }
    }
`
export const GET_USER_PROFILE = gql` 
    query  {
        user_profile {
            is_email_actual
        }
    }
`

export const GET_GROUP = gql`
    query  {
        group {
            id, name
        }
    }
`
export const GET_SEMESTERLIST = gql`
    query { 
        curriculum_segment {
            curriculum {
                 segments {
                    id,name,year
                }
            }
        }
    }
`
export const GET_CURRICULUMPROFILE = gql`
    query { 
        curriculum_segment {
            curriculum {
                name
            }
        }
    }
  
`

export const GET_SUBJECT = gql`
    query {
        curriculum_segment {
            curriculum {
                parent {
                    segments {
                        disciplineSegments {
                            discipline {
                                name,id
                            }
                        }
                    }
                }
            }
        }
    }
`



