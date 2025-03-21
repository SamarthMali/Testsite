"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/hero-bg.png";
import "./Hero.css";
function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const rightThreeSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial animation timeline
    const tl = gsap.timeline();
    tl.fromTo(
      bgRef.current,
      {
        scale: 1,
      },
      {
        scale: 2.7,
        duration: 15,
        ease: "power1.inOut",
        transformOrigin: "left center",
        yoyo: true,
        repeat: -1,
      }
    );

    tl.from(".rightSection", {
      x: 250, // Use a smaller value
      // opacity: 0,
      duration: 2.5,
      delay: 0,
    },"<");


    tl.from(".leftSection .firstGroup .firstLine", {
      width: 0,
      opacity: 0,
      duration: 2.5,
      delay: 0,
    },"<");


    tl.from(".leftSection .secondGroup h1", {
      opacity: 0,
      duration: 2.5,
      delay: 0,
    },"<");

    
    tl.from([".leftSection .secondGroup h3", ".leftSection .secondGroup p", ".thirdGroup .ctaButtons"], {
      y: 50,
      opacity: 0,
      duration: 2.5,
    }, "<");
    
    tl.from('.thirdGroup .certifiedIcons .icon', {
      y: 12,
      opacity: 0,
      duration: 1,
      stagger: 0.3
    },"<"
    )
    
 
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="hero-container relative min-h-screen overflow-hidden"
      >
        {/* Background Image */}

        <div ref={bgRef} className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Hero Background"
            fill
            priority
            quality={100}
            className="object-cover z-0"
          />
        </div>
        <div className="hero-content relative">
          <div className="leftSection">
            <div className="firstGroup">
              <div className="firstLine">
                <span>Simple</span>
                <span>Smart</span>
                <span>Scalable</span>
              </div>
              <p>SOLUTIONS</p>
            </div>

            <div className="secondGroup">
              <h1>AI-Powered. Cloud-Optimized. &nbsp; Future-Ready.</h1>
              <h3>
                Transform your business with custom AI-driven software, scalable{" "}
                <br /> cloud platforms, and automation that works seamlessly.
              </h3>
              <p>Build for today. Ready for tomorrow.</p>
            </div>

            <div className="thirdGroup">
              <div className="ctaButtons">
                <button className="first">See Case Studies</button>

                <button className="second">Get in Touch</button>
              </div>

              <div className="certifiedIcons">
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
              </div>
            </div>
          </div>

          <div className="rightSection">
            <div ref={rightThreeSectionRef}  className="firstBox">
              <div className="firstBoxCircle"></div>
              <p>Smarter Insights,<br /> Seamless Automation</p>
              
              <div>
              </div>
            </div>

            <div className="secondBox">
              <div className="secondBoxCircle"></div>
              <p>Smarter Insights,<br /> Seamless Automation</p>
              
              <div>

              </div>
            </div>
            <div className="thirdBox">
              <div className="thirdBoxCircle"></div>
              <p>Smarter Insights,<br /> Seamless Automation</p>
              <div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
