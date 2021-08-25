import React from "react";
import SignInLinkViewModel from "../ViewModel/SignInLinkViewModel";
import SignInDialogView from "./Dialogs/SignInDialogView";


export default class SignInLinkView extends SignInLinkViewModel{

    public render(){
        
        return (
            <React.Fragment>
                <a className={this?.props?.CssClass} onClick={this.OnSignInClickEventHandler}>Sign In</a>

                <SignInDialogView ref={this.signInDialogViewComponentRef}></SignInDialogView>
            </React.Fragment>
        )
    }
}

