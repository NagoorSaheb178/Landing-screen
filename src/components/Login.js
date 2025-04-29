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
  justify-content: center; // Center content vertically
  align-items: center; // Center content horizontally
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);
  padding: 0 16px; // Adjusted padding for spacing
  opacity: ${props => (props.animate ? 1 : 0)};
  animation: ${props => (props.animate ? fadeInUp : 'none')} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
`;

const Title = styled.h1`
  font-size: 24px; // Adjusted font size to match the design
  font-weight: 700;
  color: #181818;
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px; // Adjusted font size to match the design
  color: #181818;
  margin-bottom: 32px; // Adjusted margin for spacing
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

const Label = styled.label`
  font-size: 14px; // Adjusted font size to match the design
  color: #6c25ff;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px; // Adjusted padding to match the design
  border-radius: 8px;
  border: 1px solid #dadada;
  margin-bottom: 16px; // Adjusted margin for spacing
  font-size: 14px; // Adjusted font size to match the design
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #6c25ff;
  }
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

const LoginButton = styled.button`
  width: 100%;
  padding: 14px 0; // Adjusted padding to match the design
  border-radius: 8px;
  font-size: 16px; // Adjusted font size to match the design
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin-top: 32px; // Adjusted margin for spacing
  background-color: #dadada;
  color: #fff;
  opacity: ${props => (props.animate ? 1 : 0)};
  animation: ${props => (props.animate ? buttonFadeIn : 'none')} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: 0.2s;
  transition: background 0.3s;
  &:hover {
    opacity: 0.9;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div style={{background:'#f0f8ff', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Container animate={animate}>
        <Title>Signin to your PopX account</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Subtitle>
        <form style={{width:'100%'}}>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
          <LoginButton type="submit" animate={animate}>Login</LoginButton>
        </form>
      </Container>
    </div>
  );
}

export default Login;