import React from "react";

interface ILogoProps{
    Source?:string;
    Alt?:string
}

export const Logo:React.FunctionComponent<ILogoProps>=(props:ILogoProps):JSX.Element=>{
    return (
        <React.Fragment>
            <img
                className="h-8 w-8"
                src={props.Source!}
                alt={props.Alt!}
            ></img>
        </React.Fragment>
    )
}