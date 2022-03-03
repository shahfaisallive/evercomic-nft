import React from 'react'
import './Footer.css'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'
import { ReactComponent as DiscordIcon } from '../media/discord.svg'
import { ReactComponent as TwitterIcon } from '../media/twitter.svg'
import { ReactComponent as InstaIcon } from '../media/insta.svg'
import { ReactComponent as MediumIcon } from '../media/medium.svg'
import { ReactComponent as YoutubeIcon } from '../media/youtube.svg'
import { ReactComponent as Arrow } from '../media/arrow.svg'


const Footer = () => {
    const navHomeHandler = () => {
        const element = document.getElementById("home");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navAboutHandler = () => {
        const element = document.getElementById("about");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }

    const navPerksHandler = () => {
        const element = document.getElementById("perks");
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
        <div className='footer-wrapper container-fluid'>
            <div className='ml-5 mr-5 justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={'/images/logo.png'} alt='logo' width={'140px'} className='footer-logo' />
                       

                        <div className='row d-flex social-div-footer'>
                            <a href='https://twitter.com/EverComic_NFT' target={'_blank'}  rel="noreferrer"><TwitterIcon className='footer-icon-social' /></a>
                            <a href='https://www.instagram.com/evercomic/' target={'_blank'}  rel="noreferrer"><InstaIcon className='footer-icon-social' /></a>
                            <a href='https://evercomic.medium.com/' target={'_blank'}  rel="noreferrer"><MediumIcon className='footer-icon-social' /></a>
                            <a href='https://www.youtube.com/channel/UCoPEztKsE-3KkY6vjNjCwiw' target={'_blank'}  rel="noreferrer"><YoutubeIcon className='footer-icon-social' /></a>
                            <a href='https://discord.gg/hPztNP34C9' target={'_blank'}  rel="noreferrer"><DiscordIcon className='footer-icon-social' /></a>
                            <a href='https://opensea.io/EverComic' target={'_blank'}  rel="noreferrer"><OpenseaIcon className='footer-icon-social' /></a>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-sm-7'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='ft-text2'>Contact Info</p>
                                        <br />
                                        <p className='ft-text3'>Email:</p>
                                        <p className='ft-text4'>hello@evercomic.com</p>
                                        <p className='ft-text4' style={{ marginTop: '-15px' }}>redeem@evercomic.com</p>
                                    </div>
                                    <div className='col-6 quicklinks-div'>
                                        <p className='ft-text2'>Quick Links</p>
                                        <br />
                                        <p className='ft-text3 ft-link' onClick={navHomeHandler}>Home</p>
                                        <p className='ft-text3 ft-link' onClick={navAboutHandler}>About</p>
                                        <p className='ft-text3 ft-link' onClick={navPerksHandler}>NFT Holder Perks</p>
                                        <p className='ft-text3 ft-link' onClick={navRoadmapHandler}>Roadmap</p>
                                        <p className='ft-text3 ft-link' onClick={navTeamHandler}>Team</p>
                                        <p className='ft-text3 ft-link' onClick={navFaqHandler}>FAQs</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-5'>
                                <p className='ft-text2'>NewsLetter</p>
                                <br />
                                <p className='ft-text3'>Keep me up to date with content, updates and offers from Ever Comic.</p>
                                <a href='https://withkoji.com/@EverComic/d798' target={'_blank'}   rel="noreferrer">
                                    <button className='ft-btn text-center'>
                                        <Arrow className='ft-redirect'/>
                                      
                                   Read our NewsLetter
                                    </button>
                                </a>
                               

                                <a href='https://opensea.io/EverComic' target={'_blank'}   rel="noreferrer">
                                    <button className='ft-btn'>
                                        <OpenseaIcon className='ft-btn-icon' />
                                        View on Opensea
                                    </button>
                                </a>

                                <a href='https://discord.gg/hPztNP34C9' target={'_blank'} rel="noreferrer">
                                    <button className='ft-btn'>
                                        <DiscordIcon className='ft-btn-icon' />
                                        Join us on Discord
                                    </button>
                                </a>

                                <a href='https://twitter.com/EverComic_NFT' target={'_blank'} rel="noreferrer">
                                    <button className='ft-btn'>
                                        <TwitterIcon className='ft-btn-icon' />
                                        Follow us on Twitter
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ borderStyle: 'solid', borderWidth: '1px' }}></hr>
            <div className='container-fluid d-flex justify-content-center'>
                <p className='ft-text4 text-center'>Copyright © 2022 EverComic (an Upchain Ventures Project). All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
