import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-right: 16px;
`;

export const StyledForm = styled.form``;

export const StyledLabel = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 8px 0;
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 35px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid hsla(0, 0%, 0%, 0.25);
  padding: 4px 8px;
  font-size: 1rem;
  margin-bottom: 8px;
`;

export const StyledTextarea = styled.textarea`
  width: 90%;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid hsla(0, 0%, 0%, 0.25);
  padding: 4px 8px;
  font-size: 1rem;
  margin-bottom: 8px;
`;

export const StyledButton = styled.button`
  background: linear-gradient(43deg, #fadebc 0%, #fbbc8b 46%, #fe9567 100%);
  padding: 16px;
  cursor: pointer;
  margin: 24px auto;
  display: block;
  color: black;
  text-transform: uppercase;
  width: 50%;
  text-align: center;
  border: none;
  font-size: 1rem;
  border-radius: 25px;
  box-shadow: 0 3px 10px hsla(18, 99%, 70%, 0.5);

  &:hover {
    box-shadow: 0 3px 15px hsla(18, 99%, 70%, 0.7);
  }
`;
