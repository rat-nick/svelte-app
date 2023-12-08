<script lang="ts">
	import AnimeCard from './AnimeCard.svelte';
	export let listIdentifier: string;

	const load = async (query: string) => {
		const data = await fetch(`api/${query}`);
		return data.json();
	};

	const promise = load(listIdentifier);

	const placeholders = [1, 2, 3, 4];
</script>

<div
	class="flex flex-row flex-shrink-0 snap-start snap-x overflow-x-scroll overflow-y-hidden bg-secondary"
>
	{#await promise}
		{#each placeholders as ph, index}
			<AnimeCard />
		{/each}
	{:then items}
		{#each items as item (item.id)}
			<AnimeCard {item} />
		{/each}
	{/await}
</div>
