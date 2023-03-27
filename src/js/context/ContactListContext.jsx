//
import React from "react";
import { createContext, useState } from "react";

export const ContactListContext = createContext();

export const ContactListContextProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  const getContactList = async () => {
    try {
      const response = await fetch(
        "https://assets.breatheco.de/apis/fake/contact/agenda/daniel_m"
      );
      if (!response.ok) {
        console.error("Error");
        return false;
      }
      const data = await response.json();
      setContactList(data);
      return true;
    } catch (error) {
      console.error(error);
    }
  };

  const addNewContact = async (data) => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        `https://assets.breatheco.de/apis/fake/contact/`,
        opts
      );
      if (!response.ok) {
        console.error("Error");
        return false;
      }
      getContactList();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const deleteContact = async (contactId) => {
    const opts = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `https://assets.breatheco.de/apis/fake/contact/${contactId}`,
        opts
      );
      if (!response.ok) {
        console.error("Error");
        return false;
      }
      getContactList();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const updateContact = async (data, contactId) => {
    const opts = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        `https://assets.breatheco.de/apis/fake/contact/${contactId}`,
        opts
      );
      if (!response.ok) {
        console.error("Error");
        return false;
      }
      getContactList();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  return (
    <ContactListContext.Provider
      value={{
        contactList,
        getContactList,
        addNewContact,
        deleteContact,
        updateContact,
      }}
    >
      {children}
    </ContactListContext.Provider>
  );
};
