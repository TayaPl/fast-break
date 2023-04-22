export interface IRestaurant {
  _id: string;
  heading: string;
  images: string[];
  location: string;
  rating: [[string, number]]; //user-rating
  ratingAvg: number;
  like: string[]; //users
}
