import React from "react";
import SignInDialogViewModel from "../../ViewModel/Dialogs/SignInDialogViewModel";
import { Dialog } from 'primereact/dialog';
import SignInView from "../SignInView";

export default class SignInDialogView extends SignInDialogViewModel{

    public render(){
        return (
            <React.Fragment>
                <Dialog 
                    header="Sign In"
                    onHide={()=> this.OnHideDialogEventHandler()} // false
                    visible={this?.state?.IsDisplayModal} // true
                    modal
                    className="w-80"
                >
                    <SignInView></SignInView>
                </Dialog>
            </React.Fragment>
        )
    }

}