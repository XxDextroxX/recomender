import {  AnimeImage, ApiResponse, ResponseRecomendar } from "@/interfaces/anime_interface";
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
        limit: 200
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
    const response = await axios.get<ResponseRecomendar>(`https://api.rs-examen.gonalu.com/recommend/${id} `,{
      headers: {
        "Content-Type": "application/json",
      },
     
    });
    console.log('response', response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching anime images:", error);
     throw new Error('Error fetching anime images');
  }
}

