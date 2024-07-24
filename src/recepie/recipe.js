import React,{Component} from "react";

import axios from "axios" 


class RecipeList extends  Component{
    state= {
        recipelist:[],
        loader:true,
        error:false,

    };
    fetchrepice=async()=>{
        try{
    const response=await axios.get('https://dummyjson.com/recipes')
    console.log (response, "response");
    }
catch(err){
this.setState({
    error:true,
});
}};
componentDidMount(){
    this.fetchrepice();
}

    
render(){
    return(
        <React.Fragment>
        <h1>hello</h1>
           
        </React.Fragment>
    );
}
}
export default RecipeList;
