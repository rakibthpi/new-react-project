import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    let { pathname } = useLocation();
    return (
        <div className='headerArea'>
            <div className='container'>
                <div className="headerText">
                    <div className='logo'>
                        <Link to='/'>Logo</Link>
                    </div>
                    <nav className='menu'>
                        <ul>
                            <li>
                                <Link className={pathname === "/home" ? "activebtn" : "navLink"} to='/home'>Home</Link>
                                <Link className={pathname === "/orderreview" ? "activebtn" : "navLink"} to='/orderreview'>OrderReview</Link>
                                <Link className={pathname === "/cart" ? "activebtn" : "navLink"} to='/cart'>Cart</Link>
                                <Link className={pathname === "/grandfather" ? "activebtn" : "navLink"} to="/grandfather">GrandFather</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;