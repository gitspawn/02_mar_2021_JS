import React from "react";
import Layout from "./Layout";
import { Route, Switch, Redirect, Link, NavLink } from "react-router-dom";

import Home from "../views/Home";
import Shows from "../views/Shows";
import About from "../views/About";
import Navigation from "./Navigation";
import ShowDetails from "../views/ShowDetails";
import NotFound from "../views/NotFound";

export default function App() {
    return (
        <Layout>
            {/* <ul>
                <li>
                    <a href="/">Home Page</a>
                </li>
                <li>
                    <a href="/shows">Shows</a>
                </li>
            </ul> */}

            {/* Link */}
            {/* <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/shows">Shows</Link>
                </li>
            </ul> */}

            {/* NavLink */}

            {/* <Navigation /> */}

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/shows" exact component={Shows} />
                <Route path="/shows/:showId" component={ShowDetails} />
                {/* <Redirect to="/" /> */}
                <Route component={NotFound} />
            </Switch>
        </Layout>
    );
}
