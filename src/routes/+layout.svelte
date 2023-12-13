<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, initializeStores } from '@skeletonlabs/skeleton';
	import { Toast } from '@skeletonlabs/skeleton';
	import { Modal } from '@skeletonlabs/skeleton';
	import { Drawer } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Search from '../components/Search.svelte';
	import IconButton from '../components/IconButton.svelte';
	import CardList from '../components/CardList.svelte';
	import { preferedItems, recommendedItems } from './stores';
	initializeStores();
	const drawerStore = getDrawerStore();

	const openPreferences = () => {
		const drawerSettings: DrawerSettings = {
			id: 'preferrences',
			position: 'top'
		};

		drawerStore.open(drawerSettings);
	};

	const openRecommendations = () => {
		const drawerSettings: DrawerSettings = {
			id: 'recommendations',
			position: 'bottom'
		};
		drawerStore.open(drawerSettings);
	};
</script>

<Modal />
<Toast />
<Drawer>
	{#if $drawerStore.id === 'preferrences'}
		{#if $preferedItems.length === 0}
			<div
				class="flex flex-col justify-center items-center font-poppins text-xl h-full uppercase font-normal"
			>
				Add items to your
				<span class="text-primary-500 font-bold"> preferrence list </span>
				to get
				<span class="text-tertiary-500 font-bold">item recommendations</span>
			</div>
		{:else}
			<CardList data={$preferedItems} />
		{/if}
	{:else if $drawerStore.id === 'recommendations'}
		{#if $recommendedItems.length < 3}
			<div
				class="flex flex-col justify-center items-center font-poppins text-xl h-full uppercase font-normal"
			>
				Add {3 - $preferedItems.length} more items to your
				<span class="text-primary-500 font-bold"> preferrence list </span>
				to see
				<span class="text-tertiary-500 font-bold">item recommendations</span>
			</div>
		{:else}
			<CardList data={$recommendedItems} />
		{/if}
	{/if}
</Drawer>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			padding="p-2 md:p-3"
		>
			<svelte:fragment slot="lead">
				<div class="text-xl leading-4">
					<span class="font-light ps-1.5 m-0">ANI</span>
					<br />
					<span class="font-extrabold text-secondary-400 p-0 m-0">REC</span>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Search />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
<div class="fixed top-20 left-3 opacity-60 hover:opacity-100">
	<IconButton variant="success" on:click={openPreferences}>
		<i class="fa-star fa-solid"></i>
	</IconButton>
</div>
<div class="fixed bottom-3 right-3 opacity-60 hover:opacity-100">
	<IconButton variant="info" on:click={openRecommendations}>
		<i class="fa-solid fa-wand-magic-sparkles"></i>
	</IconButton>
</div>

<style>
	span {
		margin-left: 5px;
		margin-right: 5px;
	}
</style>
