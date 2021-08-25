import React from "react";
import { useMoralis } from "react-moralis";
import { AuthenticateOptions } from "react-moralis/lib/hooks/useMoralis/_useMoralisAuth";

export type UseMoralisData={
    authenticate:(options?: AuthenticateOptions | undefined) => Promise<void>;
    isAuthenticated:boolean;
    user:any;
    logout : () => Promise<void>;
}

interface IUseMoralisHookInjectionProps{
    children:(useMoralisData:UseMoralisData)=>JSX.Element;
}

export const UseMoralisHookInjection:React.FunctionComponent<IUseMoralisHookInjectionProps>=(props):JSX.Element=>{

    const moralisdata:UseMoralisData = useMoralis();
    
    return props.children(moralisdata);
}