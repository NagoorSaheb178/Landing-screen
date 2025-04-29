import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 375px;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);
`;

const Header = styled.div`
  padding: 20px 16px;
  border-bottom: 1px solid #ececec;
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px 16px;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  background: #e2d4ff;
`;

const Badge = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: #6c25ff;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 2px solid #fff;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #181818;
`;

const Email = styled.div`
  font-size: 14px;
  color: #6c25ff;
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: 13px;
  color: #181818;
  margin-top: 8px;
`;

const Divider = styled.div`
  border-bottom: 1px dashed #dadada;
  margin: 16px 0;
`;

function AccountSettings() {
  return (
    <div style={{background:'#f0f8ff', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Container>
        <Header>Account Settings</Header>
        <ProfileSection>
          <AvatarWrapper>
            <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" />
            <Badge>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#6c25ff"/><path d="M16.5 9.5L11 15L7.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Badge>
          </AvatarWrapper>
          <Info>
            <Name>Marry Doe</Name>
            <Email>Marry@Gmail.Com</Email>
            <Description>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</Description>
          </Info>
        </ProfileSection>
        <Divider />
      </Container>
    </div>
  );
}

export default AccountSettings;