import axios from "axios";
import { useQuery } from "react-query";

const fetchHero = ({ queryKey }) =>
  axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`);

export const useHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], fetchHero);
};
