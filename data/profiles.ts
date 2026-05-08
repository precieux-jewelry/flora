import { shoes } from "./shoes";

export type Badge = {
  id: string;
  label: string;
  emoji: string;
  desc: string;
};

export type RotationShoe = {
  id: string;
  brand: string;
  name: string;
  miles: number;
  rating: number;
  tone: string;
  status: "Active" | "Race only" | "Retired" | "Recovery";
};

export type ProfileFull = {
  username: string;
  name: string;
  bio: string;
  location: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Elite";
  favoriteDistance: string;
  weeklyMileage: number;
  totalMiles: number;
  racesCompleted: number;
  favoriteShoe: string;
  avatarTone: string;
  avatarId?: string;
  coverTone: string;
  coverId?: string;
  followers: number;
  following: number;
  pronouns?: string;
  rotation: RotationShoe[];
  outfitTones: { id: string; tone: string; h: string; caption: string }[];
  reviews: { shoeId: string; snippet: string }[];
  saved: { id: string; tone: string; label: string }[];
  badges: Badge[];
};

const badgeBank: Record<string, Badge> = {
  marathon: { id: "marathon", label: "Marathoner", emoji: "🏅", desc: "26.2 finished" },
  sub3: { id: "sub3", label: "Sub-3", emoji: "⚡", desc: "Sub-3 marathon" },
  ultra: { id: "ultra", label: "Ultra", emoji: "⛰️", desc: "50K+ finisher" },
  early: { id: "early", label: "Early Bird", emoji: "🌅", desc: "10 sunrise runs" },
  streak: { id: "streak", label: "30-day streak", emoji: "🔥", desc: "Daily for 30" },
  founder: { id: "founder", label: "Founder", emoji: "🌱", desc: "First 1,000 on Flora" },
  pacer: { id: "pacer", label: "Pacer", emoji: "🎯", desc: "Paced a friend to PR" },
  trail: { id: "trail", label: "Trail rat", emoji: "🌲", desc: "100 trail miles" },
  reviewer: { id: "reviewer", label: "Reviewer", emoji: "✍️", desc: "10+ shoe reviews" },
};

export const profiles: ProfileFull[] = [
  {
    username: "mayaruns",
    name: "Maya Reyes",
    bio: "Marathoner, sunrise runner, gel taste-tester. Coaching beginners on the side.",
    location: "Oakland, CA",
    level: "Advanced",
    favoriteDistance: "Marathon",
    weeklyMileage: 52,
    totalMiles: 2840,
    racesCompleted: 14,
    favoriteShoe: "Nike Vaporfly 3",
    avatarTone: "bg-amber-300",
    avatarId: "1494790108377-be9c29b29330",
    coverTone: "from-amber-200 via-orange-100 to-yellow-50",
    coverId: "1530143584546-02191bc84eb5",
    followers: 1284,
    following: 312,
    pronouns: "she/her",
    rotation: [
      { id: "vaporfly-3", brand: "Nike", name: "Vaporfly 3", miles: 312, rating: 4.8, tone: "from-amber-200 to-amber-50", status: "Race only" },
      { id: "mach-x", brand: "Hoka", name: "Mach X", miles: 480, rating: 4.6, tone: "from-stone-200 to-rose-50", status: "Active" },
      { id: "ghost-16", brand: "Brooks", name: "Ghost 16", miles: 610, rating: 4.4, tone: "from-stone-200 to-stone-50", status: "Active" },
      { id: "endorphin-pro-4", brand: "Saucony", name: "Endorphin Pro 4", miles: 96, rating: 4.6, tone: "from-amber-300 to-amber-50", status: "Race only" },
    ],
    outfitTones: [
      { id: "o1", tone: "from-amber-200 to-amber-50", h: "h-72", caption: "Sunrise long run kit" },
      { id: "o2", tone: "from-yellow-200 to-yellow-50", h: "h-56", caption: "Tempo Tuesday fit" },
      { id: "o3", tone: "from-orange-200 to-amber-50", h: "h-64", caption: "Race day · Oakland Half" },
      { id: "o4", tone: "from-stone-200 to-stone-50", h: "h-80", caption: "Cold-morning layers" },
    ],
    reviews: [
      { shoeId: "vaporfly-3", snippet: "Pop is unreal. Felt fresh through 20 of my last marathon." },
      { shoeId: "mach-x", snippet: "Feels like running on bread. Surprisingly snappy for a daily." },
    ],
    saved: [
      { id: "s1", tone: "from-yellow-200 to-amber-50", label: "Adidas Adios Pro 4" },
      { id: "s2", tone: "from-rose-100 to-stone-50", label: "Lululemon Tracker Short 5\"" },
      { id: "s3", tone: "from-emerald-200 to-stone-50", label: "Maurten Gel 100" },
    ],
    badges: [badgeBank.marathon, badgeBank.early, badgeBank.streak, badgeBank.reviewer, badgeBank.founder],
  },
  {
    username: "jordan.k",
    name: "Jordan Kim",
    bio: "Berlin → Boston → Tokyo. Sub-3 chasing Sub-2:50.",
    location: "Brooklyn, NY",
    level: "Elite",
    favoriteDistance: "Marathon",
    weeklyMileage: 78,
    totalMiles: 6120,
    racesCompleted: 32,
    favoriteShoe: "Adidas Adios Pro 4",
    avatarTone: "bg-stone-300",
    avatarId: "1500648767791-00dcc994a43e",
    coverTone: "from-yellow-200 via-amber-100 to-yellow-50",
    coverId: "1486739985386-d4fae04ca6f7",
    followers: 4820,
    following: 188,
    rotation: [
      { id: "adios-pro-4", brand: "Adidas", name: "Adios Pro 4", miles: 240, rating: 4.7, tone: "from-yellow-200 to-yellow-50", status: "Race only" },
      { id: "mach-x", brand: "Hoka", name: "Mach X", miles: 720, rating: 4.6, tone: "from-stone-200 to-rose-50", status: "Active" },
      { id: "streakfly-2", brand: "Nike", name: "Streakfly 2", miles: 130, rating: 4.3, tone: "from-neutral-200 to-stone-50", status: "Active" },
    ],
    outfitTones: [
      { id: "o1", tone: "from-yellow-200 to-amber-50", h: "h-80", caption: "Berlin race day" },
      { id: "o2", tone: "from-neutral-200 to-stone-50", h: "h-64", caption: "Track session set" },
      { id: "o3", tone: "from-amber-200 to-yellow-50", h: "h-56", caption: "Long run gel kit" },
    ],
    reviews: [
      { shoeId: "adios-pro-4", snippet: "Stable for a super shoe. Berlin PR wearer." },
    ],
    saved: [
      { id: "s1", tone: "from-amber-300 to-amber-50", label: "Saucony Endorphin Pro 4" },
      { id: "s2", tone: "from-stone-200 to-stone-50", label: "Tracksmith Van Cortlandt" },
    ],
    badges: [badgeBank.marathon, badgeBank.sub3, badgeBank.pacer, badgeBank.streak],
  },
  {
    username: "noorb",
    name: "Noor Bakri",
    bio: "First-year runner. C25K graduate. Working toward my first half.",
    location: "Austin, TX",
    level: "Beginner",
    favoriteDistance: "5K",
    weeklyMileage: 14,
    totalMiles: 220,
    racesCompleted: 2,
    favoriteShoe: "Brooks Ghost 16",
    avatarTone: "bg-amber-200",
    avatarId: "1517841905240-472988babdf9",
    coverTone: "from-stone-200 via-stone-100 to-amber-50",
    coverId: "1546484959-f9a381d1330d",
    followers: 88,
    following: 142,
    rotation: [
      { id: "ghost-16", brand: "Brooks", name: "Ghost 16", miles: 220, rating: 4.4, tone: "from-stone-200 to-stone-50", status: "Active" },
    ],
    outfitTones: [
      { id: "o1", tone: "from-stone-200 to-stone-50", h: "h-60", caption: "First 5K fit" },
      { id: "o2", tone: "from-amber-200 to-yellow-50", h: "h-72", caption: "Sunday easy run" },
    ],
    reviews: [
      { shoeId: "ghost-16", snippet: "The reliable friend. Took me from C25K to my first half." },
    ],
    saved: [
      { id: "s1", tone: "from-rose-100 to-stone-50", label: "Bandit Athletics Singlet" },
      { id: "s2", tone: "from-amber-200 to-yellow-50", label: "Hoka Mach X" },
    ],
    badges: [badgeBank.early, badgeBank.founder],
  },
];

export function getProfile(username: string) {
  return profiles.find((p) => p.username === username);
}

export function getReviewedShoe(id: string) {
  return shoes.find((s) => s.id === id);
}
