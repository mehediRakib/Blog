import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postDetails} from "../APIRequest/APIRequest.js";
import Layout from "../layout/layout.jsx";
import Loaders from "../Components/Loaders.jsx";
import Bloglist from "../Components/Bloglist.jsx";
import BlogDetails from "../Components/BlogDetails.jsx";

const DetailsPage = () => {
    let {postID}=useParams();
    let [list,setList]=useState(null);
    useEffect(()=>{
        (async ()=>{
            let res=await postDetails(postID)
            setList(res);
        })()

    },[postID])
    return (
        <Layout>
            {list===null?<Loaders/>:<BlogDetails list={list}/>}
        </Layout>
    );
};

export default DetailsPage;