import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchHero = (id) => axios.get(`http://localhost:4000/superheroes/${id}`);

const DynamicParallel = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => ({
      queryKey: ["super-hero", id],
      queryFn: () => fetchHero(id),
    }))
  );

  console.log({ queryResults });

  return <div>DynamicParallel</div>;
};

export default DynamicParallel;
