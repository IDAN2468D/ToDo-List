import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([

    ])



    useEffect(async () => {
        const responce = await fetch("http://localhost:3001/todos");
        const todoStore = await responce.json()
        if (todoStore) setTodos(todoStore)
    }, [])



    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
