import React from 'react'
import './Specs.css'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'
import { ReactComponent as DiscordIcon } from '../media/discord.svg'
import { ReactComponent as TwitterIcon } from '../media/twitter.svg'

const Specs = () => {
    return (
        <div className='specs-wrapper container-fluid' id='specs'>
            <div className=' justify-content-center d-flex'>
                <div className='row container d-flex pb-4'>
                    <div className='col-md-6 specs-left'>
                        <p className='subheading'>NFT Specifications</p>
                        <p className='specs-text'>Each of the ten (10) Golden Age comic heroes will release 5,555 NFTs available for acquisition, for a total of 55,550 covering all ten (10) of the comic heroes. These 55,555 NFTs will be limited editions representing all the superheroes and will be part of this project Genesis collection - that’s 5,555 NFTs for each one of the ten (10)  Golden Age comics.</p>
                        <p className='specs-text'>That’s where it gets really interesting.</p>
                        <p className='specs-text'>As superheroes have unique traits, so do each hero’s NFT. They are individual and codified to issue hundreds of traits randomly. The traits are specific to the hero’s skill tree and expressions, clothing, eye style and color, and much more. And there are rare NFTs to cover those super special traits.</p>
                        <p className='specs-text'>The NFTs will be released and stored on the Ethereum blockchain as ERC-721 tokens. </p>
                    </div>
                    <div className='col-md-6 justify-content-end pt-5'>
                        <img src={'/images/tricards.png'} width='100%' alt="card" className='aboutus-img mt-5' />
                    </div>
                </div>
            </div>

            <div className='container mt-5 mb-5' id='perks'>
                <div className='col justify-content-center'>
                    <p className='subheading text-center'>NFT Holder Perks</p>
                </div>

                <div className='row d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <div className='row single-perk'>
                            <div className='col-sm-2 justify-content-center'>
                                <img src={'/images/minilogo.png'} alt='minilogo' className='perk-imglogo' />
                            </div>
                            <div className='col-sm-10' >
                                <p className='perk-text1'>Certificate of Authenticity</p>
                                <p className='perk-text2'>As an NFT holder, regardless of the number of NFTs acquired, you qualify to receive a physical Certificate of Authenticity with a code referring to your NFT on the blockchain. </p>
                            </div>
                        </div>

                        <div className='row single-perk'>
                            <div className='col-sm-2 justify-content-center'>
                                <img src={'/images/minilogo.png'} alt='minilogo' className='perk-imglogo' />
                            </div>
                            <div className='col-sm-10' >
                                <p className='perk-text1'>Physical Metal Print</p>
                                <p className='perk-text2'>NFT holders with 10 NFTs qualify to receive a physical metal print of the heroes of their choice. These are highly sophisticated types of wall décor to show off your NFT in the real world.</p>
                              
                            </div>
                            
                        </div>

                        <div className='row single-perk'>
                            <div className='col-sm-2 justify-content-center'>
                                <img src={'/images/minilogo.png'} alt='minilogo' className='perk-imglogo' />
                            </div>
                            <div className='col-sm-10' >
                                <p className='perk-text1'>Membership to EC Decentralized Autonomous (DAO)</p>
                                <p className='perk-text2'>All NFT holders will receive DAO tokens </p>
                                <p className='perk-text2'>Tokens will be distributed proportionally to the number of NFTs acquired </p>
                                <p className='perk-text2'>Membership to the DAO grants project governance rights includes the opportunity to contribute comic book or movies narratives naming rights for certain characters in comic books, among other perks</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row single-perk'>
                            <div className='col-sm-2 justify-content-center'>
                                <img src={'/images/minilogo.png'} alt='minilogo' className='perk-imglogo' />
                            </div>
                            <div className='col-sm-10' >
                                <p className='perk-text1'>Physical Coin</p>
                                <p className='perk-text2'>As an NFT holder, regardless of the number of NFTs acquired, you qualify to receive a physical coin.
                                <br/>
                            <br/>
                            <br/>
                        

                                </p>
                             
                 
                            </div>
                           
                        </div>

                        <div className='row single-perk'>
                            <div className='col-sm-2 justify-content-center'>
                                <img src={'/images/minilogo.png'} alt='minilogo' className='perk-imglogo' />
                            </div>
                            <div className='col-sm-10' >
                                <p className='perk-text1'>Augmented Reality (AR) Application</p>
                                <p className='perk-text2'>NFT holders with at least 5 NFTs qualify to receive an augmented reality app that gives you the power to show off their NFTs to everyone in a cool and unusual way. </p>
                            </div>
                        </div>

                        <div className='row single-perk'>
                            <div className='col-sm-2 justify-content-center'>
                                <img src={'/images/minilogo.png'} alt='minilogo' className='perk-imglogo' />
                            </div>
                            <div className='col-sm-10' >
                                <p className='perk-text1'>Airdrops and Giveaways</p>
                                <p className='perk-text2'>All NFT holders qualify for multiple airdrops and giveaways organized during the project and at several milestones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container pt-2 pb-5'>
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
                        <button className='button1 mb-3'>
                            <DiscordIcon className='btn-icon' />
                            Join us on Discord
                        </button>
                    </a>

                    <a href='https://twitter.com/EverComic_NFT' target={'_blank'} rel="noreferrer">
                        <button className='button1 mb-3' id='spec-social-btn'>
                            <TwitterIcon className='btn-icon' />
                            Follow us on Twitter
                        </button>
                    </a>

                </div>
            </div>
        </div>

    )
}

export default Specs
