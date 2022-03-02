import React from 'react'
import './Roadmap.css'

const Roadmap = () => {
    return (
        <div className='container-fluid justify-content-center d-flex roadmap-wrapper pt-3' id='roadmap'>
            <div className='container row mt-5'>
                <div className='col-md-5'>
                    <p className='subheading'>Roadmap for Success</p>
                    <p className='rm-text1'>Our roadmap series reveals several milestones and gives you the best chance to succeed in our new endeavor. We break it into two parts- the drop roadmap and the project roadmap. Let’s check out the features of each.</p>

                    <div className='drop-div'>
                        <p className='rm-text2'>Drop Roadmap</p>
                        <p className='rm-text4'>There will be 10 drops and each drop, representing a Superhero, will have the following milestones.</p>
                        <br/>
                        <p className='rm-text3'>25% of unique character NFT drop sold </p>
                        <p className='rm-text4'>Ever Comic physical Coins and certificates of authenticity will ship out </p>
                        <br/>

                        <p className='rm-text3'>At 50% NFT sold</p>
                        <p className='rm-text4'>We’ll airdrop free NFTs to qualified NFT holders</p>
                        <br/>

                        <p className='rm-text3'>At 75%</p>
                        <p className='rm-text4'>The augmented reality application is delivered</p>
                        <br/>

                        <p className='rm-text3'>At 100%</p>
                        <p className='rm-text4'>We’ll ship the physical metal painting</p>
                    </div>
                </div>

                <div className='col-md-7'>
                    <div className='row'>
                        <div className='col-sm-6 rm-div2'>
                            <div className='rm-sub-div'>
                                <p className='rm-text5'>Project Roadmap Q1 2022</p>
                                <p className='rm-text4 font-weight-bold'>Completed:</p>
                                <p className='rm-text4'>Project and business plans </p>
                                <p className='rm-text4'>Team hiring (PM, Tech, Art, Marketing, etc.) </p>
                                <p className='rm-text4'>Project kick-off </p>
                                <p className='rm-text4'>Website design</p>
                                <p className='rm-text4'>Medium site design</p>
                                <p className='rm-text4'>Youtube channel design and launch</p>
                                <p className='rm-text4'>Twitter page</p>
                                <p className='rm-text4'>Instagram page</p>
                                <p className='rm-text4'>Creative work kick-off</p>
                                <p className='rm-text4'>Marketing campaign kick-off</p>
                                <p className='rm-text4'>Developement workstream kick-off</p>
                            </div>
                            <div className='rm-sub-div'>
                                <p className='rm-text5'>Project Roadmap Q3 2022</p>
                                <p className='rm-text4 font-weight-bold'>Medium Term:</p>
                                <p className='rm-text4'>Genesis Drop Wave 2 (5 characters x 5,555 NFTs = 27,775)</p>
                                <p className='rm-text4'>DAO Subject Matter Experts (SMEs) hiring</p>
                                <p className='rm-text4'>DAO creation</p>
                                <p className='rm-text4'>DAO token issuance</p>
                                <p className='rm-text4'>Project update</p>
                            </div>
                        </div>
                        <div className='col-sm-6 rm-div-3'>
                        <div className='rm-sub-div'>
                                <p className='rm-text5'>Project Roadmap Q2 2022</p>
                                <p className='rm-text4 font-weight-bold'>Immediate Term:</p>
                                <p className='rm-text4'>Community engagement kick-off </p>
                                <p className='rm-text4'>First 5 character reveal</p>
                                <p className='rm-text4'>Drop calendar (1st wave) </p>
                                <p className='rm-text4'>Genesis Drop Wave 1 (5 characters x 5,555 NFTs = 27,775 NFTs) </p>
                                <p className='rm-text4'>1st perk releases</p>
                                <p className='rm-text4'>Project update</p>
                            </div>
                            <div className='rm-sub-div'>
                                <p className='rm-text5'>Project Roadmap Q4 2022</p>
                                <p className='rm-text4 font-weight-bold'>Long Term:</p>
                                <p className='rm-text4'>Community Vote on Ever Comic Projects (book, movie, etc.)</p>
                                <p className='rm-text4'>Additional Hiring</p>
                                <p className='rm-text4'>Comic production and realization</p>
                                <p className='rm-text4'>Production and Public Release</p>
                                <p className='rm-text4'>Revenue Distribution to the Community</p>
                                <p className='rm-text4'>Project update</p>
                                <p className='rm-text4'>Roadmap review and update</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
