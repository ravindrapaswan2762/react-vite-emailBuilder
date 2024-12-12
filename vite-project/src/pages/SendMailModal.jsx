import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBSpinner,
} from "mdb-react-ui-kit";

import { useDispatch } from "react-redux";
import { closePopup } from "@/redux/popupSlice";
import { toast } from "react-toastify";

const validateEmails = (emails) => {
  const emailList = emails.split(",");
  return emailList.every((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()));
};

const SendMailModal = ({ isOpen, mailContent }) => {
  const [subject, setSubject] = useState("");
  const [emails, setEmails] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!subject.trim() || subject.length < 5) {
      toast.error("Please provide a valid subject.");
      return;
    }
    if (!emails.trim() || !validateEmails(emails)) {
      toast.error("Please provide valid email addresses.");
      return;
    }
    if (!mailContent) {
      toast.error("Mail content is empty!");
      return;
    }
    setLoading(true);
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Emails sent successfully!");
      dispatch(closePopup());
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <MDBModal staticBackdrop show={isOpen} tabIndex="-1">
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Send Mail</MDBModalTitle>
            <MDBBtn className="btn-close" color="none" onClick={() => dispatch(closePopup())}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <div className="mb-3">
              <label>Subject</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <label>Recipients (comma-separated)</label>
              <textarea
                className="form-control"
                placeholder="Enter email addresses"
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
              />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            {loading && <MDBSpinner />}
            <MDBBtn color="primary" onClick={handleSubmit} disabled={loading}>
              Send
            </MDBBtn>
            <MDBBtn color="secondary" onClick={() => dispatch(closePopup())}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default SendMailModal;
