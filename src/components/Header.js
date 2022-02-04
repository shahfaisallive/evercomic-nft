import React from 'react'
import './Header.css'
import Banner from '../media/banner.jpg'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'
import { ReactComponent as DiscordIcon } from '../media/discord.svg'
import { ReactComponent as TwitterIcon } from '../media/twitter.svg'


const Header = () => {
    return (
        <div className='container-fluid header-wrapper' id='home' style={{ backgroundImage: `url(${Banner})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
            <div className='row justify-content-center'>
                <p className='text2'>The Golden Age of Comic Heroes</p>
            </div>
            <div className='row justify-content-center'>
                <h1 className='title-text'>Ever Comic</h1>
            </div>
            <div className='row justify-content-center'>
                <p className='basic-text text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>

            <div className='row justify-content-center mt-5'>
                <a href='https://opensea.io/EverComic' target={'_blank'} rel="noreferrer">
                    <button className='button1'>
                        <OpenseaIcon className='btn-icon' />
                        View on Opensea
                    </button>
                </a>
            </div>

            <div className='row d-flex justify-content-center mt-5'>
                <img src={'images/triangle.png'} width={320} alt='bg figure' className='bgfig' />
                <a href='https://discord.gg/hPztNP34C9' target={'_blank'} rel="noreferrer">
                    <button className='button1 mb-3' id='discordbtn'>
                        <DiscordIcon className='btn-icon' />
                        Join us on Discord
                    </button>
                </a>

                <a href='https://twitter.com/EverComic_NFT' target={'_blank'} rel="noreferrer">
                    <button className='button1 mb-3'>
                        <TwitterIcon className='btn-icon' />
                        Follow us on Twitter
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Header
