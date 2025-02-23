import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';
import profileImage from '../images/aman-avatar.jpeg';
import Skills from '../components/Skills';
import Interests from '../components/Interests';

function About({ reference, aboutActive }) {
  return (
    <section id='about' className='about' ref={reference}>
        <div className='container about-me border-top-left border-left'>
          <SectionTitle title="About" subtitle="Learn more about me"/>
          <div className="row">
            <div className="col-lg-4">
              <img src={profileImage} alt="Me" className='img-fluid' />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>DSA Enthusiast &amp; Web Developer</h3>
              <p className="fst-italic">
              A passionate problem solver skilled in DSA and web development, with experience in competitive programming as a Codeforces Specialist and ICPC regional qualifier.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className='bi bi-chevron-right'></i>{' '}
                      <strong>Birthday:</strong> <span>3 Dec 2003</span>
                    </li>
                    <li>
                      <i className='bi bi-chevron-right'></i>{' '}
                      <strong>Phone:</strong> <span>+91 99971 93592</span>
                    </li>
                    <li>
                      <i className='bi bi-chevron-right'></i>{' '}
                      <strong>City:</strong> <span>Roorkee, India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className='bi bi-chevron-right'></i>{' '}
                      <strong>Age:</strong> <span>20</span>
                    </li>
                    <li>
                      <i className='bi bi-chevron-right'></i>{' '}
                      <strong>Degree:</strong> <span>Pursuing BTech</span>
                    </li>
                    <li>
                      <i className='bi bi-chevron-right'></i>{' '}
                      <strong>Email:</strong> <span>asang12a@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              I am a passionate coder with a strong interest in problem-solving, always looking for new challenges and opportunities. With experience in Data Structures and Algorithms (DSA), I have achieved a Specialist rating on Codeforces and qualified for the ICPC Regionals. Competitive programming has helped me refine my analytical thinking and ability to develop optimized solutions under constraints. 
              
              Apart from competitive programming, I have experience in web development, building efficient and scalable applications. I enjoy exploring new technologies and continuously improving my technical skills. While I have yet to dive deep into certain fields, I am always open to learning and expanding my knowledge in different areas, including AI and federated learning.

              I thrive in environments that encourage creative thinking and innovation. My goal is to apply my problem-solving skills and technical expertise to real-world challenges, whether through development, research, or competitions. Always eager to learn and grow, I look forward to collaborating on impactful projects and pushing my limits.
              </p>
            </div>
          </div>
        </div>
        <Skills active={aboutActive}/>
        <Interests />
    </section>
  )
}

export default About