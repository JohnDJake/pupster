import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
    const location = useLocation();
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home
                </Link>
                </li>
                <li className="nav item">
                <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About
                </Link>
                </li>
                <li className="nav item">
                <Link to="/discover" className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>Discover
                </Link>
                </li>
                <li className="nav item">
                <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>Search
                </Link>
                </li>
            </ul>
        </div>
    )
}
