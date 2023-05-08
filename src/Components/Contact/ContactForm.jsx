import { IconButton, Snackbar, SnackbarContent } from "@mui/material";
import { IoClose } from "react-icons/io5";
import React, { useContext, useRef, useState } from "react";
import contactsImage from "../../assets/contactsImage.svg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { AiOutlineCheckCircle, AiOutlineSend } from "react-icons/ai";
import "./ContactForm.css";
import { ThemeContext } from "../../Context/theme";

export const ContactForm = ({
  open,
  success,
  errMsg,
  handleClose,
  classes,
  handleContactForm,
  name,
  setName,
  form,
  email,
  setEmail,
  message,
  setMessage,
}) => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className="section_contact" data-aos="fade-right">
        <h2 className="section__title">
          <span className="different">Contact me :)</span>
        </h2>
        <div className="maincontainer">
          <div className="formcontainer">
            <form ref={form} onSubmit={handleContactForm}>
              <div className="input-container">
                <label htmlFor="Name" id="label" className={classes.label}>
                  Name
                </label>
                <input
                  placeholder="Rahul vats"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="user_name"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email" id="label" className={classes.label}>
                  Email
                </label>
                <input
                  placeholder="rahulvats166@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="user_email"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message" id="label" className={classes.label}>
                  Message
                </label>
                <textarea
                  placeholder="Type your message...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="message"
                  className={`form-message ${classes.message}`}
                />
              </div>

              <div className="submit-btn">
                <button type="submit" className={classes.submitBtn}>
                  <p>{!success ? "Send" : "Sent"}</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        animation: !success
                          ? "initial"
                          : "fly 0.8s linear both",
                        position: success ? "absolute" : "initial",
                        display: !success ? "inline-flex" : "none"
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className="logocontainer">
            <div className="icon-container">
              <FaEnvelope />
              <h4 className="h4color">rahulvats166@gmail.com</h4>
            </div>
            <div className="icon-container">
              <FaPhone />
              <h4 className="h4color">+91 7988420419</h4>
            </div>
            <div className="icon-container">
              <FaMapMarkerAlt />
              <h4 className="h4color">Bahadurgarh, Haryana</h4>
            </div>
            <div class="logos">
              <a
                href="https://instagram.com/_rahul__vats_"
                aria-label="instagram"
                target="_blank"
                rel="noreferrer"
                
              >
                <InstagramIcon />
              </a>
              <a
                href="https://github.com/"
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                
              >
                <GitHubIcon />
              </a>
              <a
                href="mailto:rahulvats166@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="mail"
                
              >
                <EmailIcon />
              </a>
              <a
                href="tel:+917988420419"
                target="_blank"
                rel="noreferrer"
                aria-label="phone"
                
              >
                <PhoneIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-vats-05993521b/"
                aria-label="linkedin"
                
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="animationcontainer">
            <img src={contactsImage} alt="Images" className="pop-up-image" />
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <SnackbarContent
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <IoClose fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
          style={{
            backgroundColor: "#1D9BF0",
            color: "#ffffff",
            boxShadow: "0px 4px 8px 0px #1D9BF0, 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          message={errMsg}
        />
      </Snackbar>
     
    </>
  );
};
