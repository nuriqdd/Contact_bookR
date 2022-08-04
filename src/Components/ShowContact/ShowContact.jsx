import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ContactContext } from "../context/ContextProvider";
import "..//ShowContact/ShowContact.css";

const ShowContact = () => {
  const { topicsArr, getContact } = useContext(ContactContext);

  let { id } = useParams();

  useEffect(() => {
    getContact();
  }, []);
  console.log(topicsArr);

  return (
    <>
      <div className="container d-flex justify-content-evenly flex-wrap container-cards">
        {topicsArr.map((item) => (
          <div key={item.id}>
            <div
              className="card1 text-center m-4"
              style={{ width: "18rem", height: "350px" }}
            >
              <img
                src={item.image}
                height="200"
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <Link to={`/contactDetails/${item.id}`}>
                  <Button>Просмотреть</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="block-button">
          <Button onClick={prevPage}>Prev</Button>
          <Button onClick={nextPage}>Next</Button>
        </div> */}
      </div>
    </>
  );
};

export default ShowContact;
