import React from 'react';
import { Button } from '../../Shared/Button/Button';
import '../../../App.css'
import './Banner.css'

const Banner = () => {
    return (
        <div className='hero-container'>
            <video src="../../../videos/video-1.mp4" autoPlay loop muted></video>
            <h1>ADVANTURE AWAIT</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    Get Started
                </Button>
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    Watch Trailer <i class="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    );
};

export default Banner;