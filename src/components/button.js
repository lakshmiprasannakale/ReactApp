import { Component } from "react";
import Subscribe from "./subscribe";

class Button extends Component{
    render(){
        return(
            <>
                <Button title="signup"/>
                <Button title="signin"/>
            </>
        )
    }
}

export default Button