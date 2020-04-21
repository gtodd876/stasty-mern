export type Recipe = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  creatorId: string;
};

export type User = {
  id: string;
  imageUrl: string;
  name: string;
  recipeCount: number;
};

export interface RouteParams {
  userId: string;
  recipeId: string;
}
