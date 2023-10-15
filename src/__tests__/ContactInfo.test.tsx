
// app.test.js
import { render, screen } from '@testing-library/react'
import ContactInfo from '../components/ContactInfo'
import { vi } from 'vitest'


  let contact = {
    id: 1, 
    first_name: 'chhatrapal',
    last_name: "jdlfjjd", 
    job: '',
    description: ''
  }
  
  const onContactDelete = vi.fn().mockImplementation(id => {});

  const onContactUpdate = vi.fn().mockImplementation(id => {});


test('Contact Info Page', () => {
    // use <MemoryRouter> when you want to manually control the history
    render(
    <ContactInfo  contact={contact } onContactDelete={onContactDelete} onContactUpdate={onContactUpdate}/>
    )
    expect(true).toBeTruthy();

  
  })
  
