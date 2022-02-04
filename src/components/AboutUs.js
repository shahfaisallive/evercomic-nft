import React from 'react'
import './AboutUs.css'


const Aboutus = () => {
    return (
        <div className='aboutus-wrapper container-fluid justify-content-center d-flex' id='about'>
            <div className='row container d-flex pb-1'>
                <div className='col-md-6 aboutus-left'>
                    <p className='subheading'>About Us</p>
                    {/* <p className='about-us-text'>At Ever Comic, we have a project in the works to bring 10-Golden Age Comic heroes back into the spotlight using the power and innovation of blockchain. We are kicking this off NFT (Non-fungible tokens), with plans for an aggressive expansion to include NFT comics, NFT movies, and games. If you are an NFT holder, the benefits will be epic.</p> */}
                    <p className='about-us-text'>Ever Comic is bringing comics to NFTs!</p>
                    <p className='about-us-text'>At Ever Comic, we’re developing a project to bring ten (10) Golden Age Comic heroes back into the spotlight using the power and innovation of blockchain. We are kicking this off with NFTs (Non-fungible tokens) and planning an aggressive expansion to include NFT comics, movies, and games. If you are passionate about NFTs or comics, this is a project for you. </p>
                    <p className='about-us-text'>The introductory NFTs for this project are artistic digital representations of ten (10) Golden Age comic book heroes. All of them are hand-drawn to keep them authentic as we bring them to the blockchain. </p>
                </div>
                <div className='col-md-6 justify-content-end'>
                    <img src={'/images/cards.png'} width='100%' alt="card" className='aboutus-img'/>
                </div>
            </div>

            <img className='box-style' src={'/images/boxes.png'} alt='boxes' />
        </div>
    )
}

export default Aboutus
