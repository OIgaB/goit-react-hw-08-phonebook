import { useDispatch } from "react-redux";

export const UserMenu = () => {       
    const dispatch = useDispatch();
    return (
        <div>
            <p>mango@mail.com</p>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>Logout</button>
        </div> 
    );
}