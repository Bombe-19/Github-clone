// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, #0a2e1f, #000000); /* Gradient background */
  color: white;
  padding: 2rem 4rem; /* Adjust padding as needed */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; /* Space between left and right sections */
  align-items: flex-start; /* Align items at the start */
  margin-bottom: 1rem; /* Space between sections and bottom */
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content */
`;

const Logo = styled.img`
  width: 200px; /* Adjust logo size */
  height: auto;
  margin-bottom: 1rem; /* Space between logo and address */
`;

const AddressSection = styled.div`
  font-size: 1.1rem; /* Adjust font size */
  line-height: 1.8;
  text-align: center; /* Center align the address */
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align the right section content */
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column; /* Stack the follow text and icons vertically */
  align-items: center; /* Center align the icons */
  margin-bottom: 1rem; /* Space between icons and credits */
`;

const SocialIconsRow = styled.div`
  display: flex; /* Align icons in a row */
  gap: 15px; /* Space between social icons */
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 32px; /* Adjust icon size */
  &:hover {
    color: #1da1f2; /* Change color on hover */
  }
`;

const CreatedBy = styled.p`
  font-size: 1rem; /* Adjust font size */
  margin: 0;
  text-align: center; /* Center align the credits text */
`;

const Footer = () => (
  <FooterContainer>
    <ContentWrapper>
      <LeftSection>
        <Logo src="images/github.png" alt="GitHub Logo" />
        <AddressSection>
          <p>SRM Institute of Science & Technology,<br />
            Kattankulathur, Chennai 603203<br />
            India
          </p>
        </AddressSection>
      </LeftSection>
      <RightSection>
        <SocialIcons>
          <p>Follow us on</p>
          <SocialIconsRow>
            <SocialIcon href="#" aria-label="LinkedIn"><FaLinkedin /></SocialIcon>
            <SocialIcon href="#" aria-label="Instagram"><FaInstagram /></SocialIcon>
            <SocialIcon href="#" aria-label="Twitter"><FaTwitter /></SocialIcon>
            <SocialIcon href="#" aria-label="GitHub"><FaGithub /></SocialIcon>
          </SocialIconsRow>
        </SocialIcons>
        <CreatedBy>Created By Ganesh</CreatedBy> {/* Credits centered */}
      </RightSection>
    </ContentWrapper>
  </FooterContainer>
);

export default Footer;
