import React, { useRef, useState, useEffect, FormEvent } from 'react';
import "./RegForm.css";

const RegForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleInput = () => {
    setMessage(null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const company = companyRef.current?.value;
    const email = emailRef.current?.value;

    if (!name || !company || !email) {
      setMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }

    const existingData = localStorage.getItem(email);
    if (existingData) {
      setMessage({ text: 'User already exists.', type: 'error' });
      return;
    }

    const userData = { name, company };
    localStorage.setItem(email, JSON.stringify(userData));

    setMessage({ text: 'Registration successful.', type: 'success' });


    if (nameRef.current) nameRef.current.value = '';
    if (companyRef.current) companyRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
  };

  return (
    <div className="regForm">
      <div className="regHeadings">
        <h1>Registration</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="message">
          {message && <p className={`${message.type}`}>{message.text}</p>}
        </div>
        <div className="inputBox">
          <div className="inputDiv">
            <label>
              Name <span className="required">*</span>
            </label>
            <input
              placeholder="Enter Your Name"
              type="text"
              ref={nameRef}
              name="name"
              onInput={handleInput}
            />
          </div>

          <div className="inputDiv">
            <label>
              Company <span className="required">*</span>
            </label>
            <input
              placeholder="Enter Your company name"
              type="text"
              ref={companyRef}
              name="company"
              onInput={handleInput}
            />
          </div>

          <div className="inputDiv">
            <label>
              Email Address <span className="required">*</span>
            </label>
            <input
              placeholder="Enter Your email address"
              type="email"
              ref={emailRef}
              name="email"
              onInput={handleInput}
            />
          </div>
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegForm;
