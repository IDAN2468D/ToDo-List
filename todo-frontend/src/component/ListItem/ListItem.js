import React, { useState } from 'react';
import styled from "styled-components";



const Button = styled.button`
    border: none;
    outline: none;
    background: orange;
    padding: 5px 15px;
    cursor: pointer;
`;

export default function ListItem({ todo, id, checkComplete, handleEditTodos }) {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)

    const handleOnEdit = () => {
        setOnEdit(true)
    }

    const handleSave = id => {
        setOnEdit(false)
        if (editValue) {
            handleEditTodos(editValue, id)
        } else {
            setEditValue(todo.name)
        }
    }

    if (onEdit) {
        return (
            <div>
                <li>
                    <input type="text"
                        id="editValue"
                        value={editValue}
                        name={editValue}
                        onChange={e => setEditValue(e.target.value.toLowerCase())} />
                    <Button onClick={() => handleSave(id)}>Save</Button>
                </li>
            </div>
        )
    } else {
        return (
            <div>
                <li>
                    <label htmlFor={id}
                        className={todo.complete ? "active" : ""}>
                        <input type="checkbox"
                            id={id}
                            checked={todo.complete}
                            onChange={() => checkComplete(id)} />
                        {todo.name}
                    </label>
                    <Button disabled={todo.complete} onClick={handleOnEdit}>Edit</Button>
                </li>
            </div>
        )
    }
}
