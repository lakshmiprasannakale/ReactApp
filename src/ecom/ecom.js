const Heading=()=>{
  const login=false;
    return(
        <ol>
           <li>HOME </li>
           <li>ABOUT US</li>
           <li>CONTACT US</li>
          {
            login ?(<li>logout</li>):(<li>login</li>)
          }
            
        </ol>
        
    )
}
export default Heading;