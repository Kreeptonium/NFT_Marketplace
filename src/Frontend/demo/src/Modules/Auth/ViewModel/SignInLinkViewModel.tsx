import React,{Component} from "react";
import SignInDialogView from "../ViewComponent/Dialogs/SignInDialogView";

interface ISignInLinkViewModelProps{
    CssClass?:string
}


export default abstract class SignInLinkViewModel extends Component<ISignInLinkViewModelProps,{}>{

    protected signInDialogViewComponentRef:React.RefObject<SignInDialogView>;

    constructor(props:ISignInLinkViewModelProps){
        super(props);

        this.signInDialogViewComponentRef=React.createRef<SignInDialogView>(); // create dynamic Object
    }

    protected OnSignInClickEventHandler=():void=>{
       
        this.signInDialogViewComponentRef.current?.OnDisplayDialog();
    }

    
}