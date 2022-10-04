import React from "react";

const Nav_bar = ()=> {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light">Start Bootstrap</a>
                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg- flex-row p-1">
                        <li className="nav-item">
                            <a className="nav-link active text-light me-3" aria-current="page" href="#">Home</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link text-light me-3" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light me-3" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light me-3" href="#">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav_bar;