export type RaceCategory =
  | "5K"
  | "10K"
  | "Half marathon"
  | "Full marathon"
  | "Ultra"
  | "Training"
  | "Speed work";

export type WardrobeKit = {
  id: string;
  raceName: string;
  date: string;
  city: string;
  category: RaceCategory;
  finishTime?: string;
  pace?: string;
  weather: string;
  photoSrc: string;
  hero: { item: string; piece: string }; // headline gear
  gear: string[];
  miles: number;
  pr?: boolean;
  notes: string;
};

export const wardrobeKits: WardrobeKit[] = [
  {
    id: "berlin-2025",
    raceName: "Berlin Marathon",
    date: "Sep 28, 2025",
    city: "Berlin",
    category: "Full marathon",
    finishTime: "2:58:14",
    pace: "6:48 /mi",
    weather: "55°F · overcast",
    photoSrc: "/images/run-marathon.jpg",
    hero: { item: "Adidas Adios Pro 4", piece: "Shoes" },
    gear: ["Adidas Adios Pro 4", "Tracksmith Van Cortlandt", "Tracksmith Session 3\"", "Maurten Gel 100 caf ×4"],
    miles: 26.2,
    pr: true,
    notes: "PR’d by 2:14. The carb sandwich actually worked.",
  },
  {
    id: "nyc-half-2025",
    raceName: "United Airlines NYC Half",
    date: "Mar 16, 2025",
    city: "New York, NY",
    category: "Half marathon",
    finishTime: "1:32:47",
    pace: "7:05 /mi",
    weather: "42°F · windy",
    photoSrc: "/images/run-cold.jpg",
    hero: { item: "Saucony Endorphin Pro 4", piece: "Shoes" },
    gear: ["Saucony Endorphin Pro 4", "Bandit Strike Singlet", "Lululemon Surge Half-Tights", "Buff Coolnet"],
    miles: 13.1,
    notes: "Layered up at the start, ditched the half-zip at mile 3.",
  },
  {
    id: "oakland-10k",
    raceName: "Oakland Sunset 10K",
    date: "Jun 02, 2025",
    city: "Oakland, CA",
    category: "10K",
    finishTime: "39:42",
    pace: "6:23 /mi",
    weather: "68°F · clear",
    photoSrc: "/images/run-sunset.jpg",
    hero: { item: "Nike Vaporfly 3", piece: "Shoes" },
    gear: ["Nike Vaporfly 3", "Tracksmith Harrier Mesh", "Bandit Stride 5\"", "Coros Pace 3"],
    miles: 6.2,
    pr: true,
    notes: "Felt like flying. Kit was perfect for the warm-evening start.",
  },
  {
    id: "trail-50k",
    raceName: "Marin Headlands 50K",
    date: "Apr 12, 2025",
    city: "Sausalito, CA",
    category: "Ultra",
    finishTime: "5:18:22",
    pace: "10:14 /mi",
    weather: "48°F · drizzle",
    photoSrc: "/images/run-country.jpg",
    hero: { item: "Salomon S/Lab Pulsar", piece: "Shoes" },
    gear: ["Salomon S/Lab Pulsar", "Patagonia Cap Cool Trail", "Patagonia Strider Pro 5\"", "Salomon ADV Skin 5 vest", "Tailwind ×4 scoops"],
    miles: 31.0,
    notes: "Wet roots, full vest, no cramps. The trail kit gospel.",
  },
  {
    id: "training-tempo",
    raceName: "Tuesday tempo",
    date: "Aug 19, 2025",
    city: "Brooklyn, NY",
    category: "Training",
    pace: "6:42 /mi",
    weather: "78°F · humid",
    photoSrc: "/images/run-track.jpg",
    hero: { item: "Hoka Mach X", piece: "Shoes" },
    gear: ["Hoka Mach X", "Bandit 2.5\" Split", "Janji Bandana", "Garmin Forerunner 965"],
    miles: 8.0,
    notes: "Flat, fast, sweaty. Mach X holds tempo without feeling chunky.",
  },
  {
    id: "track-1mi-repeats",
    raceName: "Mile repeats",
    date: "Aug 22, 2025",
    city: "Brooklyn, NY",
    category: "Speed work",
    pace: "5:38 /mi",
    weather: "72°F · breeze",
    photoSrc: "/images/run-adidas.jpg",
    hero: { item: "Nike Streakfly 2", piece: "Shoes" },
    gear: ["Nike Streakfly 2", "Bandit Strike Singlet", "Bandit 2.5\" Split"],
    miles: 5.0,
    notes: "5×1mi at 5:40 average. Streakflys disappeared on my feet.",
  },
  {
    id: "first-5k",
    raceName: "Hometown 5K",
    date: "May 10, 2025",
    city: "Austin, TX",
    category: "5K",
    finishTime: "29:08",
    pace: "9:22 /mi",
    weather: "66°F · partly cloudy",
    photoSrc: "/images/run-tying.jpg",
    hero: { item: "Brooks Ghost 16", piece: "Shoes" },
    gear: ["Brooks Ghost 16", "Bandit Brooklyn Tee", "Old Navy Active 5\"", "Bombas Athletic"],
    miles: 3.1,
    pr: true,
    notes: "First time running without walk breaks. Felt unstoppable.",
  },
  {
    id: "long-run-saturday",
    raceName: "Long run · Saturday",
    date: "Sep 14, 2025",
    city: "Oakland, CA",
    category: "Training",
    pace: "7:48 /mi",
    weather: "60°F · clear",
    photoSrc: "/images/run-sunset.jpg",
    hero: { item: "Hoka Mach X", piece: "Shoes" },
    gear: ["Hoka Mach X", "Tracksmith Harrier Mesh", "Bandit Stride 5\"", "Maurten Gel 100 ×2"],
    miles: 14.2,
    notes: "Sunrise long run on the bay. 14 mi felt like 8.",
  },
];

export const raceFilters: { id: RaceCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "5K", label: "5K" },
  { id: "10K", label: "10K" },
  { id: "Half marathon", label: "Half marathon" },
  { id: "Full marathon", label: "Full marathon" },
  { id: "Ultra", label: "Ultra" },
  { id: "Training", label: "Training" },
  { id: "Speed work", label: "Speed work" },
];
