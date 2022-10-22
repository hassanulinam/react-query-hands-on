import { useQuery } from "react-query";

export const useHeroesData = (fetcher) => {
  return useQuery("super-heroes", fetcher);
};
