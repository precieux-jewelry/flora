export type RunType =
  | "marathon"
  | "race-day"
  | "long-run"
  | "beginner"
  | "womens"
  | "mens"
  | "trail"
  | "recovery";

export type Profile = {
  id: string;
  username: string;
  name: string;
  avatar_url?: string;
  location?: string;
  level?: "beginner" | "intermediate" | "advanced" | "elite";
  favorite_distance?: string;
  weekly_mileage?: number;
  total_miles?: number;
  races_completed?: number;
  favorite_shoe?: string;
};

export type ShoeReview = {
  id: string;
  user_id: string;
  shoe_name: string;
  brand: string;
  image_url?: string;
  distance_used?: number;
  comfort: number;
  speed: number;
  durability: number;
  stability: number;
  race_day_score: number;
  review: string;
  would_buy_again: boolean;
  created_at: string;
};

export type OutfitPost = {
  id: string;
  user_id: string;
  photo_url: string;
  caption?: string;
  shoes?: string;
  shorts?: string;
  top?: string;
  jacket?: string;
  socks?: string;
  accessories?: string;
  fuel?: string;
  weather?: string;
  run_type?: RunType;
  created_at: string;
};
