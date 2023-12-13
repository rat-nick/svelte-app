<script lang="ts">
	import { fade } from 'svelte/transition';
	let expanded: boolean = false;

	let searchInput: HTMLElement;
	const toggleExpand = () => {
		expanded = !expanded;
		if (!expanded) {
			searchInput.focus();
		}
	};
</script>

<div class="w-10 relative transition-all duration-500 max-w-md" class:expanded>
	<input
		hidden={!expanded}
		bind:this={searchInput}
		on:focusout={toggleExpand}
		on:blur={toggleExpand}
		type="search"
		name="search"
		id="search"
		class="rounded-full variant-glass-secondary w-full text-sm"
		placeholder="Search for favorites"
	/>
	<button
		out:fade
		class="btn btn-icon variant-glass-secondary text-xl"
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
