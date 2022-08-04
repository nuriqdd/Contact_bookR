import React, { useContext, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./AddContact.css";
import { ContactContext, createContext } from "../context/ContextProvider";

const AddContact = () => {
  const { addContact } = useContext(ContactContext);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [mail, setMail] = useState("");

  function handleClick() {
    let newContact = {
      name,
      number,
      image,
      mail,
    };
    addContact(newContact);
    setName("");
    setNumber("");
    setImage("");
    setMail("");
  }
  return (
    <>
      <div className="containerAddTopic">
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">ФИО</InputGroup.Text>
          <FormControl
            value={name}
            placeholder="Ф И О"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Номер</InputGroup.Text>
          <FormControl
            value={number}
            placeholder="Добавьте номер телефона"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setNumber(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
          <FormControl
            value={image}
            placeholder="Вставьте ссылку на картинку"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setImage(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">email</InputGroup.Text>
          <FormControl
            value={mail}
            placeholder="напишите почту"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setMail(e.target.value)}
          />
        </InputGroup>
        <Button onClick={handleClick} className="addTopic-btn">
          Добавить
        </Button>
      </div>
    </>
  );
};

export default AddContact;
