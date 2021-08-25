import React, { Component, MouseEvent } from "react";
import { UseMoralisData } from "../../../Shared/HookInjections/UseMoralisHookInjection";

interface IAuthViewModelProps{
    CssClass?:string;
}

export default abstract class AuthViewModel extends Component<IAuthViewModelProps,{}>{

    constructor(props:IAuthViewModelProps){
        super(props);
    }

    protected OnRenderMetaMaskConnectionAndDisconnection=(useMoralisData:UseMoralisData,connection:()=>JSX.Element, disconnection:()=>JSX.Element):JSX.Element=>{
        if(!useMoralisData.isAuthenticated){
            console.log("Connection");
            return connection();
        }
        else
        {
            console.log("Disconnect")
            return disconnection();
        }
    }

}