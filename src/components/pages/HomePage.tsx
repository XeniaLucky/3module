import React from 'react';
import CardList from '../CardList/CardList';
import Hero from '../Hero/Hero';
import ImageSlider from '../ImageSlider/ImageSlider';
import Testimonials from '../Testimonials/Testimonials';
import Features from '../Features/Features';
import Connect from '../Connect/Connect';
import Cta from '../Cta/Cta';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ImageSlider />
      <Testimonials />
      <CardList limit={3} /> 
      <Features />
      <Connect />
      <Cta />
    </>
  );
};

export default HomePage;