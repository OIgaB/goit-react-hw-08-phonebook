export const UserMenu = () => {       

    return (
        <div>
            <p>mango@mail.com</p>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>Logout</button>
        </div> 
    );
}