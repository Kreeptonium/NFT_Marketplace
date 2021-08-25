import React from "react";
import SignInViewModel from "../ViewModel/SignInViewModel";
import { Formik, Form,Field } from "formik";
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button";
import { RadioButton } from 'primereact/radiobutton';

export default class SignInView extends SignInViewModel{

    public render(){
        return (
            <React.Fragment>
               <Formik 
                    initialValues={
                        {
                            UserName:'',
                            EmailId:''
                        }
                    }
                    validationSchema={
                       Yup.object({
                           UserName:Yup.string()
                                            .required("User name is requird")
                                            .min(2)
                                            .max(50),
                            EmailId:Yup.string()
                                            .required("Email id is required")
                                            .email()     
                       }) 
                    }
                    onSubmit={(values)=>{

                    }} 
               >
                   {
                       (formik)=>(
                            <form onSubmit={formik.handleSubmit}>
                                <div className="flex flex-col mt-3 px-24">
                                    <div className="p-fluid">
                                        <div className="p-field">
                                            <span className="p-float-label">
                                                <InputText id="txtUserName" name="UserName" value={formik.values.UserName!} onChange={formik.handleChange}></InputText>
                                                <label htmlFor="txtUserName">User Name</label>
                                            </span>
                                            {formik.errors.UserName ? (<h1>{formik.errors.UserName}</h1>) : null}
                                        </div>
                                    </div>
                                    <div className="p-fluid mt-3">
                                        <div className="p-field">
                                            <span className="p-float-label">
                                                <InputText id="txtEmailId" name="EmailId" value={formik.values.EmailId!} onChange={formik.handleChange}></InputText>
                                                <label htmlFor="txtEmailId">Email Id</label>
                                            </span>
                                            {formik.errors.EmailId ? (<h1>{formik.errors.EmailId}</h1>) : null}
                                        </div>
                                    </div>
                                    <div className="p-field-radiobutton">
                                         <RadioButton inputId="city1" name="city1" value="" />
                                        <label htmlFor="city1">I agree to Ethernity's Terms of Service</label>
                                    </div>
                                    <div className="p-field-radiobutton">
                                         <RadioButton inputId="city2" name="city2" value="" />
                                        <label htmlFor="city2">I opt in to receive offers from Ethernity Chain to my email address</label>
                                    </div>
                                    <div className="p-fluid float-md-end">
                                        <div className="p-field ">
                                            <Button label="Save" type="submit" className="p-button-rounded p-button-warning" />
                                        </div>
                                    </div>  
                                </div>
                            </form>
                       )
                   }
               </Formik>
               
            </React.Fragment>
        )
    }
}