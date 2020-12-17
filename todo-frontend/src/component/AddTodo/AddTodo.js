import React, { useContext, useState, useCallback } from 'react';
import { DataContext } from "../DataProvider/DataProvider";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    height: 40px;
    margin: 20px 0;
    display: flex;
`;

const Input = styled.input`
    flex: 3;
    border: none;
    outline: none;
    border-bottom: 1px solid #555;
    margin: 0 5px;
`;

const Button = styled.button`
    flex: 1;
    background: #555;
    color: white;
    letter-spacing: 2px;
    cursor: pointer;
`;

export default function Forminput() {

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState();



    const addTodo = useCallback((e) => {
        e.preventDefault()
        const newTodo = { name: todoName, complete: false };
        setTodos([...todos, newTodo])
        setTodoName("");
        fetch("http://localhost:3001/todos", { method: "POST", body: JSON.stringify(newTodo) });
    }, [todoName, setTodos, todos])

    return (
        <Form autoComplit="off" onSubmit={addTodo}>
            <Input style={Input.input} type="text" name="todo" id="todo"
                required
                placeholder="what needs to be done?"
                value={todoName}
                onChange={e => setTodoName(e.target.value.toLowerCase())}
            />
            <Button style={Button.button} type="submit">Create</Button>
        </Form>
    )
}
