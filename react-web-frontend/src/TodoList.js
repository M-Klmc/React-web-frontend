import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { baseURL } from "./utility.js";
import { TokenContext, RefreshListContext } from "./contexts.js";

import TodoItem from './TodoItem.js';
import TodoSearch from './TodoSearch.js';
import TodoSort from './TodoSort';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('0');
    const [refresh, setRefresh] = useState(false);
    const token = useContext(TokenContext);

    function RefreshList() {
        setRefresh(!refresh);
    }

    function acceptSearch(searchWord) {
        setSearch(searchWord);
    }

    function acceptSort(sortOrder) {
        setSort(sortOrder)
    }

    useEffect(() => {
        if(!token) return;
        (async() => {
            const params = new URLSearchParams();
            if (search)
                params.append('search', search);
                params.append('doneAtLast', sort);
            const response = await fetch(`${baseURL}?${params}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.ok)
                setTodos((await response.json()).todos);
            else
                window.alert(response.status + ':' + response.statusText);
        })();
    }, [token, search, sort, refresh]);
    return (
        <>  {!token && < Navigate to="/login" />}
            {token &&
            <>
                <TodoSearch search={search} acceptSearch={acceptSearch} />
                <TodoSort sort={sort} acceptSort={acceptSort}/>
                <h1 className="heading">Запланированные дела</h1>
                <RefreshListContext.Provider value={RefreshList}>
                {todos.map((item) => (
                    <TodoItem key={item._id} item={item}/>
                ))}
                </RefreshListContext.Provider>
            </>
            }        

        </>
    );
}