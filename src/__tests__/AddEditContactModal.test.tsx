
// app.test.js
import { fireEvent, render } from '@testing-library/react'
import { vi } from 'vitest'
import { screen } from '@testing-library/react';
import { AddEditContactModal } from '../components/AddEditContactModal';

let mockContact = {
  id: 1,
  first_name: 'sachin',
  last_name: "tendulkar",
  job: '',
  description: ''
}

let onSubmit = vi.fn().mockImplementation(values => { })
let mockShow = true
let MockLoading = true
let mockSetShow = vi.fn()
let mockHandleAddContact = vi.fn().mockImplementation(contact => { })
let mockHandleUpdateContact = vi.fn().mockImplementation(id => { });
let mockIsEdit = true;
let mockHandleClose = vi.fn()


describe('AddEditContactModalPage' , () => {
  test('should be truthy', () => {
    let addEditContactModal = render(
      <AddEditContactModal contact={mockContact} loading={MockLoading} isEdit={mockIsEdit} show={mockShow} setShow={mockSetShow} handleAddContact={mockHandleAddContact} handleClose={mockHandleClose}
      onSubmit={onSubmit}
      handleUpdateContact={mockHandleUpdateContact}
      />
    )
    expect(addEditContactModal).toBeTruthy();
  
  
  })  


  test('to be called', () => {
    render(
      <AddEditContactModal contact={mockContact} loading={MockLoading} isEdit={false} show={mockShow} setShow={mockSetShow} handleAddContact={mockHandleAddContact} handleClose={mockHandleClose}
      onSubmit={onSubmit}
      handleUpdateContact={mockHandleUpdateContact}
      />
    )
    const submitBtn = screen.getByTestId('submitBtn')
    fireEvent.click(submitBtn)
    
    expect(submitBtn).toBeDefined()
  
  })  
})


