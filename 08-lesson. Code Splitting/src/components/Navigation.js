import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        exact
                        className="Navigation-link"
                        activeClassName="Navigation-link-active"
                    >
                        Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/shows"
                        className="Navigation-link"
                        activeClassName="Navigation-link-active"
                    >
                        Shows
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className="Navigation-link"
                        activeClassName="Navigation-link-active"
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </>
    );
}
