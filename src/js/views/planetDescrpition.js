import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PlanetDecription() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function getInfo() {
      let response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      let data = await response.json();
      setInfo(data.result);
    }
    getInfo();
  }, [id]);

  return (

<div className="d-flex justify-content-center">
    <div className="card mb-5" style={{ "max-width": "540px;" }}>
  <div className="row g-0">
    <div className="col-md-4">
    <img
          src={`https://starwars-visualguide.com/assets/img/planets/${info.uid}.jpg`}
          className="img-fluid rounded"
        />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 classNameN="card-title">{info.properties?.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

  );
}
