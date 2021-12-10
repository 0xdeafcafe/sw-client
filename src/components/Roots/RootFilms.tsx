import { FilmProps, State } from "components/types";
import React from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { removeFromLocalStore, SaveDataToLocalStorage } from "utils/utils";

const StyledIconContainer = styled.div`
  margin-left: 3px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const RootFilms = ({
  item: {
    characters,
    episode_id,
    opening_crawl,
    planets,
    producer,
    director,
    release_date,
    species,
    starships,
    title,
    vehicles,
    url,
  },
  isItemFavourite,
  setIsItemFavourite,
}: FilmProps) => {
  const branchedRoot = useSelector(
    (state: State) =>
      (state &&
        state.roots &&
        state.roots.branchedRoot &&
        state.roots.branchedRoot) ||
      []
  );

  const characterResult = () =>
    branchedRoot.map((item: { name: string }) => {
      return (
        <div>
          <p>{`Character Name: ${item.name}`}</p>
          <hr />
        </div>
      );
    });

  const planetResult = () =>
    branchedRoot.map((item: { name: string }) => (
      <div>
        <p>{`Planet Name: ${item.name}`}</p>
        <hr />
      </div>
    ));

  const speciesResult = () =>
    branchedRoot.map((item: { name: string }) => (
      <div>
        <p>{`Species Name: ${item.name}`}</p>
        <hr />
      </div>
    ));

  const starshipResult = () =>
    branchedRoot.map((item: { name: string }) => (
      <div>
        <p>{`Starship Name: ${item.name}`}</p>
        <hr />
      </div>
    ));

  const vehicleResult = () =>
    branchedRoot.map((item: { name: string }) => (
      <div>
        <p>{`Vehicle Name: ${item.name}`}</p>
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
        <p>{`Film Name: ${title}`}</p>
        <p>{`Film episode: ${episode_id}`}</p>
        <p>{`Opening Crawl: ${opening_crawl}`}</p>
        <p>{`Producer: ${producer}`}</p>
        <p>{`Director: ${director}`}</p>
        <p>{`Release Date: ${release_date}`}</p>
      </div>

      <div>
        {characters.length !== 0 && (
          <Modal
            displayName="Characters"
            item={characters}
            result={characterResult}
          />
        )}

        {planets.length !== 0 && (
          <Modal displayName="Planets" item={planets} result={planetResult} />
        )}

        {species.length !== 0 && (
          <Modal displayName="Species" item={species} result={speciesResult} />
        )}

        {starships.length !== 0 && (
          <Modal
            displayName="Starships"
            item={starships}
            result={starshipResult}
          />
        )}

        {vehicles.length !== 0 && (
          <Modal
            displayName="Vehicles"
            item={vehicles}
            result={vehicleResult}
          />
        )}
      </div>
    </div>
  );
};
