import axios from "axios";
import { useMutation, useQuery } from "react-query";

export const useHeroesData = (fetcher) => {
  return useQuery("super-heroes", fetcher);
};

const addHero = (heroData) => {
  return axios.post("http://localhost:4000/superheroes", heroData);
};

export const useAddHeroData = () => {
  return useMutation(addHero);
};
