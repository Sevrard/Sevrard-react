import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Waves from '../../components/shared/waves/waves';
import TopBar from '../../components/TopBar/TopBar';
import CvLayout from '../Cv/Cvlayout';

import Hole from '../../assets/HoleRed.png';
import MountainImg from '../../assets/Mountain.png';
import MountainImg2 from '../../assets/mountain2.png';

import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const LandingPage: React.FC = () => {
    const [isAltBg, setIsAltBg] = useState(false);
    const mainContainer = useRef<HTMLDivElement>(null);

    const toggleBackground = () => { setIsAltBg(prev => !prev); };
    const bgImage = isAltBg ? MountainImg2 : MountainImg;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".wrapper",
                    start: "top top",
                    end: "+=180%",
                    pin: true,
                    anticipatePin: 1, 
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(".background-overlay", {
                scale: 1.7,
                z: 400,
                transformOrigin: "center center",
                ease: "power1.inOut"
            })
            .to(".section.hero", {
                scale: 1,
                transformOrigin: "center center",
                ease: "power1.inOut"
            }, "<");

        }, mainContainer);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainContainer} style={{ width: '100%', overflow: 'hidden' }}>
            <TopBar onChangeBg={toggleBackground} />

            <div className="fixed-background" style={{ backgroundImage: `url(${bgImage})` }}/>

            <div className="wrapper">
                <div className="content">
                    <section className="section hero"/>
                    
                    <div className="gradient-fade-bot"/>

                    <section className="block">
                        <CvLayout /> 
                        <Waves />
                    </section>
                </div>

                <div className="image-overlay-container">
                    <img className="background-overlay" src={Hole} alt="Transitions background" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;