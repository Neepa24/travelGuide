import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  background: url('/assets/images/dubai-skyline.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  z-index: 2;
`;

 function HeroBanner() {
  return (
    <HeroSection id="hero">
      <Overlay />
      <Content>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Experience Dubai Like Never Before
        </motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
          Book flights, villas, nightlife, and more.
        </motion.p>
      </Content>
    </HeroSection>
  );
}
export default HeroBanner;