import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/home";
import Project from "../pages/project/project";
import Contact from "../pages/contact/contact";

const RoutesApp = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
    );
};
export default RoutesApp
