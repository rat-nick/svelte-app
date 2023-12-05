<script lang='ts'>
    import type { AnimeItem } from "../types/Item.type";
    export let item: AnimeItem = {
        id : 1,
        title: "Attack on Titan",
        synopsis: "Best wartime/survival/political thriller anime of our current and possibly future generations",
        genres: ['war', 'political', 'action', 'thriller', 'mystery'],
        posterURL : "https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg",
        rating: 9.81,
    }
</script>

<style>
    header {
        text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
    }
</style>

<div class="card-hover card w-42 relative rounded-xl overflow-hidden flex flex-col gap-2">
    <img src={item.posterURL} alt="" class='object-fill w-full rounded-lg'>
    <div class="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-all flex flex-col gap-1">
        <header class="card-header flex text-2xl top-0">
            {item.title}
        </header>
        <section class='p-3 absolute bottom-0 left-0 flex items-start'>
            {item.synopsis}
        </section>
        <footer class="card-footer">
            {#each item.genres as genre}
                <span class="badge variant-filled-secondary m-1">
                    {genre}
                </span>
            {/each}
        </footer>
    </div>
    
</div>