export type ShoeReviewItem = {
  id: string;
  brand: string;
  name: string;
  colorway: string;
  image: { tone: string; mark: string };
  category: "Race Day" | "Daily Trainer" | "Tempo" | "Long Run" | "Trail" | "Recovery";
  distanceUsed: number;
  ratings: {
    comfort: number;
    speed: number;
    durability: number;
    stability: number;
    raceDay: number;
  };
  overall: number;
  reviews: number;
  reviewer: { name: string; username: string; tone: string };
  review: string;
  wouldBuyAgain: boolean;
  price: number;
};

export const shoes: ShoeReviewItem[] = [
  {
    id: "vaporfly-3",
    brand: "Nike",
    name: "Vaporfly 3",
    colorway: "Volt / Black",
    image: { tone: "from-amber-200 via-yellow-100 to-amber-50", mark: "NIKE" },
    category: "Race Day",
    distanceUsed: 312,
    ratings: { comfort: 4.6, speed: 4.9, durability: 3.8, stability: 4.0, raceDay: 4.9 },
    overall: 4.8,
    reviews: 1284,
    reviewer: { name: "Maya Reyes", username: "mayaruns", tone: "bg-amber-300" },
    review:
      "Pop is unreal. Felt fresh through 20 of my last marathon. Outsole wears fast on rough roads, but on race day there is nothing close.",
    wouldBuyAgain: true,
    price: 260,
  },
  {
    id: "adios-pro-4",
    brand: "Adidas",
    name: "Adios Pro 4",
    colorway: "Cream / Gold",
    image: { tone: "from-yellow-200 via-amber-100 to-yellow-50", mark: "ADIDAS" },
    category: "Race Day",
    distanceUsed: 240,
    ratings: { comfort: 4.5, speed: 4.8, durability: 4.2, stability: 4.3, raceDay: 4.8 },
    overall: 4.7,
    reviews: 1102,
    reviewer: { name: "Jordan Kim", username: "jordan.k", tone: "bg-stone-300" },
    review:
      "Stable for a super shoe. Berlin PR wearer. Lightstrike Pro is doing a lot of work — never felt mushy through 26.2.",
    wouldBuyAgain: true,
    price: 250,
  },
  {
    id: "mach-x",
    brand: "Hoka",
    name: "Mach X",
    colorway: "Sand / Coral",
    image: { tone: "from-stone-200 via-rose-100 to-stone-50", mark: "HOKA" },
    category: "Tempo",
    distanceUsed: 180,
    ratings: { comfort: 4.7, speed: 4.4, durability: 4.3, stability: 4.5, raceDay: 4.0 },
    overall: 4.6,
    reviews: 932,
    reviewer: { name: "Sasha Patel", username: "sashap", tone: "bg-rose-200" },
    review:
      "Feels like running on bread. Surprisingly snappy for a daily — does workout days happily, easy days happier.",
    wouldBuyAgain: true,
    price: 180,
  },
  {
    id: "metaspeed-sky",
    brand: "Asics",
    name: "Metaspeed Sky",
    colorway: "White / Sun",
    image: { tone: "from-neutral-200 via-yellow-100 to-neutral-50", mark: "ASICS" },
    category: "Race Day",
    distanceUsed: 154,
    ratings: { comfort: 4.3, speed: 4.7, durability: 4.0, stability: 3.8, raceDay: 4.7 },
    overall: 4.5,
    reviews: 778,
    reviewer: { name: "Aria Lopez", username: "aria.l", tone: "bg-yellow-200" },
    review:
      "Built for striders. Cadence runners should look at the Edge instead. Loved it for the half — not sure about the full.",
    wouldBuyAgain: true,
    price: 250,
  },
  {
    id: "ghost-16",
    brand: "Brooks",
    name: "Ghost 16",
    colorway: "Stone / White",
    image: { tone: "from-stone-200 via-stone-100 to-stone-50", mark: "BROOKS" },
    category: "Daily Trainer",
    distanceUsed: 410,
    ratings: { comfort: 4.7, speed: 3.6, durability: 4.6, stability: 4.5, raceDay: 3.0 },
    overall: 4.4,
    reviews: 2210,
    reviewer: { name: "Noor Bakri", username: "noorb", tone: "bg-amber-200" },
    review:
      "The reliable friend. Not flashy, just consistent. Took me from C25K to my first half — no blisters, no drama.",
    wouldBuyAgain: true,
    price: 140,
  },
  {
    id: "slab-pulsar",
    brand: "Salomon",
    name: "S/Lab Pulsar",
    colorway: "Black / Lime",
    image: { tone: "from-emerald-200 via-stone-100 to-stone-50", mark: "SALOMON" },
    category: "Trail",
    distanceUsed: 220,
    ratings: { comfort: 4.2, speed: 4.5, durability: 4.0, stability: 4.4, raceDay: 4.4 },
    overall: 4.4,
    reviews: 540,
    reviewer: { name: "Theo Marin", username: "theo.runs", tone: "bg-emerald-200" },
    review:
      "Grippy. Light. The Mountain Goat shoe. Wet roots, rock slabs — never slipped. Cushion is thin for ultras.",
    wouldBuyAgain: true,
    price: 200,
  },
  {
    id: "endorphin-pro-4",
    brand: "Saucony",
    name: "Endorphin Pro 4",
    colorway: "Gold / White",
    image: { tone: "from-amber-300 via-yellow-100 to-amber-50", mark: "SAUCONY" },
    category: "Race Day",
    distanceUsed: 96,
    ratings: { comfort: 4.5, speed: 4.7, durability: 4.0, stability: 4.1, raceDay: 4.7 },
    overall: 4.6,
    reviews: 612,
    reviewer: { name: "Lin Zhao", username: "linruns", tone: "bg-flora-300" },
    review:
      "Feels lower-stack than the Pro 3 and that's a good thing. Locked in. PWRRUN HG bounce is real.",
    wouldBuyAgain: true,
    price: 225,
  },
  {
    id: "streakfly-2",
    brand: "Nike",
    name: "Streakfly 2",
    colorway: "Black / White",
    image: { tone: "from-neutral-300 via-neutral-100 to-stone-50", mark: "NIKE" },
    category: "Tempo",
    distanceUsed: 130,
    ratings: { comfort: 4.0, speed: 4.8, durability: 3.9, stability: 3.6, raceDay: 4.5 },
    overall: 4.3,
    reviews: 320,
    reviewer: { name: "Owen Hart", username: "owen.h", tone: "bg-stone-400" },
    review:
      "Criminally underrated for repeats. 5×1mi at 5:40 and they disappeared on my feet. Not the shoe for marathons — for intervals, gold.",
    wouldBuyAgain: true,
    price: 170,
  },
];

export function getShoe(id: string) {
  return shoes.find((s) => s.id === id);
}
