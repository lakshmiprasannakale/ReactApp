import { Button} from "bootstrap";
import { Component } from "react";
class Subscribe extends Component{
    render(){
    return(
        <>
            <Button>{this.props.title}</Button>
        </>
    )
    }
    
}
export default Subscribe