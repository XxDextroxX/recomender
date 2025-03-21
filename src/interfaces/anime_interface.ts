export interface ApiResponse {
  data: Anime[];
}


export interface Anime {
    id: number;          // ID del anime
    name: string;        // Nombre del anime
    genre: string;     // Géneros del anime (como un arreglo de cadenas)
    type: string ;        // Tipo de anime (por ejemplo, "TV", "Movie")
    episodes: number;    // Número de episodios
    rating: number;      // Calificación del anime
    members: number;     // Número de miembros o seguidores
  }

export interface ResponseRecomendar{
  anime: Anime,
  recommendations: Anime[]
}


  export interface AnimeImage {
    id: number;
    url: string;
  }

export type AnimeInfo = Pick< Anime, "id" | "name" | "genre" | "rating" >

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sanitizeAnime(anime: any): Anime {
  return {
    ...anime,
    // Si `type` es NaN o no es string, usar "Desconocido"
    type: typeof anime.type === "string" ? anime.type : "Desconocido",
    // Asegurar que los valores numéricos no sean NaN
    episodes: Number.isNaN(anime.episodes) ? 0 : anime.episodes,
    rating: Number.isNaN(anime.rating) ? 0 : anime.rating,
    members: Number.isNaN(anime.members) ? 0 : anime.members,
  };
}