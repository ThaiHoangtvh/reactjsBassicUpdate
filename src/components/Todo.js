import React from "react";
const Todo = ({todo,onCheckBtnClick,className,onDeleteClick})=> {
    return(
        <div className="box-item-check" id = {className.toString()}>
            <div className="check-title">
            <input onClick={() =>onCheckBtnClick(todo.id,className.toString())} className="check-icon" type="checkbox"></input>
            <span className="item-task">{todo.name}</span>
            </div>
            <button className="bnt-del" type="button" onClick={() =>onDeleteClick(todo.id)}>Xoá</button>
        </div>
    )
}
export default Todo