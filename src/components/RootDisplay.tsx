import React, {useState, useEffect} from "react";
import { RootPerson } from "./Roots/RootPerson";
import { RootPlanets } from "./Roots/RootPlanets";
import { RootSpecies } from "./Roots/RootSpecies";
import { RootStarships } from "./Roots/RootStarships";
import { RootVehicles } from "./Roots/RootVehicles";
import { RootFilms } from "./Roots/RootFilms";
import { DisplayProps } from "./types";

export const RootDisplay = ({ item, item: {url}, currentRoot }: DisplayProps) => {
  const [isItemFavourite, setIsItemFavourite] = useState(false)

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("session") || '[]')

    if(localStorageItems.includes(url)) {
      setIsItemFavourite(true)
    }
  })

  return(
  <>
    {currentRoot === "people" && <RootPerson setIsItemFavourite={setIsItemFavourite} isItemFavourite={isItemFavourite} item={item} />}
    {currentRoot === "planets" && <RootPlanets setIsItemFavourite={setIsItemFavourite} isItemFavourite={isItemFavourite} item={item} />}
    {currentRoot === "films" && <RootFilms setIsItemFavourite={setIsItemFavourite} isItemFavourite={isItemFavourite} item={item} />}
    {currentRoot === "species" && <RootSpecies setIsItemFavourite={setIsItemFavourite} isItemFavourite={isItemFavourite} item={item} />}
    {currentRoot === "vehicles" && <RootVehicles setIsItemFavourite={setIsItemFavourite} isItemFavourite={isItemFavourite}item={item} />}
    {currentRoot === "starships" && <RootStarships setIsItemFavourite={setIsItemFavourite} isItemFavourite={isItemFavourite} item={item} />}
  </>
);
}