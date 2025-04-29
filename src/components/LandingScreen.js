import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 375px; // Adjusted width to match the design
  width: 100%;
  min-height: 100vh; // Ensure full viewport height
  background-color: #fff;
  margin: 0 auto; // Center horizontally
  display: flex;
  flex-direction: column;
  justify-content: flex-end; // Align content at the bottom
  align-items: center; // Center content horizontally
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);
  padding: 0 16px 32px 16px; // Adjusted padding for spacing
  opacity: ${props => (props.animate ? 1 : 0)};
  animation: ${props => (props.animate ? fadeInUp : 'none')} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
`;

const Title = styled.h1`
  font-size: 24px; // Adjusted font size to match the design
  font-weight: 700;
  color: #181818;
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 16px; // Adjusted font size to match the design
  color: #181818;
  margin-bottom: 32px; // Adjusted margin for spacing
  font-family: 'Roboto', sans-serif;
`;

const buttonFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 0; // Adjusted padding to match the design
  border-radius: 8px;
  font-size: 16px; // Adjusted font size to match the design
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin-bottom: 12px; // Adjusted margin for spacing
  transition: all 0.3s ease;
  opacity: ${props => (props.animate ? 1 : 0)};
  animation: ${props => (props.animate ? buttonFadeIn : 'none')} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: ${props => props.delay || '0s'};
  &:hover {
    opacity: 0.9;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #6c25ff;
  color: white;
`;

const SecondaryButton = styled(Button)`
  background-color: #e2d4ff;
  color: #6c25ff;
  margin-bottom: 0;
`;

function LandingScreen() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div style={{background:'#f0f8ff', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Container animate={animate}>
        <Title>Welcome to PopX</Title>
        <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Subtitle>
        <PrimaryButton animate={animate} delay="0.2s" onClick={() => navigate('/create-account')}>Create Account</PrimaryButton>
        <SecondaryButton animate={animate} delay="0.4s" onClick={() => navigate('/login')}>Already Registered? Login</SecondaryButton>
      </Container>
    </div>
  );
}

export default LandingScreen;