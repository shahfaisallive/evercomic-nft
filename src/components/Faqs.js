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
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is an NFT?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                An NFT, or non-fungible token, is a digital asset representing a real-world item, which is comic-related in this instance.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What are the NFT Benefits?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                When you buy an NFT, you buy a part of a digital asset. It offers a new or recurring revenue stream for the artists and ensures the preservation of the artwork in question. You buy a digital certificate in the blockchain that states you own the NFT.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is DAO?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                Unlike traditional currency regulated by a bank or government, cryptocurrency is decentralized. That means it is controlled primarily by computers. The information skipping across servers is untraceable, and DAO means Decentralized Autonomous Organization. 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is a drop calendar?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                It is a calendar of upcoming drops only accessible by certain parties. 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is the price for NFTs?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className='col-md-6'>
                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What about copyright concerns?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>Which blockchain will back the NFTs?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>Who are the superheroes represented by the NFTs?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What are the project contract addresses?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What are the project social media addresses?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
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
