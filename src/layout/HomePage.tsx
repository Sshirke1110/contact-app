import { startTransition, useEffect, useState } from "react";
import ContactsList from "../components/ContactsList";
import { getAllContacts } from "../api/Api_instance";
import axios from "axios";
import { AddEditContactModal } from '../components/AddEditContactModal'
import Contact from "../model/contact";
import '../css/HomePage.css'

const BASE_URL = 'http://localhost:3000/api/contacts/'

const HomePage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false)
  const [contact, setContact] = useState({})
  const [id, setId] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false);

  const LoadContacts = () => {
    startTransition(() => {
      setTimeout(() => {
        getContacts()
        setShow(false)
      }, 500);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false)
    }, 3000);
  }, [showMessage])


  const contactUpdate = (id: number) => {
    setIsEdit(true)
    setId(id)
    axios.get(`${BASE_URL}${id}`)
      .then(res => setContact(res.data.data))
      .catch(err => console.log(err))
    startTransition(() => {
      setShow(true);

    })
  };

  const getContacts = async () => {
    let accessingallContacts = await getAllContacts()
    let contacts = accessingallContacts.data.data
    setContacts(contacts)
  };

  const deleteContact = (id: number) => {
    axios.delete(`${BASE_URL}${id}`)
      .then(() => {
        LoadContacts()
      })
      .catch(err => console.log(err));
  };

  const handleUpdateContact = async (values: Contact) => {
    setLoading(true)
    await axios.patch(`${BASE_URL}${id}`, { "info": values })
      .then(() => {
        LoadContacts()
        setShowMessage(true)
        handleClose()
      }
      )
      .catch(err => console.log(err));

  }

  const handleAddContact = (contact: Contact) => {
    setLoading(true)
    axios.post(BASE_URL, { contact })
      .then(() => {
        LoadContacts()

        setShowMessage(true)
        handleClose()
      }
      )
      .catch(err => console.log(err));
  }

  const sortBydecreasing = (sortedContact: Contact[]) => {
    setContacts(sortedContact)
  };

  const handleClose = () => {
    setShow(false)
    setIsEdit(false)
    setContact({})
    setId(0)
    setLoading(false)
  };

  useEffect(() => {
    getContacts()
  }, []);

  return (
    <>
      {showMessage && (
        <div className="success-message">Success! Your operation was completed.</div>

      )}
      <div className="container">
        <div className=" py-4 d-flex align-items-center justify-content-between">
          <h2 className="fw-bold text-primary">Contact List</h2>
          <button type="button" className="btn btn-primary" onClick={() => setShow(true)}>Add contact</button>
        </div>
        <ContactsList sortBydecreasing={sortBydecreasing} contacts={contacts} deleteContact={deleteContact} setContacts={setContacts} getContacts={getContacts} contactUpdate={contactUpdate} />
        <AddEditContactModal loading={loading} show={show} setShow={setShow} isEdit={isEdit} handleAddContact={handleAddContact} handleClose={handleClose} contact={contact} handleUpdateContact={handleUpdateContact} />
      </div>
    </>
  )
}

export default HomePage;