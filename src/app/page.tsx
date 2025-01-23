'use client';

import AboutMe from './components/AboutMe';
import MySocials from './components/Socials';
import SupportMe from './components/SupportMe';
import AnimatedStats from './components/AnimatedStats';
import PhoneSection from './components/Phone';
import ResponsiveGrid from './components/Ctas';

export default function HomePage() {
  return (
    <>
      <AboutMe />
      <MySocials />
      <AnimatedStats />
      <PhoneSection videoId="tVZ2N2vEj9E"/>
      <ResponsiveGrid/>
      <SupportMe />
      
    </>
  );
}
