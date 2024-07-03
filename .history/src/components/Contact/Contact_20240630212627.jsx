import React, { useState } from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('E-mail envoyé avec succès');
      } else {
        throw new Error('Erreur lors de l\'envoi de l\'e-mail');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi de l\'e-mail');
    }
  };

  return (
    <div>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact me</h2>
          <p>Feel free to reach out!</p>
        </div>

        <div className={styles.column}>
          <img
            src={getImageUrl('contact/email.png')}
            alt="Email"
            className={styles.email}
          />

          <ul className={styles.links}>
            <li className={styles.link}>
              <img
                src={getImageUrl('contact/linkedinIcon.png')}
                alt="LinkedIn icon"
                className={styles.icons}
              />
              <a href="https://www.linkedin.com/in/hend-hamdi-6a9934243/">
                linkedin.com/hendhamdi
              </a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl('contact/githubIcon.png')}
                alt="Github icon"
                className={styles.icons}
              />
              <a href="https://github.com/hendhamdi">github.com/hendhamdi</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your first name.."
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: '170px' }}
                value={formData.subject}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <input type="submit" value="Submit" className={styles.submitBtn} />
          </form>
        </div>
      </footer>

      <div className={styles.footer}>
        <p className={styles.copyright}>
          copyright &copy; MyPortfolio.web.com 2024
        </p>
      </div>
    </div>
  );
};

export default Contact;
