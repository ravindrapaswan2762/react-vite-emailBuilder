import { useState } from 'react'
import './App.css'
import { Navbar } from './pages/Navbar'
import Sendmails from './pages/Sendmails'
import { ToastContainer, toast } from "react-toastify";

import GalleryModal from "./pages/GalleryModal";
import EmailEditor from "./pages/EmailEditor";
import SendMailModal from "./pages/SendMailModal";


function App() {

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [mailContent, setMailContent] = useState("");

  return (
    <>
      <Navbar />
      <Sendmails />
      

      <EmailEditor setMailContent={setMailContent} />

      
      {/* <GalleryModal isOpen={isGalleryOpen} toggleModal={() => setIsGalleryOpen(!isGalleryOpen)} /> */}
      {/* <SendMailModal isOpen={true} mailContent={mailContent} /> */}



      <ToastContainer />
    </>
  )
}

export default App
