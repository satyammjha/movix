import React from 'react'
import Logo from '../Logo/Logo'
import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <>
            <div className="navContainer">

                <Logo />

                <div className="navRight">
                    <IoMdSearch color='white' size="29" />
                    <GiHamburgerMenu color='white' size="29" />

                </div>
            </div>

        </>
    )
}

export default Navbar
