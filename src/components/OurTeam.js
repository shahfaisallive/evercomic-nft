import React, { useState } from "react";
import "./OurTeam.css";


const OurTeam = () => {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showMore4, setShowMore4] = useState(false);
    const [showMore5, setShowMore5] = useState(false);
    const [showMore6, setShowMore6] = useState(false);
    const text=["The Brain is an entrepreneur, investor, and security expert.He launched Ever Comic in 2021 with the goal of bringing back to the spotlight and on the blockchain golden-age comics. He invested in several blockchain projects and is the founder of Upchain Ventures, a firm specializing in launching blockchain and NFT projects. When he's not at hisdesk managing his crypto and NFT portfolios or reading comic books from the golden age to catch up on what he missed out on as a kid - The Brain likes to run and cycle!",`  Kreata is a marketing expert and NFT enthusiast. She loves
    comics, comic books, and anything related to reading. Kreata
    also has a sweet tooth, and her favorite food is cupcakes.
    When she's not working on her marketing skills or reading
    comics, she likes to spend time with her friends and family.`,`   A founding member of team Ever Comic, Spyker is a people
    person. He loves to engage with them and be around them as
    much as possible. Spyker has a deep interest in the NFT
    community; he conceptualized and currently runs Ever Comic’s
    Community Engagement initiatives. He is also a father,
    husband, movie fan (he loves movies) who enjoys good food
    and great company!`,` Square Head is a founding member of team Ever Comic. He's
    been in the software development community for over ten
    years and has made his transition to Web 3 technology.
    Square Head is passionate about NFTs and crypto
    collectibles, with an eye on what can be done with them in
    the future. His other interests include music- both playing
    it and talking about it! His favorite ice cream flavor is
    pistachio (he loves anything green).`,`Alma is a Project Management nerd who likes to play puzzles.
    She's an organized and competitive person and loves keeping
    Ever Comic on track. Alma is a mother, and enjoys baking and
    eating pie - her favorite pie is pecan pie.`,`  Elysee is the creative mind of team Ever Comic. She loves
    all things art, especially vintage comics and Parisian
    macarons! Elysee's favorite part about working with her team
    is coming up with new ways to share their comic strips. She
    was born in France and speaks fluent French, but she has
    lived in America for most of her life.`]
  return (
    <div className="team-wrapper container-fluid" id="ourteam">
      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <p className="subheading">Meet our Team</p>
          <p className="team-text3 text-center">
            At Ever Comic, we’ve created a team of passionate individuals
            dedicated to developing an ongoing NFT project that boosts the
            visibility of some of our favorite heroes. We grew up hearing about
            these caped crusaders, and their influence on our lives has been
            profound. Allow us to introduce ourselves so that you know exactly
            where we stand.
          </p>
        </div>

        <div className="row team-members-div">
          <div className="col-md-6">
            <div className="row single-member-div">
              <div className="col-4">
                <img
                  src={"/images/The Brain.png"}
                  alt="member img"
                  className="member-image"
                />
              </div>
              <div className="col-8">
                <p className="team-text1">The Brain</p>
                <p className="team-text2">Founder</p>

                  <p className="team-text3">
                  {showMore1 ? text[0] : `${text[0].substring(0,230)}`}
                  <span className="team-tex4 point" onClick={() => setShowMore1(!showMore1)}>{showMore1?` Show less`:` Show more`}</span>
                    
                  </p>
            
                <div className="row member-social-div d-flex justify-content-start pl-3 mt-4">
                  {/* <a href='/' target={'_blank'} rel="noreferrer">
                                        <img src={'/images/social-fb.png'} alt='social fb' className='social-btn-member' />
                                    </a> */}
                  <a
                    href="https://www.instagram.com/evercomic/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-ig.png"}
                      alt="social ig"
                      className="social-btn-member"
                    />
                  </a>
                  <a
                    href="https://twitter.com/EverComic_NFT"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-tw.png"}
                      alt="social tw"
                      className="social-btn-member"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="row single-member-div">
              <div className="col-4">
                <img
                  src={"/images/Kreata.png"}
                  alt="member img"
                  className="member-image"
                />
              </div>
              <div className="col-8">
                <p className="team-text1">Kreata</p>
                <p className="team-text2">Marketing Lead</p>
               
                  <p className="team-text3"> 
                  {showMore2 ? text[1] : `${text[1].substring(0,230)}`}
                  <span className="team-tex4 point" onClick={() => setShowMore2(!showMore2)}>{showMore2?` Show less`:` Show more`}</span>
                    
                 
                  </p>
               

                <div className="row member-social-div d-flex justify-content-start pl-3 mt-4">
                  {/* <a href='/' target={'_blank'} rel="noreferrer">
                                        <img src={'/images/social-fb.png'} alt='social fb' className='social-btn-member' />
                                    </a> */}
                  <a
                    href="https://www.instagram.com/evercomic/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-ig.png"}
                      alt="social ig"
                      className="social-btn-member"
                    />
                  </a>
                  <a
                    href="https://twitter.com/EverComic_NFT"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-tw.png"}
                      alt="social tw"
                      className="social-btn-member"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="row single-member-div">
              <div className="col-4">
                <img
                  src={"/images/Spyker.png"}
                  alt="member img"
                  className="member-image"
                />
              </div>
              <div className="col-8">
                <p className="team-text1">Spyker</p>
                <p className="team-text2">Community Engagement Lead</p>
               
                     
                    
                  <p className="team-text3">
                  {showMore3 ? text[2] : `${text[2].substring(0,230)}`}
                  <span className="team-tex4 point" onClick={() => setShowMore3(!showMore3)}>{showMore3?` Show less`:` Show more`}</span>
                  </p>
               
                <div className="row member-social-div d-flex justify-content-start pl-3 mt-4">
                  {/* <a href='/' target={'_blank'} rel="noreferrer">
                                        <img src={'/images/social-fb.png'} alt='social fb' className='social-btn-member' />
                                    </a> */}
                  <a
                    href="https://www.instagram.com/evercomic/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-ig.png"}
                      alt="social ig"
                      className="social-btn-member"
                    />
                  </a>
                  <a
                    href="https://twitter.com/EverComic_NFT"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-tw.png"}
                      alt="social tw"
                      className="social-btn-member"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row single-member-div">
              <div className="col-4">
                <img
                  src={"/images/Square Head.png"}
                  alt="member img"
                  className="member-image"
                />
              </div>
              <div className="col-8">
                <p className="team-text1">Squared Head</p>
                <p className="team-text2">Technical and Engineering Lead</p>
               
                    
                    
                  <p className="team-text3">
                  {showMore4 ? text[3] : `${text[3].substring(0,230)}`}
                  <span className=" point team-tex4" onClick={() => setShowMore4(!showMore4)}>{showMore4?` Show less`:` Show more`}</span>
                  </p>
               
                <div className="row member-social-div d-flex justify-content-start pl-3 mt-4">
                  {/* <a href='/' target={'_blank'} rel="noreferrer">
                                        <img src={'/images/social-fb.png'} alt='social fb' className='social-btn-member' />
                                    </a> */}
                  <a
                    href="https://www.instagram.com/evercomic/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-ig.png"}
                      alt="social ig"
                      className="social-btn-member"
                    />
                  </a>
                  <a
                    href="https://twitter.com/EverComic_NFT"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-tw.png"}
                      alt="social tw"
                      className="social-btn-member"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="row single-member-div">
              <div className="col-4">
                <img
                  src={"/images/Alma PM.png"}
                  alt="member img"
                  className="member-image"
                />
              </div>
              <div className="col-8">
                <p className="team-text1">Alma</p>
                <p className="team-text2">Project Manager</p>
               
                    
                    
                  <p className="team-text3">
                  {showMore5 ? text[4] : `${text[4].substring(0,230)}`}
                  <span className=" point team-tex4" onClick={() => setShowMore5(!showMore5)}>{showMore5?` Show less`:` Show more`}</span>
                  </p>
              
                <div className="row member-social-div d-flex justify-content-start pl-3 mt-4">
                  {/* <a href='/' target={'_blank'} rel="noreferrer">
                                        <img src={'/images/social-fb.png'} alt='social fb' className='social-btn-member' />
                                    </a> */}
                  <a
                    href="https://www.instagram.com/evercomic/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-ig.png"}
                      alt="social ig"
                      className="social-btn-member"
                    />
                  </a>
                  <a
                    href="https://twitter.com/EverComic_NFT"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-tw.png"}
                      alt="social tw"
                      className="social-btn-member"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="row single-member-div">
              <div className="col-4">
                <img
                  src={"/images/Elysee.png"}
                  alt="member img"
                  className="member-image"
                />
              </div>
              <div className="col-8">
                <p className="team-text1">Elysee</p>
                <p className="team-text2">Creative Lead</p>
           
                    
                  <p className="team-text3">
                  
                  {showMore6 ? text[5] : `${text[5].substring(0,230)}`}
                  <span className="point team-tex4" onClick={() => setShowMore6(!showMore6)}>{showMore6?` Show less`:` Show more`}</span>
                  </p>
            

                <div className="row member-social-div d-flex justify-content-start pl-3 mt-4">
                  {/* <a href='/' target={'_blank'} rel="noreferrer">
                                        <img src={'/images/social-fb.png'} alt='social fb' className='social-btn-member' />
                                    </a> */}
                  <a
                    href="https://www.instagram.com/evercomic/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-ig.png"}
                      alt="social ig"
                      className="social-btn-member"
                    />
                  </a>
                  <a
                    href="https://twitter.com/EverComic_NFT"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/social-tw.png"}
                      alt="social tw"
                      className="social-btn-member"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
