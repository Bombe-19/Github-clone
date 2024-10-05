// src/components/ComingSoonSection.js
import React from 'react';
import styled from 'styled-components';

const ComingSoonContainer = styled.div`
  background-color: #444; /* Dark gray background */
  padding: 60px;
  border-radius: 10px;
  text-align: center;
  margin: 40px auto; /* Center the container */
  width: 80%; /* Set a width to make it rectangular */
  max-width: 800px; /* Max width for larger screens */
  position: relative; /* Ensure positioning context */
  z-index: 1; /* Ensure this is above the background */
`;

const RobotImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

const ComingSoonText = styled.p`
  color: #ffffff; /* Text color remains white for contrast */
  font-size: 1.5rem;
  font-weight: 600;
`;

const ComingSoonSection = () => {
  return (
    <ComingSoonContainer>
      <RobotImage src="images/robot.gif" alt="Robot mascot" />
      <ComingSoonText>New Fun Events Coming Soon...</ComingSoonText>
    </ComingSoonContainer>
  );
};

export default ComingSoonSection;
