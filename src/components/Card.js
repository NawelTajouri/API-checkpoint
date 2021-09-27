import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({
  id,
  name,
  email,
  webSite,
  phone,
  address,
  userName,
  company,
}) => {
  return (
    <div className="cont">
      <div className="card">
        <div className="banner">
          
        </div>
          <Avatar
            style={{
              backgroundColor: "red",
              fontSize: "10",
              fontWeight: "bold",
              borderRadius: "150px",
              width: "60px",
              height: "60px",
              border: "3px solid white",
              marginTop:"-10px"
              
            }}
          >
            {id}
          </Avatar>
          <div className="row">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{company}</p>
          </div>

        <div className="card-body">
          <div>
          <ul>
            <li>
              Full Name : <span>{name}</span>
            </li>
            <li>
              User Name : <span>{userName}</span>
            </li>
            <li>
              city : <span>{address}</span>
            </li>
            <li>
              Phone : <span>{phone}</span>
            </li>
            <li>
              Email : <span>{email}</span>
            </li>
          </ul>
          </div>
          
        </div>
        <div className="bg-custom">
          <p>
            Visit : <span> {webSite}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
