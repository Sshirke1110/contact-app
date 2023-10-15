
// app.test.js
import { render } from '@testing-library/react'
import { vi } from 'vitest'
import ContactsList from '../components/ContactsList';


let mockContacts = [{
  id: 1,
  first_name: 'chhatrapal',
  last_name: "jdlfjjd",
  job: '',
  description: ''
}]


const mockGetContacts = vi.fn();

const mockContactUpdate = vi.fn();

const mockDeleteContact = vi.fn()

const mockSortBydecreasing = vi.fn()

const mockSetContacts = vi.fn()


describe("Contact list Page", () => {
  test('should be truthy', () => {
    render(
      <ContactsList setContacts={mockSetContacts} contacts={mockContacts} deleteContact={mockDeleteContact} getContacts={mockGetContacts} contactUpdate={mockContactUpdate} sortBydecreasing={mockSortBydecreasing} />
    )
    expect(true).toBeTruthy();


  })
})


