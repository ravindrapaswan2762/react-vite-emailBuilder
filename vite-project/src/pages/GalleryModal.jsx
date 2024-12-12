import React from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBSpinner,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import PreviewFiles from "./PreviewFiles";

const GalleryModal = ({
  isOpen,
  toggleModal,
  photoFiles,
  handleFileInputChange,
  handleFileUpload,
  rawFiles,
  loading,
}) => (
  <MDBModal staticBackdrop show={isOpen} tabIndex="-1">
    <MDBModalDialog size="lg">
      <MDBModalContent>
        <MDBModalHeader>
          <h5>Media Gallery</h5>
          <MDBBtn className="btn-close" color="none" onClick={toggleModal}></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
          <input type="file" multiple onChange={handleFileInputChange} />
          <PreviewFiles files={rawFiles} />
          <MDBRow>
            {photoFiles.map((file) => (
              <MDBCol lg="4" key={file.id}>
                <img src={file.url} alt="File" className="img-fluid" />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn disabled={loading} onClick={handleFileUpload}>
            {loading ? <MDBSpinner /> : "Upload"}
          </MDBBtn>
          <MDBBtn onClick={toggleModal}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
);

export default GalleryModal;
