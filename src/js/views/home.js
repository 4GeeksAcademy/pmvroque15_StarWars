import React from "react";
import CharacterCard from "../component/characterCards";
import PlanetCard from "../component/planetCards";
import starshipCard from "../component/starshipCard"
import StarshipCard from "../component/starshipCard";

export const Home = () => (
  <div className="text-center mt-5">
    <CharacterCard />
    <PlanetCard />
    <StarshipCard />
  </div>
);
