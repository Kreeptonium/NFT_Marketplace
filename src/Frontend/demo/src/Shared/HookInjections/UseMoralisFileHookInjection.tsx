import React from "react";
import { MoralisFileSaveOptions, useMoralis, useMoralisFile, ValidFileInput } from "react-moralis";
import { AuthenticateOptions } from "react-moralis/lib/hooks/useMoralis/_useMoralisAuth";

export type UseMoralisFileData={
   error: Error | null;
   isUploading:boolean;
   moralisFile:any;
   saveFile:(name: string, file: ValidFileInput, moralisFileSaveOption? : MoralisFileSaveOptions | undefined) => Promise<any>
}

interface IUseMoralisFileHookInjectionProps{
    children:(useMoralisData:UseMoralisFileData)=>JSX.Element;
}

export const UseMoralisFileHookInjection:React.FunctionComponent<IUseMoralisFileHookInjectionProps>=(props):JSX.Element=>{

    //const moralisdata:UseMoralisData = useMoralis();
    const moralisFileData:UseMoralisFileData = useMoralisFile();
    //console.log(moralisFileData);
    
    return props.children(moralisFileData);
}