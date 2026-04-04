export type Course = {
  id: string;
  title: string;
  description?: string;
  category: string;
  durationHours: number;
  originalPriceInr?: number;
  priceInr: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image?: string;
  promoBadge?: string;
  instructor?: string;
  rating?: number;
  ratingCount?: number;
};
