const Heading1=()=>{
    return(
        <div>
            <center><h1>Indian premier League</h1></center>
        </div>)
};
export const Heading2=(props)=>{
    const {tropfys}=props
    return(
        <div><h1>no of tropfys{tropfys}</h1></div>)
    };
    export const Heading3=(props)=>{
        const {title}=props
        return(
            <div><h1>Title:{title}</h1></div>)
        };
        

  
    

export default Heading1;

