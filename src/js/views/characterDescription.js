import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CharacterDecription() {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  

  useEffect(() => {
    async function getInfo() {
      let response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      let data = await response.json();
      console.log("here is your data", data)
      setInfo(data.result);
    }
    getInfo();
    console.log("here's your info", info)
  }, [id]);

  return (
    <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
        <div className="card" style={{ minWidth: "18rem" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${info.uid}.jpg`}
            className="img-fluid rounded"
          />
          <div className="card-body">
            <h5 className="card-title">{info.properties?.name}</h5>            
          </div>
        </div>
    </div>
  );
}
