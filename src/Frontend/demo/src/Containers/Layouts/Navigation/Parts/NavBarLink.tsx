import React from "react";
import { Link } from 'react-router-dom';
import AuthView from "../../../../Modules/Auth/ViewComponent/AuthView";
import SignInLinkView from "../../../../Modules/Auth/ViewComponent/SingInLinkView";

interface INavbarLinkProps{
    TextColor?:string;
    Hover_BackgroundColor?:string;
    Hover_TextColor?:string;
}

export const NavBarLink:React.FunctionComponent<INavbarLinkProps>=(props:INavbarLinkProps):JSX.Element=>{

    let cssClass=`${props.TextColor} ${props.Hover_TextColor} ${props.Hover_BackgroundColor} px-3 py-2 rounded-md text-sm font-medium uppercase`;
    let signIncssClass=`text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 px-3 py-2 rounded-md text-sm font-medium uppercase font-bold hover:bg-gray-700 cursor-pointer`;
    return (
        <React.Fragment>
            <Link className={cssClass} to="/home">Home</Link>
            <Link className={cssClass} to="/marketplace">Marketplace</Link>
            <a href="#" className={cssClass}>Get Tkn</a>
            <a href="#" className={cssClass}>Farm Gems</a>
            <a href="#" className={cssClass}>Staking</a>
            <a href="#" className={cssClass}>Contact Us</a>
            <SignInLinkView CssClass={signIncssClass}></SignInLinkView>
            <AuthView CssClass={signIncssClass}></AuthView>

            
            {/* <a href="#" className={signIncssClass}>Sign In</a> */}
            {/* <a href="#" className={signIncssClass}>Sign Up</a> */}
        </React.Fragment>
    )
}