import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Contact from '../model/contact';
import ContactInfo from './ContactInfo';
import sort from '../assets/sort.svg'
import oppsort from '../assets/oppsort.svg'
import { sortIdByDecresingOrder, sortIdByIncreasingOrder } from '../utils/sort';

interface ContactsListProps {
  contacts: Contact[] | any;
  getContacts: () => void;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
  deleteContact: (id: number) => void;
  contactUpdate: (id: number) => void;
  sortBydecreasing: (sortedContact: Contact[]) => void;

};

const ContactsList: React.FC<ContactsListProps> = ({ contacts, deleteContact, contactUpdate, sortBydecreasing }) => {
  const [decreasingOrder, setDecreasingOrder] = useState(false)
  useEffect(() => {
    if (decreasingOrder) {
      const sortedContact = sortIdByDecresingOrder(contacts);
      return sortBydecreasing(sortedContact)
    }
    else {
      const sortedContact = sortIdByIncreasingOrder(contacts);
      return sortBydecreasing(sortedContact)
    }
  }, [decreasingOrder])

  return (
    <>
      <div className="mt-5 list_box row">
        <div className="my-5 d-flex align-items-center position-relative">
          <h1 className="text-center fw-bolder text-uppercase text-info">Contact List</h1>
          {contacts && contacts.length === 0 && <img src={decreasingOrder ? oppsort : sort} width="30" height="30" className="mr-2 position-absolute end-0" onClick={() => setDecreasingOrder(!decreasingOrder)} />}
        </div>
        {contacts &&
          contacts.map((contact: Contact) => (
            <ContactInfo
              key={contact.id}
              contact={contact}
              onContactUpdate={contactUpdate}
              onContactDelete={deleteContact}
            />
          ))}
        {contacts && contacts.length === 0 && <h5 className='text-center text-info'>No Contacts to display</h5>}
      </div>
    </>
  )
}

export default ContactsList