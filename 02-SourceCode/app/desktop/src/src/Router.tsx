// Import the react library
import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"

// Import the pages
import Home from './pages/views/Home'
import About from './pages/views/About'
import Works from './pages/views/Works'

// Import the includes
import Nav from "./pages/includes/Nav";
import Header from "./pages/includes/Header";
import Footer from "./pages/includes/Footer";

/**
 * Routing component
 * @returns The routing
 */
function Routing() 
{
    // Get the current location
    let location = useLocation();

    // Check if the current page is a pop-up
    let isPopUp = location.pathname.includes("/pop-ups")

    // Return the routing
    return (
        <>
            { !isPopUp && <Header />}
            { !isPopUp && <Nav />}
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="/pop-ups">
                    <Route index element={<Works />} />
                </Route>
            </Routes>
            { !isPopUp && <Footer />}
        </>
    );
}

/**
 * Application router
 * @returns The router
 */
function Router() {
    return (
        <HashRouter basename="/">
            <Routing />
        </HashRouter> 
    )
}

export default Router;