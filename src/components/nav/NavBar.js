import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/rookies">Rookies</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/rankings">Rankings</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                onClick = {
                    () => {
                        localStorage.removeItem("rookie_user")
                    }

                    }>
                    Logout
                </Link>
            </li>
        </ul>
        
    )
}
