import React from "react";
import axios from "axios";
import { useReducer, createContext } from "react";

export const ContactContext = createContext();

const API = "http://localhost:8001/contacts";

const ContactList = {
  contacts: [],
  topicDetails: {},
};

const reducer = (prevState = ContactList, action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return { ...prevState, contacts: action.payload };
    case "GET_TOPIC_DETAILS":
      return { ...prevState, topicDetails: action.payload };
    default:
      return prevState;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, ContactList);

  const addContact = (topic) => {
    axios.post(API, topic);
  };
  const getContact = async () => {
    const { data } = await axios.get(API);
    let action = {
      type: "GET_CONTACT",
      payload: data,
    };
    dispatch(action);
  };
  const getContactDetails = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    let action = {
      type: "GET_CONTACT_DETAILS",
      payload: data,
    };
    dispatch(action);
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
  };

  let cloud = {
    addContact,
    getContact,
    deleteContact,
    getContactDetails,
    topicsArr: state.contacts,
    topicDetailsObj: state.topicDetails,
  };
  return (
    <ContactContext.Provider value={cloud}>{children}</ContactContext.Provider>
  );
};

export default ContextProvider;
