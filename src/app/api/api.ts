import {  AnimeImage, ApiResponse, ResponseRecomendar, sanitizeAnime } from "@/interfaces/anime_interface";
import axios from "axios";


/******  f40f4853-b084-4f9a-a140-a7049d44ad1a  *******/
export async function fetchAnimeImages(): Promise<string[]> {
  try {
    const response = await axios.get<AnimeImage[]>("https://api.nekosapi.com/v4/images/random");
    // Extraer solo las URLs de las imágenes
    const imageUrls = response.data.map((image) => image.url);
    console.log('imageUrls', imageUrls)
    return imageUrls;
  } catch (error) {
    console.error("Error fetching anime images:", error);
    return [];
  }
}
export async function fetAnimes(): Promise<ApiResponse> {
  try {
    const response = await axios.get<ApiResponse>("https://api.rs-examen.gonalu.com",{
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        limit: 50
      },
    });
    console.log('response', response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching anime images:", error);
    return { data: [] };
  }
}
export async function findRecomanderAnime(id: number): Promise<ResponseRecomendar> {
  try {
    const response = await axios.get<ResponseRecomendar>(
      `https://api.rs-examen.gonalu.com/recommend/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );

    // Sanitizar los datos de la respuesta
    const sanitizedData: ResponseRecomendar = {
      anime: sanitizeAnime(response.data.anime),
      recommendations: response.data.recommendations.map(sanitizeAnime),
    };

    console.log('response', sanitizedData);
    return sanitizedData;
  } catch (error) {
    console.error("Error fetching anime images:", error);
    throw new Error('Error fetching anime images');
  }
}

export const fetchRandomImage = async (category: string): Promise<string> => {
  const response = await fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
    headers: {
      'X-Api-Key': 'cJeUgnf0U28Mne1McBL3WA==XEMsBVpTRAk7KZA5',
      'Accept': 'image/jpg',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener la imagen');
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob); // Convierte el blob en una URL
};


