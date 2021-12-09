import { SpeciesProps, State } from "components/types";
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

export const RootSpecies = ({
  item: {
    name,
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    hair_colors,
    language,
    skin_colors,
    films,
    people,
    url,
  },
  isItemFavourite,
  setIsItemFavourite,
}: SpeciesProps) => {
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
        <p>{`Species Name: ${name}`}</p>
        <p>{`Average Height: ${average_height}`}</p>
        <p>{`Average Lifespan: ${average_lifespan}`}</p>
        <p>{`Classification: ${classification}`}</p>
        <p>{`Designation: ${designation}`}</p>
        <p>{`Eye Colours: ${eye_colors}`}</p>
        <p>{`Hair Colours: ${hair_colors}`}</p>
        <p>{`Language: ${language}`}</p>
        <p>{`Skin Colours: ${skin_colors}`}</p>
      </div>

      {films.length !== 0 && (
        <Modal displayName="Films" item={films} result={result} />
      )}
      {people.length !== 0 && (
        <Modal displayName="People" item={people} result={residentsResult} />
      )}
    </div>
  );
};
