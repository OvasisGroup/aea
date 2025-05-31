import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string, maxLength: number): string {
  return text.trim().length > maxLength
    ? text.trim().slice(0, maxLength) + "..."
    : text.trim();
}
