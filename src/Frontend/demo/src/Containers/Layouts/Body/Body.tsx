import React, { Component } from "react";

interface IBodyProps{
    BackgroundColor?:string
}

export default class Body extends Component<IBodyProps,{}>{

    constructor(props:IBodyProps){
        super(props);
    }

    public render(){

        let cssClass=`container mx-auto ${this?.props?.BackgroundColor}`;

        return (
            <React.Fragment>
                <div className={cssClass}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }

}