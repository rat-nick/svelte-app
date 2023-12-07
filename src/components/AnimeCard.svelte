<script lang="ts">
	import type { AnimeItem } from '../types/Item.type';
	export let item: AnimeItem = {
		id: 1,
		title: 'Attack on Titan',
		synopsis:
			'Best wartime/survival/political thriller anime of our current and possibly future generations',
		genres: ['war', 'political', 'action', 'thriller', 'mystery'],
		posterURL: 'https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg',
		rating: 9.81
	};
</script>

<div
	class="card snap-start relative rounded-xl flex flex-col flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4"
>
	<img src={item.posterURL} alt="poster" class="object-cover" />
	<header class="card-header flex text-2xl top-0 absolute">
		{item.title}
	</header>
	<div
		class="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-all flex flex-col justify-end duration-400"
	>
		<section class="p-3 bottom-0 left-0 flex items-start">
			{item.synopsis}
		</section>
		<br />
		<footer class="card-footer">
			{#each item.genres as genre}
				<span class="badge variant-filled-secondary m-1">
					{genre}
				</span>
			{/each}
		</footer>
	</div>
</div>

<style>
	header {
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}
</style>
