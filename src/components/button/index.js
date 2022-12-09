import React from "react";
const Button = (Props) =>{
    return(
        <button type="submit" className={Props.ClassName} id={Props.id} onClick = {Props.onclick}>Add</button>
    )
}
export default Button