import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

// Tipado para la estructura de los datos que se recibirán
interface AnimeImage {
  id: number;
  url: string;
  rating: string;
  color_dominant: number[];
  color_palette: number[][];
  artist_name: string | null;
  tags: string[];
  source_url: string | null;
}

// Handler con tipado para Next.js API Routes
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const response = await axios.get<AnimeImage[]>("https://api.nekosapi.com/v4/images/random");
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}

