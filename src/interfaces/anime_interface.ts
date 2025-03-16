export interface ApiResponse {
  data: Anime[];
}


export interface Anime {
    id: number;          // ID del anime
    name: string;        // Nombre del anime
    genre: string;     // Géneros del anime (como un arreglo de cadenas)
    type: string;        // Tipo de anime (por ejemplo, "TV", "Movie")
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