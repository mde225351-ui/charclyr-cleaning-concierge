export const BUSINESS = {
  name: "Charclyr Cleaning",
  signature: "Better Living.",
  phoneDisplay: "561-574-0921",
  phoneLink: "+15615740921",
  serviceArea: "Palm Beach County, Florida",
  tagline: "A Cleaner Home Means a Calmer You.",
} as const;

export const SERVICES = [
  "One-Time Cleaning",
  "Weekly Cleaning",
  "Bi-Weekly Cleaning",
  "Monthly Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out",
  "Window Cleaning",
  "Post-Construction",
  "Janitorial Cleaning",
] as const;

export const COMPARISONS = [
  {
    name: "The kitchen",
    detail: "A fresh start for the heart of your home.",
    before: "Kitchen before cleaning",
    after: "Kitchen after cleaning",
    beforeImage: "kitchen-before",
    afterImage: "kitchen-after",
  },
  {
    name: "Sunlit windows",
    detail: "A little more clarity in every room.",
    before: "Windows before cleaning",
    after: "Windows after cleaning",
    beforeImage: "windows-before",
    afterImage: "windows-after",
  },
] as const;

export const REELS = ["A calmer kitchen", "Little details, big difference", "Room to breathe"] as const;

export const TESTIMONIAL_PLACEHOLDERS = [
  { name: "Customer name", quote: "Genuine customer review will appear here." },
  { name: "Customer name", quote: "Genuine customer review will appear here." },
  { name: "Customer name", quote: "Genuine customer review will appear here." },
] as const;