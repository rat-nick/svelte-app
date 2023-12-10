<script lang="ts">
	import { fade } from 'svelte/transition';
	let expanded: boolean = false;

	let searchInput: HTMLElement;
	const toggleExpand = () => {
		expanded = !expanded;
		if (expanded) searchInput.focus();
	};
</script>

<div class="w-10 relative transition-all duration-300 max-w-md" class:expanded>
	<input
		bind:this={searchInput}
		on:focusout={toggleExpand}
		type="search"
		name="search"
		id="search"
		class="rounded-full variant-filled-surface w-full text-sm"
		placeholder="Search for favorites"
	/>
	<button
		out:fade
		class="absolute top-2 right-3.5 rounded-full duration-1500"
		on:click={toggleExpand}
		class:hidden={expanded}
	>
		<i class="fa-solid fa-magnifying-glass text-primary-100"></i>
	</button>
</div>

<style>
	@import 'tailwindcss/base.css';
	@import 'tailwindcss/components.css';
	@import 'tailwindcss/utilities.css';

	.expanded {
		width: 75vw;
	}
</style>
