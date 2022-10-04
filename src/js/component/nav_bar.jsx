import React from "react";

const Nav_bar = ()=> {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light">Start Bootstrap</a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarColor01" style={{flexGrow:"0"}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg p-1">
                        <li className="nav-item">
                            <a className="nav-link text-light me-3" aria-current="page" href="#" style={{padding: "0.5rem 1rem"}}>Home</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link text-light me-3" href="#" style={{padding: "0.5rem 1rem"}}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light me-3" href="#" style={{padding: "0.5rem 1rem"}}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light me-3" href="#" style={{padding: "0.5rem 1rem"}}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav_bar;