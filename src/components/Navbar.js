import React from 'react'
import { NavLink } from 'react-bootstrap'
import './Navbar.css'

const Navbar = () => {
    const navHomeHandler = () => {
        const element = document.getElementById("home");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navAboutHandler = () => {
        const element = document.getElementById("about");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navSpecsHandler = () => {
        const element = document.getElementById("specs");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navPerksHandler = () => {
        const element = document.getElementById("perks");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navGalleryHandler = () => {
        const element = document.getElementById("gallery");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navRoadmapHandler = () => {
        const element = document.getElementById("roadmap");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navTeamHandler = () => {
        const element = document.getElementById("ourteam");
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    const navFaqHandler = () => {
        const element = document.getElementById("faqs");
        element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className='container-fluid ml-5 mr-5'>
                <NavLink className="navbar-brand" id="brand-title" to="/"><img alt="logo" src={"/images/logo.png"} className='logo-img'></img></NavLink>
                <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav mt-3">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#"><p className='text_one ' onClick={navHomeHandler}>Home</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one' onClick={navAboutHandler}>About</p></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#"><p className='text_one ' onClick={navSpecsHandler}>NFT Specifications</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one' onClick={navPerksHandler}>NFT Holder Perks</p></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#"><p className='text_one ' onClick={navGalleryHandler}>Gallery</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one' onClick={navRoadmapHandler}>Roadmap</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one' onClick={navTeamHandler}>Team</p></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#"><p className='text_one ' onClick={navFaqHandler}>FAQs</p></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
