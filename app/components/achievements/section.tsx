'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSplineState } from '@/app/states';
import { handleTitleBelowAnimation } from '@/app/animations';
import ExperienceSample from '../experience/sample';
import { achievements } from '@/app/constants';
gsap.registerPlugin(ScrollTrigger);

const AchievementSection = () => {
  const { loaded, setLoaded } = useSplineState((state) => state);
  useEffect(() => {
    handleTitleBelowAnimation();
  }, [loaded]);

  return (
    <section
      className='col-span-6 mt-[80px] space-y-[60px] lg:col-start-2 lg:col-end-6'
      id='experience'
    >
      <h1 className='title below-fold'>ACHIEVEMENTS</h1>
      <div className='space-y-[44px]'>
        {achievements.map((experience: Experience, index) => (
          <ExperienceSample key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;
