
// app.test.js
import { render } from '@testing-library/react'
import { vi } from 'vitest'
import { AddEditContactModal } from '../components/AddEditContactModal';

let mockContact = {
  id: 1,
  first_name: 'chhatrapal',
  last_name: "jdlfjjd",
  job: '',
  description: ''
}

let mockShow = true
let MockLoading = true
let mockSetShow = vi.fn()
let mockHandleAddContact = vi.fn().mockImplementation(contact => { })
let mockHandleUpdateContact = vi.fn().mockImplementation(id => { });
let mockIsEdit = true;
let mockHandleClose = vi.fn()


describe('AddEditContactModalPage' , () => {
  test('landing on a bad page', () => {
    render(
      <AddEditContactModal contact={mockContact} loading={MockLoading} isEdit={mockIsEdit} show={mockShow} setShow={mockSetShow} handleAddContact={mockHandleAddContact} handleClose={mockHandleClose}
      handleUpdateContact={mockHandleUpdateContact}
      />
    )
    expect(true).toBeTruthy();
  
  
  })  
})


