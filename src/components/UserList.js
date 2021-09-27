import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from './Card'

const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  
  console.log(data);
  return (
    <div style={{display:"flex",flexWrap:"wrap",background:"linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",width:"100%"}}>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <Card
              id={el.id}
              name={el.name}
              phone={el.phone}
              webSite={el.website}
              address={el.address.city}
              email={el.email}
              userName={el.username}
              company={el.company.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;