import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useHeroesData = (fetcher) => {
  return useQuery("super-heroes", fetcher);
};

const addHero = (heroData) => {
  return axios.post("http://localhost:4000/superheroes", heroData);
};

export const useAddHeroData = () => {
  const queryClient = useQueryClient();

  return useMutation(addHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes");
      queryClient.setQueriesData("super-heroes", (oldQueryData) => ({
        ...oldQueryData,
        data: [...oldQueryData.data, data.data],
      }));
    },
  });
};
