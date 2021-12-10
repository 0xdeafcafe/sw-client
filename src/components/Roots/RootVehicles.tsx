import { State, VehicleProps } from "components/types";
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

export const RootVehicles = ({
  item: {
    name,
    model,
    manufacturer,
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    length,
    max_atmosphering_speed,
    passengers,
    vehicle_class,
    films,
    pilots,
    url,
  },
  isItemFavourite,
  setIsItemFavourite,
}: VehicleProps) => {
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
        <p>{`Vehicle Name: ${name}`}</p>
        <p>{`Vehicle Model: ${model}`}</p>
        <p>{`Manufacturer: ${manufacturer}`}</p>
        <p>{`Cargo Capacity: ${cargo_capacity}`}</p>
        <p>{`Consumables: ${consumables}`}</p>
        <p>{`Cost in Credits: ${cost_in_credits}`}</p>
        <p>{`Crew Size: ${crew}`}</p>
        <p>{`Length: ${length}`}</p>
        <p>{`Maximum Atmospheric Speed: ${max_atmosphering_speed}`}</p>
        <p>{`Passengers: ${passengers}`}</p>
        <p>{`Vehicle Class: ${vehicle_class}`}</p>
      </div>

      {films.length !== 0 && (
        <Modal displayName="Films" item={films} result={result} />
      )}

      {pilots.length !== 0 && (
        <Modal displayName="Pilots" item={pilots} result={residentsResult} />
      )}
    </div>
  );
};
