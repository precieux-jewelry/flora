import type { RunType } from "@/types";

export const filters: { id: RunType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "marathon", label: "Marathon" },
  { id: "race-day", label: "Race Day" },
  { id: "long-run", label: "Long Run" },
  { id: "beginner", label: "Beginner" },
  { id: "womens", label: "Women's" },
  { id: "mens", label: "Men's" },
  { id: "trail", label: "Trail" },
  { id: "recovery", label: "Recovery" },
];

export type FeedPost = {
  id: string;
  user: { name: string; username: string; avatarTone: string; avatarId?: string };
  runType: RunType;
  runLabel: string;
  distance: string;
  pace: string;
  shoe: { brand: string; name: string };
  caption: string;
  photoTone: string;
  photoId?: string;
  photoH: string;
  likes: number;
  comments: number;
  tags: string[];
  postedAgo: string;
};

export const feedPosts: FeedPost[] = [
  {
    id: "p1",
    user: { name: "Maya Reyes", username: "mayaruns", avatarTone: "bg-amber-300", avatarId: "1494790108377-be9c29b29330" },
    runType: "long-run",
    runLabel: "Long run",
    distance: "14.2 mi",
    pace: "7:48 /mi",
    shoe: { brand: "Nike", name: "Vaporfly 3" },
    caption:
      "Sunrise long run on the bay. Felt smooth — the Vaporflys are still magic at mile 12.",
    photoTone: "from-amber-200 via-amber-100 to-orange-50",
    photoId: "1530143584546-02191bc84eb5",
    photoH: "h-72",
    likes: 248,
    comments: 32,
    tags: ["sunrise", "carbon-plate"],
    postedAgo: "2h",
  },
  {
    id: "p2",
    user: { name: "Jordan Kim", username: "jordan.k", avatarTone: "bg-stone-300", avatarId: "1500648767791-00dcc994a43e" },
    runType: "race-day",
    runLabel: "Race day",
    distance: "26.2 mi",
    pace: "6:42 /mi",
    shoe: { brand: "Adidas", name: "Adios Pro 4" },
    caption:
      "Berlin marathon PR. Adios Pro 4 + the green singlet I’ve raced in three years now. 🟢",
    photoTone: "from-yellow-200 via-amber-100 to-yellow-50",
    photoId: "1486739985386-d4fae04ca6f7",
    photoH: "h-80",
    likes: 1280,
    comments: 184,
    tags: ["berlin", "PR"],
    postedAgo: "5h",
  },
  {
    id: "p3",
    user: { name: "Sasha Patel", username: "sashap", avatarTone: "bg-rose-200", avatarId: "1438761681033-6461ffad8d80" },
    runType: "recovery",
    runLabel: "Recovery jog",
    distance: "4.0 mi",
    pace: "9:32 /mi",
    shoe: { brand: "Hoka", name: "Mach X" },
    caption: "Easy shake-out before tomorrow’s tempo. Mach X feels like running on bread.",
    photoTone: "from-rose-200 via-pink-100 to-stone-50",
    photoId: "1506629082955-511b1aa562c8",
    photoH: "h-64",
    likes: 142,
    comments: 18,
    tags: ["easy-day"],
    postedAgo: "8h",
  },
  {
    id: "p4",
    user: { name: "Theo Marin", username: "theo.runs", avatarTone: "bg-neutral-300", avatarId: "1507003211169-0a1dd7228f2d" },
    runType: "trail",
    runLabel: "Trail",
    distance: "10.6 mi",
    pace: "9:10 /mi",
    shoe: { brand: "Salomon", name: "S/Lab Pulsar" },
    caption: "Wet roots, calf shredder of a climb, and somehow the best run of the month.",
    photoTone: "from-emerald-200 via-stone-100 to-stone-50",
    photoId: "1517649763962-0c623066013b",
    photoH: "h-72",
    likes: 318,
    comments: 47,
    tags: ["trail", "vert"],
    postedAgo: "12h",
  },
  {
    id: "p5",
    user: { name: "Aria Lopez", username: "aria.l", avatarTone: "bg-yellow-200", avatarId: "1573496359142-b8d87734a5a2" },
    runType: "womens",
    runLabel: "Tempo",
    distance: "6.0 mi",
    pace: "7:05 /mi",
    shoe: { brand: "Asics", name: "Metaspeed Sky" },
    caption:
      "Hot day. Mesh tank + run skirt + visor. Drank way too little water, learning lesson.",
    photoTone: "from-orange-200 via-amber-100 to-yellow-50",
    photoId: "1486218119243-13883505764c",
    photoH: "h-80",
    likes: 522,
    comments: 64,
    tags: ["tempo", "summer-kit"],
    postedAgo: "1d",
  },
  {
    id: "p6",
    user: { name: "Noor Bakri", username: "noorb", avatarTone: "bg-amber-200", avatarId: "1517841905240-472988babdf9" },
    runType: "beginner",
    runLabel: "First 5K",
    distance: "3.1 mi",
    pace: "11:22 /mi",
    shoe: { brand: "Brooks", name: "Ghost 16" },
    caption:
      "First time running without walk breaks!! Ghosts are forgiving on these new knees.",
    photoTone: "from-stone-200 via-stone-100 to-stone-50",
    photoId: "1546484959-f9a381d1330d",
    photoH: "h-60",
    likes: 433,
    comments: 92,
    tags: ["c25k", "first-5k"],
    postedAgo: "1d",
  },
  {
    id: "p7",
    user: { name: "Owen Hart", username: "owen.h", avatarTone: "bg-stone-400", avatarId: "1531746020798-e6953c6e8e04" },
    runType: "mens",
    runLabel: "Workout",
    distance: "8.0 mi",
    pace: "6:55 /mi",
    shoe: { brand: "Nike", name: "Streakfly 2" },
    caption: "5×1mi at 5:40. Streakfly is criminally underrated for repeats.",
    photoTone: "from-neutral-300 via-neutral-100 to-stone-50",
    photoId: "1571008887538-b36bb32f4571",
    photoH: "h-64",
    likes: 276,
    comments: 41,
    tags: ["track", "intervals"],
    postedAgo: "2d",
  },
  {
    id: "p8",
    user: { name: "Lin Zhao", username: "linruns", avatarTone: "bg-flora-300", avatarId: "1554151228-14d9def656e4" },
    runType: "marathon",
    runLabel: "Marathon block",
    distance: "20.0 mi",
    pace: "7:30 /mi",
    shoe: { brand: "Saucony", name: "Endorphin Pro 4" },
    caption:
      "Last 20-miler of the cycle. Saucony + double caffeine gel sandwich worked.",
    photoTone: "from-amber-300 via-yellow-100 to-amber-50",
    photoId: "1540497077202-7c8a3999166f",
    photoH: "h-72",
    likes: 612,
    comments: 88,
    tags: ["marathon-prep", "long-run"],
    postedAgo: "2d",
  },
];
