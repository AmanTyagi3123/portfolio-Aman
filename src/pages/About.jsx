import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';
import profileImage from '../images/aman-avatar.jpg';
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, magni non. Magni id distinctio, voluptas nesciunt assumenda debitis!
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum debitis minus quam reiciendis iste doloremque reprehenderit voluptatem facere, dolorem veniam eligendi dolores ipsa sint consectetur dignissimos ullam praesentium cumque corporis qui quod animi? Totam aut enim reprehenderit iste ullam quas amet delectus perferendis sequi ipsa officiis temporibus asperiores omnis, quam ducimus rerum libero dolorum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate aliquid, quas ut tempore maiores reiciendis. Ipsam, delectus! Labore, nihil natus. Ipsa nulla facilis officia deleniti, numquam fugit debitis, nesciunt ullam soluta, accusamus quaerat perferendis et sunt eos fuga quos atque unde! Autem aut consectetur tempora accusamus. Quod, odio soluta! Dicta, voluptate? Et corrupti non tempore doloremque eum, soluta, adipisci voluptas, exercitationem unde sunt quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio sapiente provident consectetur sunt iusto! Quibusdam, autem nesciunt. Perspiciatis dolor asperiores doloribus sunt cumque et molestiae totam, animi aut recusandae iste in magni ex a quaerat atque ipsum provident consequuntur explicabo odio modi quibusdam neque. Dolorem, est. Sed maiores dicta ea minima, expedita nihil laborum nulla magni similique, quaerat deleniti sequi iure rerum corporis debitis eaque repudiandae! Perspiciatis quas itaque optio rerum molestias omnis dolor eligendi praesentium
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