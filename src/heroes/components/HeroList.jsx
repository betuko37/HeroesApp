import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import PropTypes from "prop-types";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 animate__animated animate__backInDown">
      {heroes.map((hero) => (
        <div key={hero.id}>
          <HeroCard {...hero} />
        </div>
      ))}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string,
};
