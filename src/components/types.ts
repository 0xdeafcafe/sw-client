export type DisplayProps = {
  currentRoot: string;
  item: FilmItemProps &
    PersonItemProps &
    PlanetItemProps &
    SpeciesItemProps &
    StarshipItemProps &
    VehicleItemProps;
};

export type FilmProps = {
  item: FilmItemProps;
  isItemFavourite: boolean;
  setIsItemFavourite: (boolean: boolean) => void;
};

export type FilmItemProps = {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
};

export type PersonProps = {
  item: PersonItemProps;
  isItemFavourite: boolean;
  setIsItemFavourite: (boolean: boolean) => void;
};

export type PersonItemProps = {
  created: string;
  edited: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
  mass: string;
};

export type PlanetProps = {
  item: PlanetItemProps;
  isItemFavourite: boolean;
  setIsItemFavourite: (boolean: boolean) => void;
};

export type PlanetItemProps = {
  name: string;
  diameter: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  gravity: string;
  terrain: string;
  climate: string;
  films: string[];
  residents: string[];
  url: string;
};

export type SpeciesProps = {
  item: SpeciesItemProps;
  isItemFavourite: boolean;
  setIsItemFavourite: (boolean: boolean) => void;
};

export type SpeciesItemProps = {
  name: string;
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  language: string;
  skin_colors: string;
  films: string[];
  people: string[];
  url: string;
};

export type StarhsipProps = {
  item: StarshipItemProps;
  isItemFavourite: boolean;
  setIsItemFavourite: (boolean: boolean) => void;
};

export type StarshipItemProps = {
  name: string;
  model: string;
  manufacturer: string;
  cargo_capacity: string;
  hyperdrive_rating: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  max_atmosphering_speed: string;
  passengers: string;
  starship_class: string;
  films: string[];
  pilots: string[];
  url: string;
};

export type VehicleProps = {
  item: VehicleItemProps;
  isItemFavourite: boolean;
  setIsItemFavourite: (boolean: boolean) => void;
};

export type VehicleItemProps = {
  name: string;
  model: string;
  manufacturer: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  max_atmosphering_speed: string;
  passengers: string;
  vehicle_class: string;
  films: string[];
  pilots: string[];
  url: string;
};

export type AccordionProps = {
  item: FilmItemProps &
    PersonItemProps &
    PlanetItemProps &
    SpeciesItemProps &
    StarshipItemProps &
    VehicleItemProps;
  currentRoot: string;
};

export type ModalProps = {
  displayName: String;
  result: () => React.ReactNode;
  item: string[];
};

export type State = {
  roots: {
    isLoading: boolean;
    isBranchedRootLoading: boolean;
    payload: object;
    error: string[];
    currentRoot: StateCurrentRoot;
    branchedRoot: FilmItemProps[] &
      PersonItemProps[] &
      PlanetItemProps[] &
      SpeciesItemProps[] &
      StarshipItemProps[] &
      VehicleItemProps[];
  };
};

type StateCurrentRoot = {
  count: number;
  next: string;
  previous: string | null;
  results: FilmItemProps[] &
    PersonItemProps[] &
    PlanetItemProps[] &
    SpeciesItemProps[] &
    StarshipItemProps[] &
    VehicleItemProps[];
  k: string;
};
