import "./App.scss";

import React, { useEffect, useState } from "react";
import TitleComponent from "./components/TitleComponent";
import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ContactItemComponent from "./components/ContactItemComponent";
import ContactDetails from "./components/ContactDetails";
import axios from "axios";

function App() {
  // const contacts = [ ];

  const [isShowDetails, setShowDetails] = useState(false);
  const [contact, setContact] = useState({});
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const showDetails = (contact) => {
    console.log(contact);
    setContact(contact);
    setShowDetails(true);
  };

  const getAllContacts = async ()=> {
    try {
      setIsLoading(true)
      const contactList = await axios.get('http://localhost:4000/contacts');
      setContacts(contactList.data)
    } catch (error) {
      
    }
    setIsLoading(false)
  }

  const editContact = (contact) => {
    setContacts((previous)=> [contact, ...previous])
  }

  const updateContact = async (contact) => {
    let index = contacts.filter(element => element.id == contact.id)

    if (index != -1) {
      const reports = [...contacts]
      reports[index] = contact;
      // setContacts(reports);
      setContact(contact);
      await getAllContacts()

    }
  }

  const deleteEmit = async () => {
    setShowDetails(false);
    await getAllContacts();
  }

  useEffect(()=> {
    getAllContacts()
  }, [])

  return (
    <div className="position-relative parent-h d-flex justify-content-center">
      <div className="global position-absolute">
        <div className="pane">
          <div className="pane-left">
            <div className="title-height">
              {/* TITLE COMPONENT */}
              <TitleComponent editContact = {editContact}/>

              {/* SEARCH ELEMENT */}

              <div className="d-flex justify-content-center my-4 ex">
                <TextField
                  className="search"
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              {/* CONTACT SIZE */}
              <div className="d-flex justify-content-end mx-4 total-contact mb-4">
                <span>
                  {contacts.length} Contact{contacts.length > 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* LIST OF CONTACTS */}
            <div className="body-heigh">
              {contacts.map((contact) => (
                <ContactItemComponent
                  showDetails={showDetails}
                  contact={contact}
                  key={contact.id}
                />
              ))}
            </div>
          </div>
          <div className="pane-right">
            {/* DEFAULT CONTENT */}
            {isShowDetails ? (
              <div>
                <ContactDetails editContact = {updateContact} contact = {contact} deleteEmit = {deleteEmit} />
              </div>
            ) : (
              <div className="default-content">
                <img
                  className="position-absolute end-0"
                  src={require("../src/assert/photo2.png")}
                  alt="Profile"
                />
                <div className="default-content-text">
                  <h1>Save your contacts safely with us</h1>
                  <button className="my-btn">Get started</button>
                </div>
              </div>
            )}

            {/* DETAILS CONTENT */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
