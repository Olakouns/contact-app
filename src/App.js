import "./App.scss";

import React, { useState } from "react";
import TitleComponent from "./components/TitleComponent";
import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ContactItemComponent from "./components/ContactItemComponent";
import ContactDetails from "./components/ContactDetails";

function App() {
  const contacts = [
    {
      id: 1,
      firstname: "Lazare Razacki",
      lastanme: "KOUNASSO",
      tel: "+221 79 590 01 31",
      mobile: "+221 79 590 01 31",
      email : "kounassolazare@gmail.com",
      rate: [1, 1, 1],
      imgPath: "",
    },
    {
      id: 2,
      firstname: "Miraide Augusto",
      lastanme: "BASSAME",
      tel: "+221 79 590 01 31",
      mobile: "+221 79 590 01 31",
      email : "kounassolazare@gmail.com",
      rate: [1],
      imgPath: "",
    },
    {
      id: 3,
      firstname: "Miraide Augusto",
      lastanme: "BASSAME",
      tel: "+221 79 590 01 31",
      mobile: "+221 79 590 01 31",
      email : "kounassolazare@gmail.com",
      rate: [1, 1],
      imgPath: "",
    },
    {
      id: 4,
      firstname: "Miraide Augusto",
      lastanme: "BASSAME",
      tel: "+221 79 590 01 31",
      mobile: "+221 79 590 01 31",
      email : "kounassolazare@gmail.com",
      rate: [1, 1, 1],
      imgPath: "",
    },
    {
      id: 5,
      firstname: "Miraide Augusto",
      lastanme: "BASSAME",
      tel: "+221 79 590 01 31",
      mobile: "+221 79 590 01 31",
      email : "kounassolazare@gmail.com",
      rate: [1],
      imgPath: "",
    },
    {
      id: 6,
      firstname: "Miraide Augusto",
      lastanme: "BASSAME",
      tel: "+221 79 590 01 31",
      mobile: "+221 79 590 01 31",
      email : "kounassolazare@gmail.com",
      rate: [1, 1],
      imgPath: "",
    },
    {
      id: 7,
      firstname: "Miraide Augusto",
      lastanme: "BASSAME",
      tel: "+221 79 590 01 31",
      mobile: "+221 79 590 01 31",
      email : "kounassolazare@gmail.com",
      rate: [1],
      imgPath: "",
    },
    {
      id: 8,
      firstname: "Miraide Augusto",
      lastanme: "BASSAME",
      tel: "+221 79 590 01 31",
      mobile: "+221 79 590 01 31",
      email : "kounassolazare@gmail.com",
      rate: [1, 1],
      imgPath: "",
    },
  ];

  const [isShowDetails, setShowDetails] = useState(false);
  const [contact, setContact] = useState({});


  const showDetails = (contact) => {
    console.log(contact);
    setContact(contact);
    setShowDetails(true);
  };

  return (
    <div className="position-relative parent-h d-flex justify-content-center">
      <div className="global position-absolute">
        <div className="pane">
          <div className="pane-left">
            <div className="title-height">
              {/* TITLE COMPONENT */}
              <TitleComponent />

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
                <ContactDetails contact = {contact} />
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
