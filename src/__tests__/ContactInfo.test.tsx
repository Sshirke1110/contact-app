
// app.test.js
import { fireEvent, render, screen } from '@testing-library/react'
import ContactInfo from '../components/ContactInfo'
import { vi } from 'vitest'


let contact = {
  id: 1,
  first_name: 'sachin',
  last_name: "tendulkar",
  job: '',
  description: ''
}



const onContactDelete = vi.fn().mockImplementation(id => { });

const onContactUpdate = vi.fn().mockImplementation(id => { });


describe('Contact Info Page', () => {

  test('checking update btn', () => {
    render(
      <ContactInfo contact={contact} onContactDelete={onContactDelete} onContactUpdate={onContactUpdate} />
    )

    let updateBtn = screen.getByTestId('update')
    fireEvent.click(updateBtn)
    expect(onContactUpdate).toBeCalled()
  })

  test('checking delete btn', () => {
    render(
      <ContactInfo contact={contact} onContactDelete={onContactDelete} onContactUpdate={onContactUpdate} />
    )

    let deleteBtn = screen.getByTestId('delete')
    fireEvent.click(deleteBtn)
    expect(onContactDelete).toBeCalled()

  })
})

