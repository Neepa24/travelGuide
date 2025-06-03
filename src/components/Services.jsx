import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 3rem 2rem;
  background: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  padding: 1rem;
  background: #f4f4f4;
  text-align: center;
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const services = ['Flight Booking', 'Car Rentals', 'Villa Reservations', 'Night Club Tickets', 'eSIM Purchase', 'Custom Packages'];

 function Services() {
  return (
    <ServicesSection id="services">
      <h2>Our Services</h2>
      <Grid>
        {services.map(service => (
          <Card key={service}>{service}</Card>
        ))}
      </Grid>
    </ServicesSection>
  );
}
export default Services;
