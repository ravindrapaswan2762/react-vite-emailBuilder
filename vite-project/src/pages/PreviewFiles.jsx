import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const PreviewFiles = ({ files }) => {
  if (!files || files.length === 0) return null;

  return (
    <MDBRow className="mt-3">
      {files.map((file, index) => (
        <MDBCol lg="2" sm="6" key={index} className="mt-2">
          <img
            src={file.url}
            alt="Preview"
            className="img-fluid hover-shadow"
            style={{ width: "100%", height: 100, objectFit: "cover", borderRadius: 5 }}
          />
        </MDBCol>
      ))}
    </MDBRow>
  );
};

export default PreviewFiles;
