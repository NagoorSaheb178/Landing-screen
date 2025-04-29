import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 375px;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);
  padding: 0 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #181818;
  margin-bottom: 8px;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  color: #6c25ff;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dadada;
  margin-bottom: 16px;
  font-size: 14px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  color: #181818;
  margin-right: 16px;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: #6c25ff;
  color: #fff;
  transition: background 0.2s;
  &:hover {
    background-color: #5a1fd1;
  }
`;

function CreateAccount() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    navigate('/account-settings'); // Redirect to AccountSettings page
  };

  return (
    <div style={{background:'#f0f8ff', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Container>
        <Title>Create your PopX account</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Full Name*</Label>
          <Input type="text" placeholder="Marry Doe" />
          <Label>Phone number*</Label>
          <Input type="text" placeholder="Marry Doe" />
          <Label>Email address*</Label>
          <Input type="email" placeholder="Marry Doe" />
          <Label>Password *</Label>
          <Input type="password" placeholder="Marry Doe" />
          <Label>Company name</Label>
          <Input type="text" placeholder="Marry Doe" />
          <Label>Are you an Agency?*</Label>
          <RadioGroup>
            <RadioInput type="radio" id="yes" name="agency" value="yes" />
            <RadioLabel htmlFor="yes">Yes</RadioLabel>
            <RadioInput type="radio" id="no" name="agency" value="no" />
            <RadioLabel htmlFor="no">No</RadioLabel>
          </RadioGroup>
          <Button type="submit">Create Account</Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateAccount;