import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #eee;
  text-align: center;
`;

const Quote = styled.blockquote`
  font-style: italic;
  margin: 1rem auto;
  max-width: 600px;
`;

 function Testimonials() {
  return (
    <Section id="testimonials">
      <h2>What Travelers Say</h2>
      <Quote>“Amazing service and unforgettable experience in Dubai!”</Quote>
      <Quote>“Smooth bookings and top-notch support.”</Quote>
    </Section>
  );
}
export default Testimonials;