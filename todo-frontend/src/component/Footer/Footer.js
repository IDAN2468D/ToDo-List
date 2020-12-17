import React, { useState, useContext } from 'react';
import { DataContext } from "../DataProvider/DataProvider";
import styled from "styled-components";


const Box = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

const Button = styled.button`
    background: crimson;
    padding: 10px 20px;
`;

const Label = styled.label`
    cursor: pointer;
`;

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false)
    const [todos, setTodos] = useContext(DataContext)

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }


    const deleteTodo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos)
        setCheckAll(false)
    }

    return (
        <Box className="row">
            <Label htmlFor="all">
                <input
                    type="checkbox"
                    name="all"
                    id="all"
                    onClick={handleCheckAll}
                    checked={checkAll} />
                     All
            </Label>
            <p>You have {todos.length} to do</p>
            <Button id="delete" onClick={deleteTodo}>Delete</Button>
        </Box>
    )
}


