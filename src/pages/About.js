// src/pages/About.js

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #282c34;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Xbox Tracker</Title>
      <Paragraph>
        Xbox Tracker is a platform to keep track of your Xbox games, view game details, and stay updated on your gaming progress.
        Our goal is to provide a seamless and enjoyable experience for all Xbox enthusiasts.
      </Paragraph>
      <Paragraph>
        Whether you're an avid gamer or just getting started, Xbox Tracker has everything you need to stay organized and informed about your gaming journey. 
        Join us today and take your gaming to the next level!
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
