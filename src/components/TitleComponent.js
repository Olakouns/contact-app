import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AlertDialog from "../utilities/AlertDialog";

function TitleComponent(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addContact = (event) => {
    handleClose();
    setOpenDialog(true);
  }

  const handleCloseDialog = () =>{
    setOpenDialog(false);
    console.log("ICI")
  }

  const addNewContact = (newContact) =>{
    // TODO EMIT NEW CONTACT TO PARENT
  }

  return (
    <div className="title">
      <div>
        <img className="img-title" src={require("../assert/photo.png")} alt = "Profile" />
        <span className="mx-4 text-color">My Contacts</span>
      </div>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={addContact}>Ajouter</MenuItem>
          <MenuItem>Parametre</MenuItem>
        </Menu>

        <AlertDialog editContact = {addNewContact} name = {'Add Contact'} open = {openDialog}  handleClose = {handleCloseDialog}/>
      </div>
    </div>
  );
}

export default TitleComponent;
