import { useEffect, useState } from "react";
import { baseURL } from "./utility.js";

import TodoItem from './TodoItem.js' 

export default function TodoList({ token }) {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        (async() => {
            const response = await fetch(baseURL, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.ok)
                setTodos((await response.json()).todos);
            else
                window.alert(response.status + ':' + response.statusText);
        })();
    }, [token]);
    return (
        <>
            <h1 className="heading">Запланированные дела</h1>
            {todos.map((item) => (
                <TodoItem key={item._id} item={item}/>
            ))}
        </>
    );
}