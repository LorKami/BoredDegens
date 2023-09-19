import React, { useEffect, useState } from "react";
import '../Monitor/Monitor.css'

import Home from '../Home'
import Navbar from '../Navbar'

import Aos from "aos";
import "aos/dist/aos.css";

import MonitorVid from '../../images/BolicBohemian.mp4'

import bored1 from '../../images/bored1.webp'
import bored2 from '../../images/bored2.webp'
import logo from '../../images/logo1.webp'

import { MdOutlineJoinInner } from 'react-icons/md'

const Monitor = () => {

  const [showHome, setShowHome] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  const handleClick = () => {
    setShowHome(true);
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume;
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const audioElement = new Audio('/music.mp3');
    audioElement.volume = volume;
    setAudio(audioElement);
  }, []);

  return (
    <div>

      <div className='MonitorSection' style={{ display: showHome ? 'none' : 'block' }}>


        <div className='MonitorVid'>



          <div className='MonitorImages'>

            <div className='Bored1' data-aos="fade-right" data-aos-delay="100"><img src={bored1} /></div>
            <div className='Logo' data-aos="zoom-in" data-aos-delay="1800">
              <div className="Logoimage"><img src={logo} /></div>
              <div className="LogoBtn">
                <a onClick={handleClick}><MdOutlineJoinInner style={{ verticalAlign: 'middle' }} size='1.3rem' /> Click to join</a>
              </div>
            </div>
            <div className='Bored2' data-aos="fade-left" data-aos-delay="900"><img src={bored2} /></div>

          </div>

          <video autoPlay loop muted playsInline>
            <source src={MonitorVid} type="video/mp4" />
            Your browser does not support the video element.
          </video>

        </div>


      </div>

      <div className="HomeSec" style={{ display: showHome ? 'block' : 'none' }}>
        <Navbar handleClick={handleClick} isPlaying={isPlaying} handleVolumeChange={handleVolumeChange} volume={volume} />
        <Home />
      </div>

    </div>
  )
}

export default Monitor