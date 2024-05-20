import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/home";
import Project from "../pages/project/project";
import Contact from "../pages/contact/contact";
import Experience from "../pages/experience/experience";

const RoutesApp = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/jobs" element={<Experience />} />
        </Routes>
    );
};
export default RoutesApp
