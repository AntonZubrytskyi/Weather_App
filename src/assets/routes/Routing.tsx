import React from 'react';
import {Route, Routes} from 'react-router-dom'
import CitiesWrapper from "../../pages/cities/CitiesWrapper";
import CityDetails from "../../pages/cityDetails/CityDetails";
import Page404 from "../../pages/support/Page404";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<CitiesWrapper/>}/>
            <Route path="/cities/:cityName" element={<CityDetails/>}/>
            <Route path="/*" element={<Page404/>}/>
        </Routes>
    );
};

export default Routing;
