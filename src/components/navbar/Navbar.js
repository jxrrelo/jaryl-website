import './Navbar.css';
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Component } from "react";

const Navbar = () => {
    return(
        <>
            <header className="nav-bar">
                <nav className="nav-container-actions-left">
                    <ul>
                        <li>
                        <Link to="/" onClick={() => window.location.reload()}>
                            J
                        </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-container-actions-right">
                    <ul>
                        <li>
                            <Link activeClass="active" smooth spy to="about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="experience">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <RouterLink to="/posts">
                                Posts
                            </RouterLink>
                        </li>
                        <li>
                        <Link activeClass="active" smooth spy to="contact">
                            Contact
                        </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
