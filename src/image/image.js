import "../style/style.css";
 export const Image=(props)=>{
    const {title, tropfys,source,w=200,h=200}=props;
    return (
        <div class="ipl">
        <h4>{title}</h4>
        <img 
        src={source}
        width={w}
        height={h}
        ></img>
     <h3>{tropfys}</h3>
        </div>
    )

}
export default Image;