import React from "react";
const Textfield = (Props) =>{
    return (
        <input
            className={Props.ClassName} 
            id={Props.id} 
            placeholder={Props.placeholder}
            value = {Props.value}
            onChange = {Props.onchange}>
        </input>
    )
}
export default Textfield