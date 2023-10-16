
// app.test.js
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import ContactsList from '../components/ContactsList';


let mockContacts = [{
  id: 1,
  first_name: 'sachin',
  last_name: "tendulkar",
  job: '',
  description: ''
}]


const mockEmptyContacts: any = []
const mockGetContacts = vi.fn();

const mockContactUpdate = vi.fn();

const mockDeleteContact = vi.fn()

const mockSortBydecreasing = vi.fn()

const mockSetContacts = vi.fn()

const setDecreasingOrder = vi.fn()


describe("Contact list Page", () => {
  test('should be truthy', () => {
    render(
      <ContactsList setContacts={mockSetContacts} contacts={mockContacts} deleteContact={mockDeleteContact} getContacts={mockGetContacts} contactUpdate={mockContactUpdate} sortBydecreasing={mockSortBydecreasing} />
    )
    expect(true).toBeTruthy();


  })

  test('when no contacts', () => {
    render(
      <ContactsList setContacts={mockSetContacts} contacts={mockEmptyContacts} deleteContact={mockDeleteContact} getContacts={mockGetContacts} contactUpdate={mockContactUpdate} sortBydecreasing={mockSortBydecreasing} />
    )
    expect(true).toBeTruthy();
  })
})


test('image snapshot', () => {
  render(
    <ContactsList setContacts={mockSetContacts} contacts={mockEmptyContacts} deleteContact={mockDeleteContact} getContacts={mockGetContacts} contactUpdate={mockContactUpdate} sortBydecreasing={mockSortBydecreasing} />
  )
  const sortImageId = screen.getByTestId('sort-img')
  fireEvent.click(sortImageId)
  expect(setDecreasingOrder).toBeTruthy()
})

