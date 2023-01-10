export interface itemInterface {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  images: string[] | null;
  stock?: number;
  price: number;
  rating: number;
  thumbnail: string;
  quantity: number;
}
