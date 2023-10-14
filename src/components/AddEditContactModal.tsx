import React, { Dispatch, SetStateAction, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import Contact from '../model/contact';

type AddContactModalProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  handleAddContact: (contact: Contact) => void;
  isEdit: boolean;
  contact: Contact | any;
  handleUpdateContact: (values: Contact) => void
  handleClose: () => void;
  loading: boolean
}


const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  job: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Required'),
});


export const AddEditContactModal = ({loading, handleClose, show, handleAddContact, isEdit, contact, handleUpdateContact }: AddContactModalProps) => {
  function onSubmit(values: Contact) {
    // same shape as initial values
    if (isEdit) {
      handleUpdateContact(values)
    }
    else {
      handleAddContact(values)
    }
  }

  return (
    <Modal show={show} >
      <Modal.Header>
        <Modal.Title>{isEdit ? 'Edit contact' : `Add a contact`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            first_name: isEdit ? contact.first_name : '',
            last_name: isEdit ? contact.last_name : '',
            job: isEdit ? contact.job : '',
            description: isEdit ? contact.description : ''
          }}
          validationSchema={!isEdit &&  validationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <div className='my-1'>
                <h6>Enter the First Name:</h6>
                <Field name="first_name" placeholder={isEdit ? (contact.first_name) : 'enter first name'} />
                {errors.first_name && touched.first_name && <div className='text-danger'>{errors.first_name}</div>}
              </div>
              <div className='my-1'>
                <h6>Enter the Last Name:</h6>
                <Field name="last_name" placeholder={isEdit ? (contact.last_name) : 'enter last name'} />
                {errors.last_name && touched.last_name && <div className='text-danger'>{errors.last_name}</div>}
              </div>
              <div className='my-1'>
                <h6>Job:</h6>
                <Field name="job" placeholder={isEdit ? (contact.job) : 'enter job'} />
                {errors.job && touched.job && <div className='text-danger'>{errors.job}</div>}
              </div>
              <div className='my-1'>
                <h6>Description:</h6>
                <Field name="description" placeholder={isEdit ? (contact.description) : 'enter description'} />
                {errors.description && touched.description && <div className='text-danger'>{errors.description}</div>}
              </div>
              <Modal.Footer>
                <Button variant="primary" type="submit" disabled={loading}>
                  {isEdit ? `Update` : 'Add'}
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>

            </Form>
          )}
        </Formik>
      </Modal.Body>

    </Modal>
  )
}

