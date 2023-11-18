import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout.jsx";
import Bloglist from "../Components/Bloglist.jsx";
import {postLatest} from "../APIRequest/APIRequest.js";
import Loaders from "../Components/Loaders.jsx";

const HomePage = () => {
 const [list,SetList]=useState(null);
 useEffect(()=>{
     (async ()=>{
         let res=await postLatest();
         SetList(res);

     })()
 },[])
    return (
        <Layout>
            {list===null?<Loaders/>:<Bloglist list={list}/>}
        </Layout>
    );
};

export default HomePage;