import type { RunType } from "@/types";

export type OutfitDetail = {
  id: string;
  caption: string;
  user: { name: string; username: string; tone: string; avatarId?: string };
  photoTone: string;
  photoSrc?: string;
  h: string;
  runType: RunType;
  weather: string;
  gear: {
    shoes: string;
    shorts?: string;
    top: string;
    jacket?: string;
    socks?: string;
    accessories?: string;
    fuel?: string;
  };
  likes: number;
  saves: number;
};

export const outfits: OutfitDetail[] = [
  {
    id: "sunrise-long",
    caption: "Sunrise long run — golden hour, mesh tank, cap on backwards.",
    user: { name: "Maya Reyes", username: "mayaruns", tone: "bg-amber-300", avatarId: "1494790108377-be9c29b29330" },
    photoTone: "from-amber-200 via-orange-100 to-yellow-50",
    photoSrc: "/images/run-sunset.jpg",
    h: "h-80",
    runType: "long-run",
    weather: "62°F · clear",
    gear: {
      shoes: "Nike Vaporfly 3",
      shorts: "Bandit Stride 5\"",
      top: "Tracksmith Harrier Mesh",
      socks: "Balega Hidden Comfort",
      accessories: "Goodr Carl's Inferno",
      fuel: "Maurten Gel 100 ×2",
    },
    likes: 248,
    saves: 88,
  },
  {
    id: "berlin-race-day",
    caption: "Berlin race day fit. Singlet I've raced three years now. 🟢",
    user: { name: "Jordan Kim", username: "jordan.k", tone: "bg-stone-300", avatarId: "1500648767791-00dcc994a43e" },
    photoTone: "from-yellow-200 via-amber-100 to-yellow-50",
    photoSrc: "/images/run-marathon.jpg",
    h: "h-72",
    runType: "race-day",
    weather: "55°F · overcast",
    gear: {
      shoes: "Adidas Adios Pro 4",
      shorts: "Tracksmith Session 3\"",
      top: "Tracksmith Van Cortlandt",
      socks: "Feetures Elite Light",
      accessories: "Coros Pace 3",
      fuel: "Maurten Gel 100 caf ×4",
    },
    likes: 1280,
    saves: 412,
  },
  {
    id: "cold-morning",
    caption: "Cold morning layers — windbreaker over tank, half-tights.",
    user: { name: "Sasha Patel", username: "sashap", tone: "bg-rose-200", avatarId: "1438761681033-6461ffad8d80" },
    photoTone: "from-stone-200 via-rose-100 to-stone-50",
    photoSrc: "/images/run-cold.jpg",
    h: "h-96",
    runType: "long-run",
    weather: "38°F · windy",
    gear: {
      shoes: "Hoka Mach X",
      shorts: "Lululemon Fast & Free 7\"",
      top: "Lululemon Energy Bra",
      jacket: "Nike Windrunner",
      socks: "Stance Athletic",
      accessories: "Buff Coolnet",
    },
    likes: 522,
    saves: 198,
  },
  {
    id: "trail-dolomites",
    caption: "Dolomites trail kit — vest, gaiters, all the gels.",
    user: { name: "Theo Marin", username: "theo.runs", tone: "bg-emerald-200", avatarId: "1507003211169-0a1dd7228f2d" },
    photoTone: "from-emerald-200 via-stone-100 to-stone-50",
    photoSrc: "/images/run-country.jpg",
    h: "h-80",
    runType: "trail",
    weather: "48°F · drizzle",
    gear: {
      shoes: "Salomon S/Lab Pulsar",
      shorts: "Patagonia Strider Pro 5\"",
      top: "Patagonia Cap Cool Trail",
      jacket: "Salomon Bonatti",
      socks: "Smartwool Run Targeted",
      accessories: "Salomon ADV Skin 5 vest",
      fuel: "SIS Beta Fuel ×3",
    },
    likes: 318,
    saves: 142,
  },
  {
    id: "track-set",
    caption: "Track session — singlet, split shorts, and the spikes.",
    user: { name: "Owen Hart", username: "owen.h", tone: "bg-stone-400", avatarId: "1531746020798-e6953c6e8e04" },
    photoTone: "from-neutral-300 via-neutral-100 to-stone-50",
    photoSrc: "/images/run-track.jpg",
    h: "h-64",
    runType: "mens",
    weather: "70°F · sunny",
    gear: {
      shoes: "Nike Streakfly 2",
      shorts: "Bandit 2.5\" Split",
      top: "Bandit Strike Singlet",
      socks: "Balega No Show",
      accessories: "Garmin Forerunner 965",
    },
    likes: 276,
    saves: 64,
  },
  {
    id: "summer-skirt",
    caption: "Hot day tempo — mesh tank + run skirt + visor.",
    user: { name: "Aria Lopez", username: "aria.l", tone: "bg-yellow-200", avatarId: "1573496359142-b8d87734a5a2" },
    photoTone: "from-orange-200 via-amber-100 to-yellow-50",
    photoSrc: "/images/run-adidas.jpg",
    h: "h-72",
    runType: "womens",
    weather: "84°F · humid",
    gear: {
      shoes: "Asics Metaspeed Sky",
      shorts: "Lululemon Pace Rival Skirt",
      top: "Bandit Geo Mesh Tank",
      socks: "Feetures Elite",
      accessories: "Ciele GoCap, Maurten flask",
      fuel: "LMNT Citrus + Gel 100",
    },
    likes: 612,
    saves: 220,
  },
  {
    id: "first-5k",
    caption: "First 5K kit — comfy tee + Ghosts. Felt unstoppable.",
    user: { name: "Noor Bakri", username: "noorb", tone: "bg-amber-200", avatarId: "1517841905240-472988babdf9" },
    photoTone: "from-stone-200 via-stone-100 to-amber-50",
    photoSrc: "/images/run-tying.jpg",
    h: "h-60",
    runType: "beginner",
    weather: "68°F · cloudy",
    gear: {
      shoes: "Brooks Ghost 16",
      shorts: "Old Navy Active 5\"",
      top: "Bandit Brooklyn Tee",
      socks: "Bombas Athletic",
    },
    likes: 433,
    saves: 96,
  },
  {
    id: "marathon-block",
    caption: "20-miler kit — double caffeine gel sandwich tested.",
    user: { name: "Lin Zhao", username: "linruns", tone: "bg-flora-300", avatarId: "1554151228-14d9def656e4" },
    photoTone: "from-amber-300 via-yellow-100 to-amber-50",
    photoSrc: "/images/run-marathon.jpg",
    h: "h-80",
    runType: "marathon",
    weather: "60°F · breezy",
    gear: {
      shoes: "Saucony Endorphin Pro 4",
      shorts: "Path Projects PE/2.5",
      top: "Path Projects Tahoe Tank",
      socks: "Feetures Elite Light",
      accessories: "Naked Running Belt",
      fuel: "Maurten Gel 100 caf ×3, Gel 100 ×2",
    },
    likes: 612,
    saves: 188,
  },
  {
    id: "easy-recovery",
    caption: "Recovery jog — soft, slouchy, slow.",
    user: { name: "Sasha Patel", username: "sashap", tone: "bg-rose-200", avatarId: "1438761681033-6461ffad8d80" },
    photoTone: "from-rose-100 via-pink-100 to-stone-50",
    photoSrc: "/images/run-sunset.jpg",
    h: "h-64",
    runType: "recovery",
    weather: "65°F · overcast",
    gear: {
      shoes: "Hoka Mach X",
      shorts: "Outdoor Voices Cloudknit",
      top: "Outdoor Voices Cloudknit Tee",
      socks: "Stance Run Crew",
    },
    likes: 142,
    saves: 38,
  },
];

export function getOutfit(id: string) {
  return outfits.find((o) => o.id === id);
}
