import TodoList from "./components/TodoList";
import Textfield from "./components/input";
import Button from "./components/button";
import { useCallback, useState, useMemo } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');
  const onTextInputChange = useCallback((e) =>{
    setTextInput(e.target.value)
  },[]);
// Thêm task mới
  const onAddBtnClick = useCallback((e) =>{
    if(textInput === ""){
      alert('Bạn cần nhập task');
    }else{
    setTodoList([...todoList, {id: uuidv4(), name: textInput, isCompleted: false}]);
    setTextInput("");
  }
  },[textInput, todoList]);
// end Thêm task mới
// Check task đã hoàn thành
  const onCheckBtnClick = useCallback((id,isCompleted) =>{
    const setID = () =>{
      if(isCompleted === "true"){
        setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: false}:todo))
      }else{
        setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: true}:todo))
      }
    }
    setID();
    

  },[])
// end Check task đã hoàn thành
// Xoá task
const onDeleteClick = useCallback((id) => {
  if (window.confirm("Are you sure Delete?")) {
    const updatedTodos = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodos);
  }
},[todoList]);
// end Xoá task
// Tính task
const TaskStatus = useMemo(() => {
  const taskLenght = todoList.length;
  const donetaskLength = todoList.filter((todo) => todo.isCompleted).length;
  return {
    taskLenght,
    donetaskLength,
    openLength: taskLenght - donetaskLength,
  };
}, [todoList]);
// end Tính task
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <form action="" method="post" onSubmit={e => e.preventDefault()}>
      <div>
      <Textfield
      ClassName = "txt_add"
      id = "input_add"
      placeholder = "Nhập task..."
      value = {textInput}
      onchange = {onTextInputChange}
       />
      <Button 
      ClassName = "btn_add"
      id = "add_list"
      onclick = {onAddBtnClick}
      />
      </div>
      
      <TodoList
      onDeleteClick = {onDeleteClick}
      onCheckBtnClick = {onCheckBtnClick}
      todoList = {todoList} />
      </form>
      <div>
        <Footer
        TaskStatus={TaskStatus}
         />
      </div>
    </div>
    
  );
}

export default App;
