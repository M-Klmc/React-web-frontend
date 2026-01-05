import { useContext } from "react";

import { baseURL } from "./utility";
import { TokenContext, RefreshListContext } from "./contexts.js";

export default function TodoSetDone({ itemID }) {
    const token = useContext(TokenContext);
    const refreshList = useContext(RefreshListContext);

    async function handleFormSubmit(evt) {
        evt.preventDefault();
        const response = await fetch(`${baseURL}/${itemID}/`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.trim()}`
            }
        });
        if (response.ok)
            refreshList();
        else
            window.alert(response.status + ': ' + response.statusText);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="submit" className="success" value="Сделано!"/>
        </form>
    )
}