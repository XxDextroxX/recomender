"use client";
import { CardAnime } from "@/components/custom";
import { LoadingSpinner } from "@/components/custom/loader/LoadingSpinner";
import { useGetRecomenderAnimes } from "@/hooks/get_images";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const { id } = params;
  const { getRecomender } = useGetRecomenderAnimes(+id!);

  if (getRecomender.isLoading) {
    return <LoadingSpinner />;
  }

  if (getRecomender.isError || !getRecomender.data) {
    return <p>No se encontraron animes. Por favor, inténtalo de nuevo.</p>;
  }
  return (
    <div className="container mx-auto py-8 px-4 dark">
      <h1 className="text-2xl font-bold mb-6">
        Recomendaciones en base a {getRecomender.data.anime.name}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {getRecomender.data.recommendations.map((anime, index) => (
          <CardAnime key={anime.id} anime={anime} index={index + 10} />
        ))}
      </div>
    </div>
  );
}
