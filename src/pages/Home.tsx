import React from 'react';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Problems from '../components/Problems';
import SolutionComparison from '../components/SolutionComparison';
import Architecture from '../components/Architecture';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import Guarantee from '../components/Guarantee';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Problems />
      <SolutionComparison />
      <Architecture />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <Pricing />
      <Guarantee />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
