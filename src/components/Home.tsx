import classnames from "classnames";
import sentenceCase from "sentence-case";
import styled from "styled-components";
import { fetchIndividualRoot, fetchRoots } from "../actions/actions";
import { Nav, NavItem, NavLink, TabContent, TabPane, Button } from "reactstrap";
import CircularProgress from "@mui/material/CircularProgress";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemAccordion } from "./Accordion/Accordion";
import { FilmItemProps, PersonItemProps, PlanetItemProps, SpeciesItemProps, StarshipItemProps, VehicleItemProps } from "./types";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Home = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState<string | undefined>(void 0);

  const roots = useSelector((state: any) => state.roots);
  const isLoading = useSelector((state: any) => state.roots.isLoading);
  const currentRoot = useSelector(
    (state: any) =>
      (state &&
        state.roots &&
        state.roots.currentRoot &&
        state.roots.currentRoot.k) ||
      []
  );

  const currentRootResults = useSelector(
    (state: any) =>
      (state &&
        state.roots &&
        state.roots.currentRoot &&
        state.roots.currentRoot) ||
      []
  );

  useEffect(() => {
    dispatch(fetchRoots());
  }, [dispatch]);

  const keys = Object.keys(roots.payload || {});

  const handleTabClick = (k: string) => {
    dispatch(fetchIndividualRoot(k));
  };
  return (
    <div>
      <h1>{"My little Star Wars app 👾"}</h1>

      {roots.payload && (
        <div className={"mt-3"}>
          <Nav tabs>
            {keys.map((k) => (
              <NavItem key={k}>
                <NavLink
                  className={classnames({ active: tab === k })}
                  onClick={() => {
                    setTab(k);
                    handleTabClick(k);
                  }}
                >
                  {sentenceCase(k)}
                </NavLink>
              </NavItem>
            ))}
          </Nav>

          {isLoading ? (
            <SpinnerContainer>
              <CircularProgress />
            </SpinnerContainer>
          ) : (
            <>
              <TabContent activeTab={tab}>
                {keys.map((k) => (
                  <TabPane key={k} tabId={k}>
                    {currentRootResults && currentRootResults.results && currentRootResults.results.map((item: FilmItemProps & PersonItemProps & PlanetItemProps & SpeciesItemProps & StarshipItemProps & VehicleItemProps) => (
                      <ItemAccordion currentRoot={currentRoot} item={item} />
                    ))}
                  </TabPane>
                ))}
                <StyledButtonContainer>
                  {currentRootResults.previous &&<Button onClick={() => dispatch(fetchIndividualRoot(currentRootResults.previous))} >Previous</Button>}
                  {currentRootResults.next &&<Button onClick={() => dispatch(fetchIndividualRoot(currentRootResults.next))}>Next</Button>}
                </StyledButtonContainer>
              </TabContent>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
