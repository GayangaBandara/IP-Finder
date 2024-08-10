import React from 'react';

function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <nav className="navbar">
            <h1>IP Finder</h1>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
        </nav>
    );
}

export default Navbar;
