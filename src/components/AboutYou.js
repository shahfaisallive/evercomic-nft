import React from 'react'
import './AboutYou.css'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'


const AboutYou = () => {
    return (
        <div className='aboutyou-wrapper container-fluid justify-content-center d-flex pt-5 pb-5'>
            <div className='container row d-flex pt-5 pb-3'>
                <div className='col-md-7'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <img src={'/images/card.png'} alt='card' width='100%' className='mb-3' />
                        </div>
                        <div className='col-sm-6'>
                            <p className='subheading'>About You</p>
                            <p className='aboutyou-text1 mt-4'>Are you a collector? Are you looking to become a part of a project that promises to bring Golden Age comics to the now? </p>
                            <p className='aboutyou-text2'>Maybe you’re keeping an eye out for the next big trend in comics, hoping to strike before their value grows too high to be affordable?
                                Have you watched a comic book-based movie and thought about how you would have done it differently? Maybe the film bombed or was poorly conceived, and it bothered you as a fan. </p>

                            <a href='https://opensea.io/EverComic' target={'_blank'} rel="noreferrer">
                                <button className='button1 mt-4 mb-4'>
                                    <OpenseaIcon className='btn-icon' />
                                    View on Opensea
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='col-md-5 pr-5'>
                    <p className='aboutyou-text1 mt-2'>Or maybe you’re all of the above? </p>
                    <p className='aboutyou-text2 pb-3'>Then Ever Comic is the opportunity for you. <br/> With the right NFTs, you can influence the direction and production of your favorite comic movies or books within this NFT project. You can even offer insights that will change how people write comics within the collection; this comes with other types of perks. </p>

                    <p className='aboutyou-text1 mt-2'>Does that sound exciting to you?</p>
                    <p className='aboutyou-text2'>Then this is the project for you. Get your share of the NFT-pot, become part of a growing community, and make changes that will ensure comic success on pages and in films. Now is your chance to be a part of an exciting endeavor that comics have never seen before.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutYou
