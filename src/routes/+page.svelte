<script lang="ts">
	import CardList from '../components/CardList.svelte';
	import { onMount } from 'svelte';
	import { mostPopularItems } from './stores';

	onMount(async () => {
		const res = await fetch('api/1');
		const data = await res.json();
		mostPopularItems.update(() => data);
	});
</script>

<div class="snap-y container flex flex-col m-auto justify-center gap-5 mt-3">
	<div
		class="font-poppins text-2xl md:text-4xl text-center uppercase font-extralight"
	>
		Most popular
	</div>
	<CardList data={$mostPopularItems} />
	<div
		class="font-poppins text-2xl md:text-4xl text-center uppercase font-extralight"
	>
		Recent additions
	</div>
	<CardList data={$mostPopularItems} />
	<CardList data={$mostPopularItems} />
	<CardList data={$mostPopularItems} />
</div>
