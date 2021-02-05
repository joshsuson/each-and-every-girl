import styled from 'styled-components';

export const FaqWrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto;

  @media (max-width: 834px) {
    margin: 40px 32px;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 833px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h2``;

export const Question = styled.h3`
  font-size: 1.25rem;
  font-style: bold;
  text-transform: uppercase;

  > span {
    background-image: linear-gradient(
      43deg,
      #fadebc 0%,
      #fbbc8b 46%,
      #fe9567 100%
    );
    background-size: 100% 0.2em;
    background-repeat: no-repeat;
    background-position: 0 88%;
  }
`;

export const Answer = styled.p`
  line-height: 1.5;
`;

export const SocialConnect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 1.75rem;

  .icon {
    margin-left: 8px;
    color: black;

    &:hover {
      color: #fe9567;
    }
  }
  @media (max-width: 833px) {
    font-size: 1.5rem;
  }
`;

export const ContactDivider = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  > hr {
    width: 30%;
    border: 1px solid black;
  }
  > div {
  }
`;

export const FormHeader = styled.div`
  width: 50%;
  margin: 16px auto;
  margin-bottom: 32px;
  text-align: center;
  font-size: 1.75rem;
`;
