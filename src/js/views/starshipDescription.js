import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function StarshipDescription() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function getInfo() {
      let response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
      let data = await response.json();
      setInfo(data.results);
    }
    getInfo();
  }, [id]);

  return (
    <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
      <div className="card" style={{ minWidth: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${info.uid}.jpg`}
          className="img-fluid rounded"
        />
        <div className="card-body">
          <h5 className="card-title">{info.results?.name}</h5>
        </div>
      </div>
    </div>
  );
}
