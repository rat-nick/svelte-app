<script lang="ts">
	import type { AnimeItem } from '../types/Item.type';
	import AnimeCard from './AnimeCard.svelte';
	export let data: AnimeItem[];
	export let nPlaceholders: number = 4;
	const placeholders = Array(nPlaceholders);
</script>

<div
	class="flex flex-shrink-0 snap-start snap-x overflow-auto h-[50vh] lg:h-[40vh]"
>
	{#if data?.length === 0}
		{#each placeholders as ph}
			<AnimeCard />
		{/each}
	{:else}
		{#each data as item (item.id)}
			<AnimeCard {item} />
		{/each}
	{/if}
</div>
