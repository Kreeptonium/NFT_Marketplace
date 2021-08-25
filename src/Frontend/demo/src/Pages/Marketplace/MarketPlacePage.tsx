import React, { Component } from "react";
import history from "../../Routers/Common/History";

export default class MarketPlacePage extends Component{

    public render(){
        return (
            <React.Fragment>
                <h1>Marketplace</h1>

                <button onClick={()=> history.push("/home") }>Home Redirect</button>
            </React.Fragment>
        )
    }
}