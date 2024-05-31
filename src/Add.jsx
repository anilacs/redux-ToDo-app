// Add.js
import React, { useState } from "react";
import {ListGroup } from "react-bootstrap";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/userSlice";

function Add() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [value, setValue] = useState(""); 

  const handleAdd = (e) => {
    e.preventDefault();
    const newValue = value;
    console.log(newValue);
    dispatch(addTodo({ id: Date.now(), text: newValue }));
    setValue(""); 
  };

  return (
    <div>
      <div className="container">
        <h1 className=" fw-bolder font-monospace ">Todo List</h1>
        <hr />
        <div>
          <form className="d-flex align-items-center" onSubmit={handleAdd}>
            <input
              name="todoInput"
              className="my-5"
              placeholder="My Todo"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="btn btn-primary m-1">
              Submit
            </button>
          </form>
        </div>
        <ListGroup>
          {todos.map((todo) => (
            <List key={todo.id} todo={todo} />
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Add;