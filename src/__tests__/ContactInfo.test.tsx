
// app.test.js
import { render, screen } from '@testing-library/react'
import ContactInfo from '../components/ContactInfo'
import Contact from '../model/contact';
// import '@testing-library/jest-dom'

interface ContactInfoProps {
    contact: Contact;
    onContactUpdate: (id: number | any) => void;
    onContactDelete: (id: number | any) => void;
  }

  let contact = {
    id: 1, 
    first_name: 'chhatrapal',
    last_name: "jdlfjjd", 
    job: '',
    description: ''
  }
  
test('landing on a bad page', () => {
    // use <MemoryRouter> when you want to manually control the history
    render(
    <ContactInfo  contact={contact } onContactDelete={() => {}} onContactUpdate={() => {}}/>
    )
    expect(true).toBeTruthy();

  
  })
  
