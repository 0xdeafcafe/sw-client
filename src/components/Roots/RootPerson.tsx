import { PersonProps, State } from "components/types";
import React from "react";
import { useSelector } from "react-redux";
import { removeFromLocalStore, SaveDataToLocalStorage } from "utils/utils";
import Modal from "../Modal/Modal";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";

const StyledIconContainer = styled.div`
  margin-left: 3px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const RootPerson = ({
  item: {
    created,
    edited,
    birth_year,
    eye_color,
    films,
    mass,
    gender,
    hair_color,
    height,
    homeworld,
    name,
    skin_color,
    species,
    starships,
    url,
    vehicles,
  },
  isItemFavourite,
  setIsItemFavourite,
}: PersonProps) => {
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

  const shipResult = () =>
    branchedRoot.map(
      (item: { name: string; model: string; manufacturer: string }) => (
        <div>
          <p>{`Name: ${item.name}`}</p>
          <p>{`Model: ${item.model}`}</p>
          <p> {`Manufacturer: ${item.manufacturer}`}</p>
          <hr />
        </div>
      )
    );

  const speciesResult = () =>
    branchedRoot.map(
      (item: { name: string; classification: string; designation: string }) => (
        <div>
          <p>{`Species Name: ${item.name}`}</p>
          <p>{`Classification: ${item.classification}`}</p>
          <p> {`Designation: ${item.designation}`}</p>
          <hr />
        </div>
      )
    );

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
        <p>{`Name: ${name}`}</p>
        <p>{`Year of Birth: ${birth_year}`}</p>
        <p>{`Eye Colour: ${eye_color}`}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`Hair Colour: ${hair_color}`}</p>
        <p>{`Height: ${height}`}</p>
        <p>{`Eye Colour: ${eye_color}`}</p>
        <p>{`Mass: ${mass}`}</p>
        <p>{`Skin Colour: ${skin_color}`}</p>
      </div>

      {films.length !== 0 && (
        <Modal displayName="Films" item={films} result={result} />
      )}
      {starships.length !== 0 && (
        <Modal displayName="Starships" item={starships} result={shipResult} />
      )}
      {species.length !== 0 && (
        <Modal displayName="Species" item={species} result={speciesResult} />
      )}
    </div>
  );
};
