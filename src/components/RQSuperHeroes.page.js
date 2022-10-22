import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddHeroData, useHeroesData } from "../hooks/useHeroesData";

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { isLoading, data, isError, error, isFetching, refetch } =
    useHeroesData(fetchSuperHeroes);
  console.log({
    isLoading,
    isFetching,
  });

  const { mutate: addHero } = useAddHeroData();
  const handleAddHeroClick = () => {
    const heroData = { name, alterEgo };
    addHero(heroData);
  };

  if (isLoading) return <h2> Loading....</h2>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>
              {hero.id} {hero.name}
            </Link>
          </div>
        );
      })}
      {/* {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>
      })} */}
    </>
  );
};
