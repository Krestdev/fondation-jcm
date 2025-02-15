import { LightBoxImage } from "@/data/type";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sortLightboxImages = (images: LightBoxImage[]) => {
  return images.sort((a, b) => {
    if (a.id === undefined) return 1; // Move items without id to the end
    if (b.id === undefined) return -1; // Keep items with id first
    return a.id - b.id; // Normal ascending sort
  });
};