'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heroBg from '@/assets/hero-bg.png'

function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial animation timeline
    const tl = gsap.timeline();
    tl.fromTo(bgRef.current, 
      {
        scale: 1,
      },
      {
        scale: 2.7,
        duration: 30,
        ease: 'power1.in',
        transformOrigin: 'left center'
      }
    );

    // Hover animations
    const section = heroRef.current;
    const bg = bgRef.current;

    const handleMouseEnter = () => {
      // gsap.to(bg, {
      //   scale: 1,
      //   duration: 1.5,
      //   ease: 'power2.out'
      // });
    };

    const handleMouseLeave = () => {
      // gsap.to(bg, {
      //   scale: 1.8,
      //   duration: 1,
      //   ease: 'power2.in'
      // });
    };

    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden cursor-pointer">
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r" />
      </div>
    </section>
  )
}

export default Hero