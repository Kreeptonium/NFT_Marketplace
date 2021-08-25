import React, { Component, MouseEvent } from "react";
import AuthViewModel from "../ViewModel/AuthViewModel";
import {UseMoralisData, UseMoralisHookInjection} from "../../../Shared/HookInjections/UseMoralisHookInjection";

export default class AuthView extends AuthViewModel{

    public render(){
        return (
            <React.Fragment>
                <UseMoralisHookInjection>
                    {
                        (useMoralisData)=> useMoralisData && (
                            <React.Fragment>
                                {
                                    this.OnRenderMetaMaskConnectionAndDisconnection(useMoralisData,
                                        ()=>(<a className={this?.props?.CssClass} onClick={()=> useMoralisData.authenticate()}>Connect</a>),
                                        ()=>(<a className={this?.props?.CssClass} onClick={()=> useMoralisData.logout()}>DisConnect</a>)
                                    )
                                }
                            </React.Fragment>
                        )
                    }   
                </UseMoralisHookInjection>
            </React.Fragment>
        )
    }

}