import React, { useEffect } from "react";
import './Home.css'

import Aos from "aos";
import "aos/dist/aos.css";

import { FaXTwitter } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'

import bored1 from '../../images/bored1.webp'

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>

            <div className='HomeSection border' data-aos="zoom-in" data-aos-delay="500">

                <div className='HomeBoxes'>

                    <div className='HomeImageLeft'>
                        <img src={bored1} />
                    </div>

                    <div className='HomeInfoRight'>
                        <div className='HomeInfoRightText'>
                            <h2>Join the BoredDegends</h2>
                            <h3>Are you one of us?</h3>
                        </div>

                        <div className='HomeInfoRightBtn'>
                            <a className="BtnHomeInfo" href="#" target="_blank"><FaXTwitter style={{ verticalAlign: 'middle' }} size='1.3rem' /> Twitter</a>
                            <a className="BtnHomeInfo" href="#" target="_blank"><FaDiscord style={{ verticalAlign: 'middle' }} size='1.3rem' /> Discord</a>
                        </div>

                    </div>

                </div>

            </div>

            <div className="HomeMap">

                <div className="HomeMapTitle">
                    <h2>Principles</h2>
                    <h3>UNDERSTAND WHAT DRIVES THE TRIBE FORWARD</h3>
                </div>

                <div className="HomeMapBox">

                    <div className="HomeMapBoxInfo box1">
                        <h2>I</h2>
                        <h2>Community</h2>
                        <p>It may not be a cult, but we did set out to build the most tight-knit, empowered community on Solana. Everything we do — from our branding choices to our utilities to the way we reveal details about the project — has been carefully engineered to build hype, drive engagement, and create opportunities for the Tribe to connect deeply. We believe in strength in numbers. Apes ascend as one.</p>
                    </div>

                    <div className="HomeMapBoxInfo box2">
                        <h2>II</h2>
                        <h2>Identity</h2>
                        <p>An important part of building a powerful cult…ure is knowing what we are and what we aren’t. Trippin’ Ape Tribe is a community built by and for free-thinking degens. By embracing our true nature, we welcome in genuine creative inspiration and new strategic partnerships with like-minded brands and collaborators that can all spread the mission further.</p>
                    </div>

                    <div className="HomeMapBoxInfo box3">
                        <h2>III</h2>
                        <h2>Innovation</h2>
                        <p>Thanks to Chorles and his infinite wisdom, our consciousness continues to expand, illuminating possibilities where once we only saw limits. We will continue to bring big-brain thinking and next-level utilities to the project to keep our Tribe guessing and the Solana ecosystem moving forward. Trust the process.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home