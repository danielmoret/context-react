//include images into your bundle
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContactListContext } from "../context/ContactListContext.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
import { NewContact } from "./NewContact.jsx";
import { Card } from "../component/Card.jsx";

//create your first component
const Home = () => {
  const context = useContext(ContactListContext);

  useEffect(() => {
    context.getContactList();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact list</h1>
      <div className="text-end p-2">
        <Link to="/newcontact" className="btn btn-warning">
          Add a new contact
        </Link>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          {context.contactList.length > 0 ? (
            context.contactList.map((contact) => (
              <Card contact={contact} key={contact.id} />
            ))
          ) : (
            <h2>No contacts</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
