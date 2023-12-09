<script lang="ts">
	import type { AnimeItem } from '../types/Item.type';
	import { onMount } from 'svelte';
	export let item: AnimeItem | null = null;
	let ready: boolean = false;
	import { fade } from 'svelte/transition';
	onMount(() => (ready = true));
</script>

<div
	class="card snap-start relative rounded-xl flex flex-col flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 aspect-[2/3] overflow-clip"
>
	{#if item !== null && ready}
		<div in:fade={{ duration: 2000 }}>
			<img src={item.posterURL} alt="poster" class="object-fill" />
			<div
				class="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-all flex flex-col justify-end duration-600"
			>
				<header
					class="card-header shadow-text flex text-xl md:text-2xl top-0 absolute justify-between align-start w-full -mt-2"
				>
					<div class="ms-3 mt-2">{item.title}</div>
					<div
						class="flex bg-black w-10 h-10 justify-center items-center p-6 aspect-square rounded-full"
					>
						{item.rating}
					</div>
				</header>
				<section class="p-3 bottom-0 left-0 flex items-start text-sm">
					{item.synopsis}
				</section>
				<footer class="card-footer">
					{#each item.genres as genre}
						<span class="badge variant-filled-primary m-0.5">
							{genre}
						</span>
					{/each}
				</footer>
			</div>
		</div>
	{:else}
		<div
			class="flex placeholder w-full h-full rounded-none animate-pulse justify-center align-items-middle duration-100"
		></div>
	{/if}
</div>

<style>
	.shadow-text {
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}
</style>
