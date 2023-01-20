import React from "react";
import {Switch, Router} from "react-router-dom"
import Pothography from "./src/components/Pothograph";

function Routes() {
    return(
        <>
        <Switch>
            <Router path="/Pothography">
                <Pothography/>
            </Router>
            <Router path="/">
                <Pothography/>
            </Router>
        </Switch>
        </>
    )
}
export default Routes;