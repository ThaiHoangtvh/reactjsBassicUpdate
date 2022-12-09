
import React from "react";
import Todo from "./Todo";

const TodoList = ({todoList, onCheckBtnClick, onDeleteClick}) =>{
    return(
        <div>
            {
                todoList.map(todo => 
                <Todo 
                onDeleteClick = {onDeleteClick}
                onCheckBtnClick = {onCheckBtnClick}
                key = {todo.id}
                todo = {todo}
                className = {todo.isCompleted}
                />)
                
            }
        </div>
    )
}
export default TodoList