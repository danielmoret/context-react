import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContactListContext } from "../context/ContactListContext.jsx";

export const NewContact = () => {
  const context = useContext(ContactListContext);
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    agenda_slug: "daniel_m",
    address: "",
    phone: "",
  });

  const fillContact = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const addNewCotact = (event) => {
    event.preventDefault();
    const response = context.addNewContact(contact);
    if (response) {
      navigate("/");
    } else {
      alert("No se pudo añadir el contacto");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Add a new Contact</h1>
        <form onSubmit={addNewCotact}>
          <div className="mb-3">
            <label htmlFor="exampleInputname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              className="form-control"
              id="exampleInputname"
              aria-describedby="emailHelp"
              required
              value={contact.full_name}
              onChange={(event) => {
                fillContact(event);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              value={contact.email}
              onChange={(event) => {
                fillContact(event);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              id="exampleInputPhone"
              required
              aria-describedby="emailHelp"
              value={contact.phone}
              onChange={(event) => {
                fillContact(event);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputaddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="exampleInputaddress"
              required
              value={contact.address}
              onChange={(event) => {
                fillContact(event);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <Link to="/">or get back to contacts</Link>
      </div>
    </>
  );
};
