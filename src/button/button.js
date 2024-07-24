const CustomButton=(prop)=>{
    // console.log(prop)
    // const {width,bgColor,text}=prop
    // return <button style={{backgroundColor:bgColor,height:"100px",}}>{text}{width}</button>;
   
        const {width,bgColor,text,image}=prop
    return(
   <div style={{width:width, backgroundColor:bgColor,}}>{text}</div>)
};
export default CustomButton