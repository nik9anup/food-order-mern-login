import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

const Buttons = () =>
{
    return (
        <div className="bt-container">
            <Link to="/profile" className="button">Login</Link>

        </div>
    )
}

export default Buttons;