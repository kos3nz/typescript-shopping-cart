import * as React from "react";
import Card from "./Card";
import { IRobot } from "../containers/App";

interface IRobots {
  robots: IRobot[];
}

const CardList = ({ robots }: IRobots) => {
  // ({ robots }: { robots: IRobot[] })でも可
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
