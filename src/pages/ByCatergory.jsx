import React, {useEffect, useRef, useState} from 'react';
import Layout from "../layout/layout.jsx";
import {useParams} from "react-router-dom";
import {postByCategory, postCategories} from "../APIRequest/APIRequest.js";
import Loaders from "../Components/Loaders.jsx";
import Bloglist from "../Components/Bloglist.jsx";

const ByCatergory = () => {
    let {categoryID}=useParams();
    let [list,setList]=useState(null);
    useEffect(()=>{
        (async ()=>{
            let res=await postByCategory(categoryID);
            setList(res);
        })()
    },[categoryID])

    return (
      <Layout>
          {list===null?<Loaders/>:<Bloglist list={list}/>}
      </Layout>
    );
};

export default ByCatergory;