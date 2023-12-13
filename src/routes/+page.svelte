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

<div class="snap-y container grid grid-rows-2 m-auto gap-5 mt-3">
	<CardList data={$mostPopularItems} />
	<CardList data={$mostPopularItems} />
	<CardList data={$mostPopularItems} />
	<CardList data={$mostPopularItems} />
</div>
