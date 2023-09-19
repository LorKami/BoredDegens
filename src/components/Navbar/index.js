import React, { useEffect, useState } from 'react';
import './Navbar.css'

import { FaXTwitter } from 'react-icons/fa6'
import { MdSell } from 'react-icons/md'
import { FaDiscord, FaPause, FaPlay } from 'react-icons/fa'

const Navbar = ({ handleClick, isPlaying, handleVolumeChange, volume }) => {

    const handleVolumeClick = (event) => {
        event.stopPropagation();
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>

            <div className={isScrolled ? 'NavbarSection sticky' : 'NavbarSection'}>


                <div className='NavbarSocials'>
                    <a className="BtnNavbarInfo" href="https://twitter.com/BoreDegens" target="_blank"><FaXTwitter style={{ verticalAlign: 'middle' }} size='1.3rem' /> Twitter</a>
                    <a className="BtnNavbarInfo" href="#" target="_blank"><FaDiscord style={{ verticalAlign: 'middle' }} size='1.3rem' /> Discord</a>
                    <a className="BtnNavbarInfo" href="#" target="_blank"><MdSell style={{ verticalAlign: 'middle' }} size='1.3rem' /> Mint</a>
                    <a className="BtnNavbarInfo" onClick={handleClick}>
                        {isPlaying ? (
                            <>
                                <FaPause style={{ verticalAlign: 'middle' }} size='1.3rem' />
                                <input type="range" min="0" max="1" step="0.1" value={volume} onClick={handleVolumeClick} onChange={handleVolumeChange} />
                            </>
                        ) : (
                            <FaPlay style={{ verticalAlign: 'middle' }} size='1.3rem' />
                        )}
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Navbar