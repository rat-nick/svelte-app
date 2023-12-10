import { writable, type Writable } from 'svelte/store';
import type { AnimeItem } from '../types/Item.type';

export const preferedItems: Writable<AnimeItem[]> = writable([]);
