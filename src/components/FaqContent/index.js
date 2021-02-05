import React from 'react';
import {
  FaqWrapper,
  ContactGrid,
  Heading,
  Answer,
  Question,
  SocialConnect,
  ContactDivider,
  FormHeader,
} from './styles';
import faqs from '../../assets/faqsData';
import { Form } from '../Form';
import { Returns } from '../Returns';
import { AiFillInstagram } from 'react-icons/ai';

export const FaqContent = () => {
  return (
    <FaqWrapper>
      <ContactGrid>
        <div>
          <Heading>Contact Me</Heading>
          <SocialConnect>
            Connect with me on
            <a
              href="https://www.instagram.com/eachandeverygirl/"
              target="_blank"
            >
              <AiFillInstagram className="icon" size="4rem" />
            </a>
          </SocialConnect>
          <ContactDivider>
            <hr />
            <div>or</div>
            <hr />
          </ContactDivider>
          <FormHeader>Send me a message</FormHeader>
          <Form />
        </div>
        <div>
          <Heading>FAQs</Heading>
          {faqs.map(({ question, answer }) => {
            return (
              <div key={question}>
                <Question>
                  <span>{question}</span>
                </Question>
                <Answer>{answer}</Answer>
              </div>
            );
          })}
        </div>
      </ContactGrid>
      <Returns />
    </FaqWrapper>
  );
};
