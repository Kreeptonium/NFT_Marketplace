import React,{Component} from "react";
import NavigationBar from "../Navigation/NavigationBar";
import Body from "../Body/Body";

export default class MainLayout extends Component{
    public render(){
        return (
            <React.Fragment>
                <header>
                    <NavigationBar></NavigationBar>
                </header>
                <section>
                    <Body BackgroundColor={"bg-black"}>
                        {this.props.children}
                    </Body>
                </section>
                <footer>
                    
                </footer>
            </React.Fragment>
        )
    }
}