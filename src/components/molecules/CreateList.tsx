// Components
import Button from "../atoms/Button"
import Input from "../atoms/Input"
import Label from "../atoms/Label"
import React, { useEffect, useState } from 'react'
// Types
type Props = {}

export default function CreateList(props:Props){
  const [todo,setTodo]=useState("");
  const [TodoList,setTodoList]=useState([]);
  const [newTodo, setNewTodo]=useState("");

  function addTodo(){
    setTodoList(prevTodoList => [...prevTodoList,{id:Math.random()*1000,todo:newTodo, isEditable:false, isCompleted:false}])
    setNewTodo("");
}
const CompleteTodo = (id)=>{
  setTodoList(prevTodoList => prevTodoList.map(todoItem => todoItem.id === id ? {...todoItem, isCompleted:!todoItem.isCompleted }:todoItem))
}

const editTodo = (id, oldTodo)=>{
  setTodoList(prevTodoList=>prevTodoList.map(todoItem=>todoItem.id===id?{...todoItem,isEditable:!todoItem.isEditable}:todoItem))
  setTodo(oldTodo)
}

const saveTodo = (id) =>{
  setTodoList(prevTodoList=>prevTodoList.map(todoItem=>todoItem.id===id?{...todoItem,isEditable:!todoItem.isEditable, todo:todo}:todoItem))
}
const deleteTodo = (id) =>{
  setTodoList(prevTodoList=>prevTodoList.filter(todoItem=>todoItem.id!==id))
}
useEffect(()=>console.log(TodoList),[TodoList])
  return (
    <div className="text-center mt-10">
      
                <Label/>
                <div className="flex justify-center mt-10">
                <Input className="py-1 px-4 h-10 w-96"  type="text" handleChange={(event) => setNewTodo(event.target.value)} value={newTodo}/>
                <Button className="mx-5" handleClick={()=>addTodo()} text="Add Todo" />
                </div>
              
            
            <div>
              
              {
                TodoList.map(
                  (todoItem,index)=> 
                  
                  <div key={index} className=" mt-10 grid grid-cols-3 px-[15%]">
                    
                    
                    <Input className=" checked:bg-blue-500" value={todoItem.isCompleted} handleChange={()=>CompleteTodo(todoItem.id)} type="checkbox" />
                   

                  { !todoItem.isEditable ? 
                   <label> {todoItem.todo}</label>
                   :
                   <Input className="py-1 px-4 h-10 " type="text" handleChange={(event) => setTodo(event.target.value)} value={todo}/>
                  }
                   <div className="mx-5 flex ">
                    { !todoItem.isEditable ? 
                      <Button text="Edit" handleClick={()=>editTodo(todoItem.id, todoItem.todo)}/>
                      :
                      <Button text="Save" handleClick={()=>saveTodo(todoItem.id)}></Button>
                    }
                      <Button className="mx-5" text="Delete" handleClick={()=>deleteTodo(todoItem.id)}/>
                      
                   </div>
                   
                    </div>
                    
                )
              }
            </div>
    </div>
  )
}