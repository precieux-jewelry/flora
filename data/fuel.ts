export type FuelBrand = {
  id: string;
  name: string;
  category:
    | "Energy gels"
    | "Energy chews"
    | "Energy bars"
    | "Drink mix"
    | "Electrolytes"
    | "Real food fuel"
    | "Waffles & wafers";
  bestFor: string;
  hero: string; // signature product
  tone: string; // gradient classes
  text?: string; // overrides text color when bg is dark
  reviews: number; // placeholder count
};

export const fuelBrands: FuelBrand[] = [
  {
    id: "gu",
    name: "GU",
    category: "Energy gels",
    bestFor: "Race day · long runs",
    hero: "Roctane Energy Gel",
    tone: "from-amber-400 via-yellow-300 to-amber-200",
    reviews: 1284,
  },
  {
    id: "honey-stinger",
    name: "Honey Stinger",
    category: "Waffles & wafers",
    bestFor: "Pre-run · long efforts",
    hero: "Organic Waffle",
    tone: "from-amber-300 via-yellow-200 to-amber-100",
    reviews: 932,
  },
  {
    id: "clif",
    name: "Clif",
    category: "Energy bars",
    bestFor: "All-day · trail",
    hero: "Bloks Energy Chews",
    tone: "from-emerald-300 via-lime-200 to-yellow-100",
    reviews: 1102,
  },
  {
    id: "maurten",
    name: "Maurten",
    category: "Energy gels",
    bestFor: "Marathon · sub-3 efforts",
    hero: "Gel 100 Caf",
    tone: "from-stone-100 via-stone-50 to-white",
    reviews: 778,
  },
  {
    id: "sis",
    name: "SIS",
    category: "Energy gels",
    bestFor: "Beta-fuel loaders",
    hero: "Beta Fuel +Nootropics",
    tone: "from-orange-300 via-amber-200 to-yellow-100",
    reviews: 540,
  },
  {
    id: "lmnt",
    name: "LMNT",
    category: "Electrolytes",
    bestFor: "Hot races · daily hydration",
    hero: "Citrus Salt",
    tone: "from-orange-200 via-rose-100 to-amber-50",
    reviews: 612,
  },
  {
    id: "skratch",
    name: "Skratch Labs",
    category: "Drink mix",
    bestFor: "All-day fuel · ultras",
    hero: "Sport Hydration Mix",
    tone: "from-rose-300 via-orange-200 to-yellow-100",
    reviews: 433,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    category: "Drink mix",
    bestFor: "Trail · long distance",
    hero: "Endurance Fuel",
    tone: "from-yellow-200 via-orange-100 to-stone-50",
    reviews: 320,
  },
  {
    id: "gatorade",
    name: "Gatorade",
    category: "Drink mix",
    bestFor: "Hot weather · race aid stations",
    hero: "Endurance Formula",
    tone: "from-orange-300 via-amber-200 to-yellow-100",
    reviews: 1840,
  },
  {
    id: "spring",
    name: "Spring Energy",
    category: "Real food fuel",
    bestFor: "Sensitive stomachs · ultras",
    hero: "Awesome Sauce",
    tone: "from-emerald-200 via-stone-100 to-amber-50",
    reviews: 274,
  },
  {
    id: "neversecond",
    name: "Neversecond",
    category: "Energy gels",
    bestFor: "Carb-rich race plans",
    hero: "C30 Gel",
    tone: "from-yellow-300 via-amber-200 to-orange-100",
    reviews: 188,
  },
  {
    id: "huma",
    name: "Huma",
    category: "Energy gels",
    bestFor: "Real-fruit feel",
    hero: "Plus Chia Gel",
    tone: "from-stone-200 via-amber-100 to-stone-50",
    reviews: 156,
  },
];

export const fuelCategories: { id: FuelBrand["category"]; label: string; emoji: string; blurb: string }[] = [
  { id: "Energy gels", label: "Gels", emoji: "🟡", blurb: "Carbs in 30 seconds." },
  { id: "Energy chews", label: "Chews", emoji: "🍬", blurb: "Soft, easy bites." },
  { id: "Energy bars", label: "Bars", emoji: "🍫", blurb: "Pre-run + recovery." },
  { id: "Drink mix", label: "Drink mix", emoji: "🥤", blurb: "Carbs + sodium in liquid." },
  { id: "Electrolytes", label: "Electrolytes", emoji: "🧂", blurb: "Salt, simple." },
  { id: "Real food fuel", label: "Real food", emoji: "🍯", blurb: "Whole-food gels." },
  { id: "Waffles & wafers", label: "Waffles", emoji: "🧇", blurb: "Pre-run snacks." },
];
