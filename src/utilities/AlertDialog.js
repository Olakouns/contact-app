import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box, CircularProgress, MenuItem, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";

import * as Yup from "yup";
import { useState } from "react";

export default function AlertDialog(props) {
  const [isSubmit, setSubmit] = useState(false);

  const rates = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '1-1',
      label: '2',
    },
    {
      value: '1-1-1',
      label: '3',
    }
  ];

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    rate: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .min(12, "Too Short!")
      .max(14, "Too Long!")
      .required("Required"),
    mobileNumber: Yup.string()
      .min(12, "Too Short!")
      .max(14, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      mobileNumber: "",
      email: "",
      rate: "",
    },
    onSubmit: (values, { resetForm }) => {
      setSubmit(true);
      console.log(values);

      let newContact = {
        id: 6,
        firstname: values.firstName,
        lastanme: values.lastName,
        tel: values.phoneNumber,
        mobile: values.mobileNumber,
        email: values.email,
        rate: values.rate.split('-'),
        imgPath: "",
      };
      props.editContact(newContact)
      setSubmit(false);
      resetForm({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        mobileNumber: "",
        email: "",
        rate: "",
      });
      props.handleClose();
    },
  });

  return (
    <div>
      <Dialog open={props.open} onClose={() => props.handleClose()}>
        <DialogContent>
          <DialogContentText className="w-100">
            <div className="my-modal">
              <div className="my-modal-title">
                <span> {props.name}</span>

                <button
                  onClick={() => props.handleClose()}
                  className="close-btn"
                >
                  <CloseIcon sx={{ color: "rgba(15, 98, 91, 1)" }} />
                </button>
              </div>
              <div className="my-modal-body">
                <TextField
                  className="w-100 mb-2"
                  id="outlined-basic"
                  label="Lastname"
                  variant="outlined"
                  value={formik.values.firstName}
                  onChange={(event) =>
                    formik.setFieldValue("firstName", event.target.value)
                  }
                />
                {formik.errors.firstName && (
                  <span className="text-danger">{formik.errors.firstName}</span>
                )}
                <TextField
                  className="w-100 mt-4 mb-2"
                  id="outlined-basic"
                  label="Firstname"
                  variant="outlined"
                  value={formik.values.lastName}
                  onChange={(event) =>
                    formik.setFieldValue("lastName", event.target.value)
                  }
                />
                {formik.errors.lastName && (
                  <span className="text-danger">{formik.errors.lastName}</span>
                )}

                <TextField
                  className="w-100 mt-4 mb-2"
                  type="tel"
                  id="outlined-basic"
                  label="Phone number"
                  variant="outlined"
                  value={formik.values.phoneNumber}
                  onChange={(event) =>
                    formik.setFieldValue("phoneNumber", event.target.value)
                  }
                />
                {formik.errors.phoneNumber && (
                  <span className="text-danger">
                    {formik.errors.phoneNumber}
                  </span>
                )}

                <TextField
                  className="w-100 mt-4 mb-2"
                  type="tel"
                  id="outlined-basic"
                  label="Mobile number"
                  variant="outlined"
                  value={formik.values.mobileNumber}
                  onChange={(event) =>
                    formik.setFieldValue("mobileNumber", event.target.value)
                  }
                />
                {formik.errors.mobileNumber && (
                  <span className="text-danger">
                    {formik.errors.mobileNumber}
                  </span>
                )}

                <TextField
                  className="w-100 mt-4 mb-2"
                  type="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={(event) =>
                    formik.setFieldValue("email", event.target.value)
                  }
                />

                {formik.errors.email && (
                  <span className="text-danger">{formik.errors.email}</span>
                )}

                <TextField
                  className="w-100 mt-4 mb-2"
                  id="outlined-select-currency"
                  select
                  label="Rate"
                  value={formik.values.rate}
                  onChange={(event) =>
                    formik.setFieldValue("rate", event.target.value)
                  }
                >
                  {rates.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                {formik.errors.rate && (
                  <span className="text-danger">{formik.errors.rate}</span>
                )}

                <div className="d-flex justify-content-center">
                  {/* TODO DISABLE BTN */}

                  {!isSubmit ? (
                    <button
                      className={"my-btn"}
                      disabled={!formik.isValid}
                      onClick={formik.handleSubmit}
                    >
                      Add new contact
                    </button>
                  ) : (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress size={30} />
                    </Box>
                  )}
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
