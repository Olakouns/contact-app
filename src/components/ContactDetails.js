import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import axios from "axios";

import React, { useEffect, useState } from "react";
import AlertDialog from "../utilities/AlertDialog";

function ContactDetails(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const open = Boolean(anchorEl);
  const [subRate, setSubRate] = useState([]);

  const resizeContent = () => {
    const tab = [];
    tab.forEach((element, index, array) => {
      array.push(index);
    });

    for (let index = 0; index < 3 - props.contact.rate.length; index++) {
      tab.push(index);
    }
    setSubRate([...tab]);
  };

  const onUpdate = (contactUpated) => {
    console.log("contactUpated");
    console.log(contactUpated)
    props.editContact(contactUpated)
  };

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onDeleteCompenent =  async () => {
    try {
        await  axios.delete(`http://localhost:4000/contacts/${props.contact.id}`)
        props.deleteEmit();
    } catch (error) {
    
    }
  }

  useEffect(() => {
    resizeContent();
  }, [props.contact]);

  return (
    <div>
      <div className="title-2">
        <div>
          <img
            className="img-title"
            src={require("../assert/photo.png")}
            alt="Profile"
          />
          <span className="mx-4 text-color">
            {props.contact.firstname} {props.contact.lastanme}
          </span>
        </div>
      </div>

      <div>
        <div className="d-flex flex-column align-items-center mt-5 w-100">
          <img
            className="img-title-2 mb-3"
            src={require("../assert/photo.png")}
            alt="Profile"
          />
          <h4>
            <span className="firstname">{props.contact.firstname}</span>{" "}
            <span className="text-green lastanme">
              {props.contact.lastanme}
            </span>
          </h4>

          <div>
            {props.contact.rate.map((element, index) => (
              <GradeIcon
                className="f-z-3"
                key={index}
                sx={{ color: "#872318" }}
              />
            ))}
            {subRate.map((element, index) => (
              <StarBorderIcon
                className="f-z-3"
                key={index}
                sx={{ color: "#872318" }}
              />
            ))}
          </div>

          <div className="mt-4">
            <button
              className="my-btn-2 my-btn-2-color-1 me-4"
              onClick={() => setOpenDialog(true)}
            >
              Edit
            </button>
            <button onClick={()=> onDeleteCompenent()} className="my-btn-2 my-btn-2-color-2 ms-4">Delete</button>
          </div>
        </div>

        <div className="mt-5 p-5">
          <div className="row">
            <div className="col-6">
              <div>
                <h4>
                  <span className="text-red d-label">Name</span> :{" "}
                  <span className="d-content">
                    {" "}
                    {props.contact.firstname} {props.contact.lastanme}
                  </span>
                </h4>
                <h4>
                  <span className="text-red d-label">E-mail :</span> :{" "}
                  <span className="d-content"> {props.contact.email}</span>
                </h4>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div>
                <h4>
                  <span className="text-red d-label">Tel 1</span> :{" "}
                  <span className="d-content"> {props.contact.tel} </span>
                </h4>
                <h4>
                  <span className="text-red d-label">Mobile :</span> :{" "}
                  <span className="d-content"> {props.contact.mobile}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AlertDialog
        defaultContact = {props.contact}
        editContact={onUpdate}
        name={"Update Contact"}
        open={openDialog}
        handleClose={handleCloseDialog}
      />
    </div>
  );
}

export default ContactDetails;
