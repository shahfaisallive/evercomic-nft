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
                                <p className='rm-text4'>Social media campaign kick-off (done) </p>
                                <p className='rm-text4'>Website design (in-progress) </p>
                                <p className='rm-text4'>Community engagement kick-off (in-progress) </p>
                                <p className='rm-text4'>Creative work kick-off (done) </p>
                                <p className='rm-text4'>NFT creation </p>
                                <p className='rm-text4'>Drop calendar set-up</p>
                                <p className='rm-text4'>Genesis Drops (Wave 1)</p>
                            </div>
                            <div className='rm-sub-div'>
                                <p className='rm-text5'>Project Roadmap Q3 2022</p>
                                <p className='rm-text4'>Community Vote on Ever Comic Projects (book, movie, etc.)</p>
                                <p className='rm-text4'>Hiring </p>
                                <p className='rm-text4'>Production and realization</p>
                            </div>
                        </div>
                        <div className='col-sm-6 rm-div-3'>
                        <div className='rm-sub-div'>
                                <p className='rm-text5'>Project Roadmap Q2 2022</p>
                                <p className='rm-text4'>Genesis Drops (Wave 2) </p>
                                <p className='rm-text4'>DAO Creation</p>
                                <p className='rm-text4'>DAO Token Issuance </p>
                            </div>
                            <div className='rm-sub-div'>
                                <p className='rm-text5'>Project Roadmap Q4 2022</p>
                                <p className='rm-text4'>Project Kick-off (done) </p>
                                <p className='rm-text4'>Project Plan (done)</p>
                                <p className='rm-text4'>Production Public Release </p>
                                <p className='rm-text4'>Revenue Distribution to the Community </p>
                                <p className='rm-text4'>The Year 2022 Summary</p>
                                <p className='rm-text4'>2023 Roadmap </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
