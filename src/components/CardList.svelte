<script lang="ts">
	import AnimeCard from './AnimeCard.svelte';
	export let listIdentifier: string;

	const load = async (query: string) => {
		const data = await fetch(`api/${query}`);
		console.log(data);
		const json = await data.json();
		console.log(json);
		return json;
	};

	const promise = load(listIdentifier);
</script>

<div
	class="flex flex-shrink-0 snap-start snap-x overflow-x-scroll overflow-y-hidden scroll-smooth"
>
	{#await promise}
		Loading
	{:then items}
		{#each items as item (item.id)}
			<AnimeCard {item} />
		{/each}
	{/await}
</div>
