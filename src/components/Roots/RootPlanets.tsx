import { PlanetProps, State } from "components/types";
import React from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";
import { removeFromLocalStore, SaveDataToLocalStorage } from "utils/utils";

const StyledIconContainer = styled.div`
  margin-left: 3px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const RootPlanets = ({
  item: {
    name,
    diameter,
    orbital_period,
    population,
    rotation_period,
    surface_water,
    gravity,
    terrain,
    climate,
    films,
    residents,
    url,
  },
  isItemFavourite,
  setIsItemFavourite,
}: PlanetProps) => {
  const branchedRoot = useSelector(
    (state: State) =>
      (state &&
        state.roots &&
        state.roots.branchedRoot &&
        state.roots.branchedRoot) ||
      []
  );

  const result = () =>
    branchedRoot.map((item: { title: string }) => <p>{item.title}</p>);

  const residentsResult = () =>
    branchedRoot.map((item: { name: string; gender: string }) => (
      <div>
        <p>{`Resident Name: ${item.name}`}</p>
        <p>{`Gender: ${item.gender}`}</p>
        <hr />
      </div>
    ));

  return (
    <div>
      <StyledIconContainer
        onClick={() => {
          if (isItemFavourite) {
            removeFromLocalStore(url);
            setIsItemFavourite(false);
          } else {
            SaveDataToLocalStorage(url);
            setIsItemFavourite(true);
          }
        }}
      >
        {isItemFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </StyledIconContainer>
      <div>
        <p>{`Planet Name: ${name}`}</p>
        <p>{`Gravity: ${gravity}`}</p>
        <p>{`Diameter: ${diameter}`}</p>
        <p>{`Orbital Period: ${orbital_period}`}</p>
        <p>{`Population: ${population}`}</p>
        <p>{`Rotation Period: ${rotation_period}`}</p>
        <p>{`Surface Water: ${surface_water}`}</p>
        <p>{`Terrain: ${terrain}`}</p>
        <p>{`Climate: ${climate}`}</p>
      </div>

      {films.length !== 0 && (
        <Modal displayName="Films" item={films} result={result} />
      )}
      {residents.length !== 0 && (
        <Modal
          displayName="Residents"
          item={residents}
          result={residentsResult}
        />
      )}
    </div>
  );
};
