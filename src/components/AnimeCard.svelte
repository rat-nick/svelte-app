<script lang="ts">
	import type { AnimeItem } from '../types/Item.type';
	import { onMount } from 'svelte';
	import { preferedItems } from '../routes/stores';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import IconButton from './IconButton.svelte';
	export let item: AnimeItem | null = null;

	let ready: boolean = false;
	let isPrefered: boolean = false;
	let toastSettings: ToastSettings;
	$: toastSettings = {
		message: (!isPrefered ? 'Added to' : 'Removed from') + ' preference list',
		timeout: 3000
	};
	const toastStore = getToastStore();

	initializeStores();
	onMount(() => (ready = true));

	const addToPrefered = () => {
		if (item != null) {
			item.preferred = true;
			$preferedItems = [...$preferedItems, item];
		}
		toastStore.trigger(toastSettings);
		console.log($preferedItems);
	};

	const removeFromPrefered = () => {
		if (item != null) {
			item.preferred = false;
			$preferedItems = $preferedItems.filter((x) => x != item);
		}
		toastStore.trigger(toastSettings);
		console.log($preferedItems);
	};
</script>

<div
	class="card snap-start relative rounded-xl flex flex-col flex-shrink-0 w-1/2 lg:w-1/3 xl:w-1/4 aspect-[2/3] overflow-clip"
	class:prefered={isPrefered}
>
	{#if item !== null && ready}
		<div in:fade={{ duration: 2000 }}>
			<img src={item.posterURL} alt="poster" class="object-fill" />
			<div
				class="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-all flex flex-col justify-end duration-600"
			>
				<header
					class="card-header shadow-text flex text-xl md:text-2xl top-0 absolute justify-between items-start w-full gap-3"
				>
					<div class="ms-3 mt-2 font-poppins">{item.title}</div>
				</header>
				<section class="p-3 bottom-0 left-0 items-start text-sm hidden sm:flex">
					{item.synopsis}
				</section>
				<footer class="card-footer flex justify-between items-end gap-2">
					<div>
						{#each item.genres as genre}
							<span class="badge variant-filled-primary m-0.5">
								{genre}
							</span>
						{/each}
					</div>
					{#if !item.preferred}
						<IconButton variant="success" on:click={addToPrefered}>
							<i class="fa-solid fa-star"></i>
						</IconButton>
					{:else}
						<IconButton variant="error" on:click={removeFromPrefered}>
							<i class="fa-solid fa-xmark"></i>
						</IconButton>
					{/if}
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
	.prefered {
		box-shadow: 10px solid black;
	}
</style>
