import React from 'react';
import './contact.css';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

function Contact({ reference }) {
  return (
    <section id='contact' className='contact' ref={reference}>
        <div className="container">
          <SectionTitle title="Contact" subtitle="Contact Me" />
          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className='info-box'>
                <i className='bx bx-map'></i>
                <h3>My Address</h3>
                <p>JIIT 62</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className='bx bx-share-alt'></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/aman-tyagi-677377270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='linkedin'>
                    <i className='bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className='bx bx-envelope'></i>
                <h3>Email Me</h3>
                <p>asang12a@gmail.com</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className='bx bx-phone-call'></i>
                <h3>Call Me</h3>
                <p>+91 99971 93592</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
    </section>
  )
}

export default Contact