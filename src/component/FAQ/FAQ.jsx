import React from 'react';
import './FAQ.css'; // Import the CSS file

const FAQ = () => {
  return (
    <div className="faq-page">
      <div className="main-content">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-section">
        <div className="left">
          <h2>Have more questions?</h2>
          <button>Email support</button>
          <button>
            Go to Help Center
            <i className="fas fa-external-link-alt"></i>
          </button>
        </div>
        <div className="right">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <span>{item}</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="footer">
        <p>© 2023 Bio Link. All rights reserved.</p>
      </div> */}
    </div>
  );
};

const faqItems = [
  "Why do I need a bio link?",
  "Is it really 100% free?",
  "Why choose Bio Link over the alternatives?",
  "Can I create more than one Bio Link?",
  "Is my data safe?",
  "I love the product. How can I show my appreciation?",
  "I have a question. How do I contact you?",
];

export default FAQ;