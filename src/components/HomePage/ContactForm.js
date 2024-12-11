import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import styles from '../../app/styles/contactform.module.css'


const ContactForm = ({setShowForm}) => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

return (
    <div className={styles.contactForm}>
        <h2>Contact Form</h2>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.formField}>
        <label htmlFor="from_email">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Email..."
            required
            className={styles.formInput}
          />
        </div>
        
        <div className={styles.formField}>
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Name..."
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message..."
            required
            className={styles.formTextArea}
            style={{ display: 'flex', flexDirection: 'column', minHeight: '200px', minWidth: '300px'}}
          />
        </div>

         <div className={styles.contactFormButtons}>
          <button type="submit" className={styles.contactFormSubmit}>Send</button>
          <button type="button" className={styles.contactFormClose} onClick={() => setShowForm(false)}>Close</button>
        </div>
      </form>
    </div>
  );
};
 
export default ContactForm;