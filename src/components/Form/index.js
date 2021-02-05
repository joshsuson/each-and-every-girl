import React, { useState } from 'react';
import axios from 'axios';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  FormWrapper,
  StyledButton,
} from './styles';

export const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/f/mdopjweo',
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, 'Thanks! Look for a response shortly', form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <FormWrapper>
      <StyledForm onSubmit={handleOnSubmit}>
        <div>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput id="name" type="text" name="name" />
        </div>
        <div>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput id="email" type="email" name="email" required />
        </div>
        <div>
          <StyledLabel htmlFor="message">Message</StyledLabel>
          <StyledTextarea
            rows="4"
            id="message"
            name="message"
            required
          ></StyledTextarea>
        </div>
        <StyledButton type="submit" disabled={serverState.submitting}>
          Submit
        </StyledButton>
        {!!serverState.status && (
          <p className={!serverState.status.ok ? 'errorMsg' : ''}>
            {serverState.status.msg}
          </p>
        )}
      </StyledForm>
    </FormWrapper>
  );
};
