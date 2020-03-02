import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <div className="header-title">
                        <li>
                            <Link to="/">Wrapped Wonders</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/login">Signup</Link>
                        </li>

                    </div>
                </ul>
            </nav>
        </header>
    );
}