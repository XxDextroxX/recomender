"use client";

import { useState } from "react";

import { CardAnime, CustomHerader, Footer } from "@/components/custom";
import { useGetAnimes } from "@/hooks/get_images";
import { LoadingSpinner } from "@/components/custom/loader/LoadingSpinner";

export default function Home() {
  const { getAnimes } = useGetAnimes();
  const [searchTerm, setSearchTerm] = useState("");

  if (getAnimes.isLoading) {
    return <LoadingSpinner />;
  }

  if (getAnimes.isError || !getAnimes.data) {
    return <p>No se encontraron animes. Por favor, inténtalo de nuevo.</p>;
  }

  const filteredAnime = getAnimes.data.data.filter((anime) =>
    anime.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col dark">
      {/* Header with search */}
      <CustomHerader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Main content */}
      <main className="flex-1 container mx-auto py-8 px-4">
        <h2 className="text-xl font-semibold mb-6">
          {searchTerm ? `Resultados para: ${searchTerm}` : "Animes Populares"}
        </h2>

        {/* Anime grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredAnime.map((anime, index) => (
            <CardAnime key={anime.id} anime={anime} index={index + 10} />
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No se encontraron resultados para &quot;{searchTerm}&quot;
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
