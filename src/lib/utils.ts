import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const monthAbbreviations: Record<string, string> = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
}

export function formatDateRange(value: string) {
  return value
    .replace(
      /\b(January|February|March|April|June|July|August|September|October|November|December)\b/g,
      (month) => monthAbbreviations[month]
    )
    .replace(" - ", " – ")
}
