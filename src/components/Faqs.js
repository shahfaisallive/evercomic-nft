import React from 'react'
import { Accordion } from 'react-bootstrap'
import './Faqs.css'

const Faqs = () => {
    return (
        <div className='faqs-wrapper container-fluid' id='faqs'>
            <div className='container justify-content-center'>
                <p className='subheading text-center mb-5'>Frequently Asked Questions</p>

                <div className='row'>
                    <div className='col-md-6'>
                    <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What are the NFT holders benefits?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                             Ever Comic NFT holders benefits from several perks include: 
                               <ul>
                               <li>Membership to Ever Comic DAO</li>
                               <li>Phisical coins  </li>
                               <li>Physical painting (for qualified holders)</li>
                               <li>Augmented reality app (for qualified holders)</li>
                               <li>Giveaways and airdrops </li>
                               <li>And much more.  </li>
                               </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is a NFT?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                NFT tokens or “non-fungible tokens” provide unique qualities that set them apart from regular cryptocurrencies. 
Each individual token can be used to authenticate ownership of digital assets such as artworks, recordings and even pets!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        
                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is DAO?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                DAO is an organization that represents rules encoded as a transparent computer program, 
controlled by the members and not influenced by any central government. 
As there's no need for managers with this method of control it removes both bureaucracy or hierarchy hurdles from doing business in your country!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is the drop calendar?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                The calendar of drops will be communicated in our social media channels. 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What's the price?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                Both the public and pre-sale prices will be announced in our social media channels. 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className='col-md-6'>
                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What about copyright issues?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                The characters used selected are part of the public domain, however the work that we are doing will be pratected by US copyright laws. 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>Which blockchain will host the NFT limited collections.
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                The NFT will be hosted within the Ethereum blockchain.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>Who are the superheroes represented by the NFTs?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                The super heroes will be revealed in our social media channels to make sure to be in the know. 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>Which projects are most likely to be presented for
                                    votes by the DAO?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                Though the DAO will decide which project to move forward with, the following will be brought up to vote:
                                <ul>
                                <li>Comic series (heroes to pick)</li>
                                <li>Metaverse investment </li>
                                <li>Game developement </li>
</ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What are the project contract addresses?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                EverComic OpenSea address is: 0x4318b0e762a0e8ea59ae2ee26c500a5054e79f62 .
The heroes collection addresses will be revealed as they are released to the blockchain. 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What are the project social media addresses?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                Check all addresses from our link tree: <span className='clickmove' onClick={()=>window.location.href="https://withkoji.com/@EverComic"}>https://withkoji.com/@EverComic</span> 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faqs
