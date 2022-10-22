import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchHero = ({ queryKey }) =>
  axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`);

export const useHeroData = (heroId) => {
  const queryClient = useQueryClient();

  return useQuery(["super-hero", heroId], fetchHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
