import { Component } from "react";

interface ISignInDialogViewModelProps{

}

interface ISignInDialogViewModelState{
    IsDisplayModal?:boolean;
}

export default abstract class SignInDialogViewModel extends Component<ISignInDialogViewModelProps,ISignInDialogViewModelState>{

    constructor(props:ISignInDialogViewModelProps){
        super(props);

        // Default State maintain
        this.state={
            IsDisplayModal:false
        };
    }

    protected OnHideDialogEventHandler=()=>{
        this.setState({
            IsDisplayModal:false
        });
    }

    public OnDisplayDialog=()=>{
        console.log("On Display Dialog");
        this.setState({
            IsDisplayModal:true
        });
    }
}