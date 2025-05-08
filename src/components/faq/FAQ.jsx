import React from "react";
import FAQitems from "./FAQitems";

const FAQ = () => {
  const faqList = [
    {
      question: "How do I create an account?",
      anser:
        'Click the "Sign" Up button in the top right corner and follow the registration process.',
    },
    {
      question: "I forgot my password. What should I do?",
      anser:
        'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: " How do I update my profile information?",
      anser:
        'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
    {
      question: " How do I update my profile information?",
      anser:
        'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
  ];
  return (
    <>
      {faqList.map((item, index) => (
        <FAQitems key={index} question={item.question} answer={item.anser} />
      ))}
    </>
  );
};

export default FAQ;
