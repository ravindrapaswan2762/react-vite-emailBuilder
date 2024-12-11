// src/components/Sendmails.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closePopup,
  updateSubject,
  updateEmails,
  updateMessage,
} from "../redux/popupSlice";

import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sendmails() {

  const { isOpen, subject, emails, message } = useSelector( (state) => state.popup );

  const dispatch = useDispatch();

  const handleSendEmails = () => {
    const emailList = emails.split(",").map((email) => email.trim());
    console.log("Sending emails to:", emailList);
    console.log("Subject:", subject);
    console.log("Message:", message);
    showToast();
    dispatch(closePopup());
  };

  if (!isOpen) return null;

  const showToast = () => {
    toast.success("Emails dispatched successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative extraStyle">
        {/* Close Button */}
        <button
          onClick={() => dispatch(closePopup())}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &#x2715;
        </button>

        {/* Header */}
        <div className="text-lg font-semibold mb-4 text-center border-b pb-2">
          Send Emails
        </div>

        {/* Subject Input */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input 
            id="subject"
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 extraStyle"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => dispatch(updateSubject(e.target.value))}
          />
        </div>

        {/* Emails Input */}
        <div className="mb-4">
          <label
            htmlFor="emails"
            className="block text-sm font-medium text-gray-700"
          >
            Emails (comma-separated)
          </label>
          <textarea
            id="emails"
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 extraStyle"
            placeholder="Enter emails, separated by commas"
            value={emails}
            onChange={(e) => dispatch(updateEmails(e.target.value))}
          ></textarea>
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 extraStyle"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => dispatch(updateMessage(e.target.value))}
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="text-center">
          <button
            onClick={handleSendEmails}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 extraStyle"
          >
            Send Emails
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sendmails;
