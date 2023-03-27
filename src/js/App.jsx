import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditContact } from "./pages/EditContact.jsx";

import Home from "./pages/home.jsx";
import { NewContact } from "./pages/NewContact.jsx";
import { ContactListContextProvider } from "./context/ContactListContext.jsx";

function App() {
  return (
    <ContactListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newcontact" element={<NewContact />} />
          <Route path="/editcontact/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </ContactListContextProvider>
  );
}

export default App;
