import React, { useRef } from "react";
import EmailEditor from "react-email-editor";

const EmailEditorComponent = ({ setMailContent }) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      setMailContent(data.html);
    });
  };

  return (
    <div className="full-height flex flex-col">
      {/* Export Button */}
      <div className="bg-gray-200 p-2">
        <button
          onClick={exportHtml}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Export HTML
        </button>
      </div>

      {/* Email Editor */}
      <div className="flex-grow">
        <EmailEditor
          ref={emailEditorRef}
          style={{ height: "100vh", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default EmailEditorComponent;
