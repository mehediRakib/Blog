import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailsPage from "./pages/DetailsPage.jsx";
import ByCatergory from "./pages/ByCatergory.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/details/:postID" element={<DetailsPage/>}/>
               <Route path="/bycategory/:categoryID" element={<ByCatergory/>}/>
           </Routes>
       </BrowserRouter>
    );
};

export default App;