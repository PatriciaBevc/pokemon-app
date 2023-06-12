import { NavLink } from "react-router-dom";
import '../styling/styles.scss';

const MainNavigation = ()=>{
    return(
        <header className="navbar">
            <nav>
                <ul className="navbar__list">
                    <li><NavLink to="/" className="navbar__item">Home</NavLink></li>
                    <li><NavLink to="/my-favorites" className="navbar__item">My favorites</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;