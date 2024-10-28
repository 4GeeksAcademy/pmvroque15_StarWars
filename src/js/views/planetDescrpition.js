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
          <div className="col-md-3">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${info.uid}.jpg`}
              className="object-fit-contain  rounded"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="planetName card-title">{info.properties?.name}</h1>
              <p className="card-text">
                Diameter: 
              {info.properties?.diameter}
              </p>
              <p className=" card-text">
                Rotation Period:
              {info.properties?.rotation_period}
              </p>
              <p className=" card-text">
                Population:
              {info.properties?.population}
              </p>
              <p className=" card-text">
                Climate:
              {info.properties?.climate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
