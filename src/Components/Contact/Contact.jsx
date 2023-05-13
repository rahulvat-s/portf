import emailjs from "@emailjs/browser";
import { makeStyles } from "@mui/styles";
import React, { useContext, useRef, useState } from "react";
import isEmail from "validator/lib/isEmail";
import { ThemeContext } from "../../Context/theme";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const form = useRef();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const useStyles = makeStyles((t) => ({
    input: {
      border: `2px solid ${"#1D9BF0"}`,
      backgroundColor: `${themename.secondary}`,
      color: `${themename.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      boxShadow:
        "0px 4px 10px 0px #1D9BF0, 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `2px solid ${themename.primary}`,
      },
    },
    message: {
      border: `2px solid ${"#1D9BF0"}`,
      backgroundColor: `${themename.secondary}`,
      color: `${themename.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      boxShadow:
        "0px 4px 10px 0px #1D9BF0, 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `2px solid ${themename.primary}`,
      },
    },
    label: {
      backgroundColor: `${themename.secondary}`,
      color: `${themename.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    submitBtn: {
      backgroundColor: "#1D9BF0",
      color: themename === "light" ? "#ffffff" : "#252525",
      boxShadow: "0px 4px 8px 0px #1D9BF0, 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow:
          "0px 4px 8px 0px #1D9BF0, 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
      },
    },
  }));

  const classes = useStyles();

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const params = {
          from_name: name,
          reply_to: email,
          to_name: "Rahul Vats",
          message: message,
        };
        emailjs
          .send(
            "service_smudu54",
            "template_bzejl06",
            params,
            "RWPxHhvegNFsdWIvz",
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("success");
              setSuccess(true);
              setErrMsg("");
              setName("");
              setEmail("");
              setMessage("");
              setOpen(false);
            },
            (error) => {
              console.log(error.text);
            }
          );
      } else {
        setErrMsg("Please enter valid email");
        setOpen(true);
      }
    } else {
      setErrMsg("Please enter all the fields");
      setOpen(true);
    }
  };

  return (
    <>
      <ContactForm
        open={open}
        success={success}
        errMsg={errMsg}
        handleClose={handleClose}
        classes={classes}
        handleContactForm={handleContactForm}
        name={name}
        setName={setName}
        form={form}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
      />
    </>
  );
};
