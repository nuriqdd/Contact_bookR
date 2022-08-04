import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ContactContext, contextProvider } from "../context/ContextProvider";
import "./ContactDetails.css";

const ContactDetails = () => {
  const [getContactDetails, topicDetailsObj] = useContext(ContactContext);

  let { id } = useParams();
  useEffect(() => {
    getContactDetails(id);
  }, [id]);

  return (
    <>
      <>
        {
          <div className="containerTopicDetails">
            <div className="containerTopicDetailsLeft">
              <img id="imgCards" src={topicDetailsObj.image} alt="img" />
            </div>
            <div className="containerTopicDetailsRight">
              <div className="contImg"></div>
              <h3 className="topicDetailsH3">{topicDetailsObj.name}</h3>
              <p className="topicDetailsPT1">{topicDetailsObj.number}</p>
              <p className="topicDetailsPT">
                Подробная информация по ссылке ниже ↓
              </p>
              <a id="topicBtn" target="_blank" href={topicDetailsObj.mail}>
                Ссылка
              </a>
            </div>
          </div>
        }
        <div className="topicDetailsButtons">
          {/* <Link to={`/edit/${id}`}>
            <button className="btnCrud" id="edit">
              ✎
            </button>
          </Link>
          <Link to="/topicsList">
            <button
              className="btnCrud"
              id="del"
              onClick={() => deleteTopic(id)}
            >
              🗑
            </button>
          </Link> */}
        </div>
      </>
    </>
  );
};

export default ContactDetails;
