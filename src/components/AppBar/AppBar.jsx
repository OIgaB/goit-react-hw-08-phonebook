import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {       

    return (
        <header>
            <div>
                <a href="/" lang="en">Phonebook</a>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="./">Contacts</a></li>
                        <UserMenu/>
                        <li><a href="">Sign up</a></li>
                        <li><a href="">Log in</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}