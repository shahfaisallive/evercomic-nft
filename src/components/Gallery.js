import React from 'react'
import './Gallery.css'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'

const Gallery = () => {
    return (
        <div >
            <div className='gallery-wrapper container-fluid justify-content-center pt-5 pb-3'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='subheading'>Keeping It All Fair</p>
                            <p className='gallery-text1'>Our Genesis drops will have one drop for each superhero, for a total of 10 drops. All drops will be the same price, keeping the playing field leveled no matter who you are. The prices will be affordable and the odds fair. </p>
                            <p className='gallery-text1'>However, there will be a pre-sale for the project’s earlier backers (first followers on social media, Discord, etc. - No venture firms) - the best way to thank those backers.</p>
                        </div>
                        <div className='col-md-6 justify-content-center d-flex pt-5'>
                            {/* <img src={'/images/leftbrkt.png'} alt='left bracket img' className='left-bracket' /> */}
                            <p className='gallery-text1 mt-3 text-center mr-4 ml-4'>No matter who you are, all drops will be the same price, keeping the playing field level. The prices will be affordable and the odds, fair. </p>
                            {/* <img src={'/images/rightbrkt.png'} alt='left bracket img' className='right-bracket' /> */}
                        </div>
                    </div>

                    <div className='row justify-content-center mt-5 pt-5 ' id='gallery'>
                        <p className='subheading text-center'>The Superhero Gallery</p>
                        <p className='gallery-text1 text-center gallery-title-text'>The superheroes will be revealed gradually, which makes the project more interesting. <br /> Here are your ten Golden Age Heroes</p>
                    </div>

                    <div className='container'>
                        <div className='row d-flex'>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>To be Revealed (TBR)</p>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex'>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={'/images/card.png'} alt="nft img" className='nft-image' />
                                        </div>
                                        <div className="flip-card-back">
                                            <p className='gallery-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                    <p className='gallery-text2 text-center mt-5'>TBR</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center mt-5 pt-5'>
                        <a href='https://opensea.io/EverComic' target={'_blank'} rel="noreferrer">
                            <button className='button1'>
                                <OpenseaIcon className='btn-icon' />
                                View on Opensea
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery
