import React from "react";
import CharacterCard from "../component/characterCards";
import PlanetCard from "../component/planetCards";

export const Home = () => (
  <div className="text-center mt-5">
    <CharacterCard />
    <PlanetCard />
  </div>
);
