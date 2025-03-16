import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Anime } from "@/interfaces/anime_interface";

interface Props {
  anime: Anime;
  index: number;
}

export const CardAnime = ({ anime, index }: Props) => {
  return (
    <Link
      href={`/recomender/${anime.id}`}
      key={anime.id}
      className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={`https://picsum.photos/id/${index}/400/400`}
          //   src={`https://pic.re/image?random=${anime.id}`}
          alt={anime.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="font-bold">
            ★ {anime.rating}
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
