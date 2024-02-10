import React, { useState, FC } from 'react';
import styled from 'styled-components';

// Define your green-themed color palette
const theme = {
    primary: '#000', // A vibrant shade of green
    secondary: '#66974C', // Light green
    interactive: '#20672C', // Lime green, more vibrant
    container: '#3e8e41', // Pale green, for backgrounds
    module: '#66974C', // Honeydew, lighter for modules
    accent: '#3e8e41', // Medium sea green, for accents
    outline: '#2E8B57', // Dark sea green, for outlines
  };
  
  // Styled components with the new green theme
  const FAQWrapper = styled.div`
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px ${theme.outline};
    background: ${theme.container};
  `;
  
  const Question = styled.button`
    width: 100%;
    text-align: left;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.primary};
    background: ${theme.module};
    border: none;
    border-bottom: 1px solid ${theme.outline};
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-radius: 8px;
  
    &:hover,
    &:focus {
      background-color: ${theme.interactive};
      color: ${theme.primary};
    }
  
    &:last-of-type {
      border-bottom: none;
    }
  `;
  
  const Answer = styled.div`
    padding: 0.5rem 1rem 1rem;
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${theme.primary};
    border-left: 3px solid ${theme.accent};
    border-radius: 8px;

    background-color: ${theme.secondary};
  
    p {
      margin: 0;
    }
  `;

type FaqType = {
    question: string;
    answer: string;
  };

// FAQ item component
const FAQItem: FC<{ faq: FaqType }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Question onClick={() => setIsOpen(!isOpen)}>
        {faq.question}
      </Question>
      {isOpen && <Answer>{faq.answer}</Answer>}
    </>
  );
};

// FAQ list component
const FAQ: FC<{ faqs: FaqType[] }> = ({ faqs }) => {
  return (
    <FAQWrapper>
                        <h1>Frequent Asked Questions - FAQ</h1>

      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </FAQWrapper>
  );
};

export default FAQ;
