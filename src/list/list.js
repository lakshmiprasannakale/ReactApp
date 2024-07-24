const ListItems=({list})=>{
    // const fruits=["apple","banana","watermelon","orange"];
    return(
    <ul>
    
        {list.map((eachFruit)=>(
            <li>{eachFruit}</li>))}
        
    <h1> hello</h1>
    
    </ul>
  
    
   
    





        );
};
export default ListItems;