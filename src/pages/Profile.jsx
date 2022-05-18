import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"
import CardProfile from '../components/CardProfile'
import PostList from '../components/PostList'
import { useEffect, useState } from 'react'
import getClassName from '../tools/getClassName'
import "./Profile.css"

const Profile = () => {
    const params = useParams();
    const [infoProfile, setInfoProfile] = useState({})

    useEffect(() => {
        // Axios
        // .get(`https://api.jsonbin.io/b/6218fbd625fb1b26b188e317?id=${params.id}`)
        // .then((response) => {
        //     setInfoProfile(response.data[0])});
        // Due to the lost API, we have to change this. The new API does not permit to read for an id.
        Axios
        .get(`https://api.jsonbin.io/b/6218fbd625fb1b26b188e317/4`)
        .then(response => setInfoProfile(response.data.find(item => item.id===parseInt(params.id))));
    }, [params.id])

    return (
        <div className="Profile">  
            <CardProfile className={`${getClassName(infoProfile.category)}`} infoProfile={infoProfile} />
            <PostList className={`${getClassName(infoProfile.category)} PostList-profile`} id={parseInt(params.id)}/>
        </div>
    )
}

export default Profile
