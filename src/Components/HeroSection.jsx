import React from 'react';
import '../assets/css/HeroStyle.css'
import Marquee from 'react-fast-marquee';
import heroImg from '../assets/img/hero-img.png';
import google from '../assets/img/brands/logos_google.png';
import trello from '../assets/img/brands/trello-logo-blue 1.png';
import monday from '../assets/img/brands/logos_monday.png';
import notion from '../assets/img/brands/notion.png';
import slack from '../assets/img/brands/slack.png';


const HeroSection = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="hero-text">
                                <h1>Increase Your Customers Loyalty and Satisfaction</h1>
                                <p>We help businesses like yours earn more customers, standout from competitors, make more money</p>
                                <button>Get Started</button>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div>
                                <img className='hero-img' src={heroImg} alt="Image" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='partnerSection'>
                    <div className="container">
                        <div className='partner-logo'>
                        <Marquee autoFill="true" pauseOnHover="true" speed="20">                      
                            <img src={google} alt="Google" />
                            <img src={trello} alt="Trello" />
                            <img src={monday} alt="Monday" />
                            <img src={notion} alt="Notion" />
                            <img src={slack} alt="Slack" />                         
                        </Marquee>
                        </div>
                    </div>
                </div>

                </main>
        </>
    );
};

export default HeroSection;