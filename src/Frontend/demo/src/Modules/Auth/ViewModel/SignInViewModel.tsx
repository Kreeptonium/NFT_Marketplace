import React, { Component } from "react";

interface ISignInViewModelProps{

}

interface ISignInViewModelState{

}


export default abstract class SignInViewModel extends Component<ISignInViewModelProps,ISignInViewModelState>{

    constructor(props:ISignInViewModelProps){
        super(props);
    }

}