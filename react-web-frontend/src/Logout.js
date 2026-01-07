import { useNavigate } from "react-router-dom";

export default function Logout({ acceptToken }) {
    const redirect = useNavigate();

    function handleFormSubmit(evt) {
        evt.preventDefault();
        acceptToken(undefined);
        redirect('/login');
    }

    return (
        <form className="horizontal" onSubmit={handleFormSubmit}>
            <input type="submit" className="warning" value="Выйти"/>    
        </form>
    );
}