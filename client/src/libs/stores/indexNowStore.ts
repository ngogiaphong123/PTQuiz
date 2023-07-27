import { writable } from 'svelte/store';

export type IndexNow = {
    index: number;
};

export const indexNow = writable<IndexNow | null>(null);
