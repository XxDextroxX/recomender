import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Anime } from "@/interfaces/anime_interface";
import { useEffect, useState } from "react";
import { fetchRandomImage } from "@/app/api/api";
import { LoadingSpinner } from "../loader/LoadingSpinner";

interface Props {
  anime: Anime;
  index: number;
}

export const CardAnime = ({ anime }: Props) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const src = await fetchRandomImage("wildlife"); // Cambia la categoría según desees
        setImageSrc(src);
      } catch (error) {
        console.error("Error al cargar la imagen:", error);
      }
    };

    loadImage();
  }, []);

  return (
    <Link
      href={`/recomender/${anime.id}`}
      key={anime.id}
      className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={anime.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <LoadingSpinner />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="font-bold">
            ★ {anime.rating.toFixed(2)}
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg line-clamp-1 mb-1 text-white">
          {anime.name}
        </h3>
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>{anime.episodes} eps</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {anime.genre.split(",").map((genre, index) => (
            <Badge key={index} variant="secondary">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};
