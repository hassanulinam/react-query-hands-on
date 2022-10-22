import React from "react";
import { Link, useParams } from "react-router-dom";
import { useHeroData } from "../hooks/useHeroData";

const RQSuperHero = () => {
  const { heroId } = useParams();
  const { data, isLoading, isError, error, refetch } = useHeroData(heroId);

  if (isLoading) return <h2> Loading....</h2>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <button onClick={refetch}>Fetch Heroes</button>
      <button>
        <Link to="/rq-super-heroes">Go back</Link>
      </button>
      <h1>
        {data?.data.name} -{data?.data.alterEgo}
      </h1>
    </>
  );
};

export default RQSuperHero;
