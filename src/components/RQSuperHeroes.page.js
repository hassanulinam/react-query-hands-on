import axios from "axios";
import { Link } from "react-router-dom";
import { useHeroesData } from "../hooks/useHeroesData";

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } =
    useHeroesData(fetchSuperHeroes);
  console.log({
    isLoading,
    isFetching,
  });

  if (isLoading) return <h2> Loading....</h2>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
