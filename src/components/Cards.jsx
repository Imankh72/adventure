import { useEffect, useState } from "react";
import { data } from "../data/adventures";
import CardItem from "./CardItem";

const Cards = () => {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    setAdventures(data);
  }, []);

  return (
    <div>
      <h1>Check out these EPIC destinations!</h1>
      <div>
        {adventures.length > 0 &&
          adventures.map((adventure) => (
            <ul key={adventure.id}>
              <CardItem adventure={adventure} />
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Cards;
