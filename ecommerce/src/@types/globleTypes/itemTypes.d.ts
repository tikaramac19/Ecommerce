interface ratingType {
  rate: number;
  count: number;
}

export interface itemInterface {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  rating: ratingType;
}
