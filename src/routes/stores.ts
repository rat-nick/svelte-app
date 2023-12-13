import { writable, type Writable } from 'svelte/store';
import type { AnimeItem } from '../types/Item.type';

export const preferedItems: Writable<AnimeItem[]> = writable([]);
export const searchedItems: Writable<AnimeItem[]> = writable([]);
export const mostPopularItems: Writable<AnimeItem[]> = writable([]);
export const recommendedItems: Writable<AnimeItem[]> = writable([]);
