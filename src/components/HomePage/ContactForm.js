import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import styles from '../../app/styles/contactform.module.css'


const ContactForm = ({setShowForm}) => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

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
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id={styles.formInputControlEmail}
          control={Input}
          label='Email'
          name='from_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id={styles.formInputControlEmail}
          control={Input}
          label='Name'
          name='from_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <div className={styles.messageTextArea}>
        <Form.TextArea
          id={styles.formTextareaControlOpinion}
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message…'
          required
          style={{ display: 'flex', flexDirection: 'column', 
                    margin: '5px', minHeight: '200px', minWidth: '300px'}}
        />
        </div>
        <div className={styles.contactFormButtonDiv}>
        <Button className={styles.contactFormSubmit} type='submit' >Send</Button>
        <Button className={styles.contactFormClose} onClick={() => setShowForm(false)}>Close</Button>
        </div>
      </Form>
    </div>
  );
};
 
export default ContactForm;