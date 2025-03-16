import { fetAnimes, findRecomanderAnime } from "@/app/api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetAnimes = () => {
  const getAnimes = useQuery({
    queryKey: ["animes"],
    queryFn: fetAnimes,
  });
  return {
    getAnimes,
  };
};
export const useGetRecomenderAnimes = (id: number) => {
  const getRecomender = useQuery({
    queryKey: ["animes-recomender", id],
    queryFn: () => findRecomanderAnime(id),
  });
  return {
    getRecomender,
  };
};
