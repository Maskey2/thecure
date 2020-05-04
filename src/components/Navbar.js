import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './../index.css'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul className="topnav">
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li style={{ float: 'right' }}><Link to="/users">LOGIN</Link></li>
                </ul>
            </nav>
        </div>
    )
}
