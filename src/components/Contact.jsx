import Navigation from './Navigation';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5eo6rnr', 'template_d0g3j9a', form.current, 'FgZX1kzCzARKojj9U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <div>
      <Navigation />
      <div className="containerComponentaContact">
        <div id='containerFormulare'>
          <h2>Get in touch:</h2>
          <p>are mult mai mult sens</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className='inputDiv'>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name:"
              />
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email:"
              />
              <label htmlFor=""></label>
              <textarea 
                type="text"
                id="message"
                name="message"
                placeholder="Message:"
              />
              <input
                type="submit"
                value="Send"
                id="submit"
              />
            </div>
          </form>
          <p>Or send email at chocolatechiphelmet@gmail.com</p>
        </div>
        <div className="containerPozaContact">
          <img
            src="/portfolio/field.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
