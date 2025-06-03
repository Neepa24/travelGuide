import React, { useState } from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  padding: 2rem;
  background: #111;
  color: white;
  text-align: center;
`;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 1800);
  };

  return (
    <FooterWrap id="contact">
      <div className="newsletter-cta">
        <h3>Stay Updated!</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            className={sent ? 'sent' : ''}
          />
          <button type="submit" className={sent ? 'sent' : ''}>
            {sent ? '✓ Sent' : 'Send'}
          </button>
        </form>
      </div>
      <div className="footer-socials">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook-f icon"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter icon"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram icon"></i>
        </a>
      </div>
      <div className="footer-copy">© 2025 Travel Guide</div>
    </FooterWrap>
  );
}