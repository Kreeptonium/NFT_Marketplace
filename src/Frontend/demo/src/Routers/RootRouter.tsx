import React, { Component } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import history from "./Common/History";
import MainLayout from "../Containers/Layouts/MainLayout/MainLayout";


// Import Pages
import HomePage from "../Pages/Home/HomePage";
import MarketPlacePage from "../Pages/Marketplace/MarketPlacePage";

export default class RootRouter extends Component{

    public render(){
        return (
            <React.Fragment>
                <Router history={history}>
                    <Switch>
                        <Route path="/:path?" exact>
                            <MainLayout>
                                <Switch>
                                    <Route path="/" exact component={HomePage}></Route>
                                    <Route path="/home" component={HomePage}></Route>
                                    <Route path="/marketplace" component={MarketPlacePage}></Route>
                                </Switch>
                            </MainLayout>
                        </Route>
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}