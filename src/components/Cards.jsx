import { useEffect, useState } from "react";
import { data } from "../data/adventures";
import CardItem from "./CardItem";

const Cards = () => {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    setAdventures(data);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold my-12 md:text-5xl">
        Check out these EPIC destinations!
      </h1>
      <div>
        <ul className="flex flex-col items-center justify-center  gap-8 sm:flex-row sm:flex-wrap">
          {adventures.length > 0 &&
            adventures.map((adventure) => (
              <CardItem key={adventure.id} adventure={adventure} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
