import React from 'react';
import Contact from '../model/contact';
import user from '../assets/user.svg';
import edit from '../assets/edit.svg';
import deleteImage from '../assets/delete.svg'

interface ContactInfoProps {
  contact: Contact;
  onContactUpdate: (id: number | any) => void;
  onContactDelete: (id: number | any) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = (props) => {
  const contact = props.contact;
  return (
    <>
    <div className="col-lg-6 col-md-6-12">
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-md-flex justify-content-between">
            <img src={user} width="100" height="100" className="me-4 " />
            <div>
              <h6>{contact.id}</h6>
              <h3 className="text-primary">{contact.first_name}{' '}{contact.last_name}</h3>
              <h5><b>Job: </b> {contact.job}</h5>
              <h5><b>Description: </b>{contact.description}</h5>
            </div>
          </div>
          <div className="d-flex gap-3">
            <a data-testid="update" className='border-none' onClick={() => props.onContactUpdate(contact.id)}><img  className="bg-info p-2" src={edit} width="40" height="40" /></a>
            <a data-testid="delete" onClick={() => props.onContactDelete(contact.id)}> <img className="bg-danger p-2" src={deleteImage} width="40" height="40" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>

  )
}

export default ContactInfo;