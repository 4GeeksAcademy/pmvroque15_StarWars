import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function StarshipCard() {
  const [starships, setstarships] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getstarships() {
      let reponse = await fetch("https://www.swapi.tech/api/starships");
      let data = await reponse.json();
      setstarships(data.results);
    }
    getstarships();
  }, []);

  const handleFavorites = (e, name) => {
    e.preventDefault();
    if (store.favs.includes(name)) {
      actions.removeFavs(name);
    } else {
      actions.addFavs(name);
    }
  };

  return (
    <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
      {starships?.map((starship, index) => (
        <div key={index} className="card" style={{ minWidth: "18rem" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
            className="img-fluid rounded"
          />
          <div className="card-body">
            <h5 className="card-title">{starship.name}</h5>
            {/* <p className="card-text">{starship.affiliation}</p> */}
            <Link
              to={`/starship/${starship.uid}`}
              href="#"
              className="btn btn-primary"
            >
              Learn More
            </Link>
            <span onClick={(e) => handleFavorites(e, starship.name)}>❤️</span>
          </div>
        </div>
      ))}
    </div>
  );
}
