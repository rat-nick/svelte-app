<script lang="ts">
	import CardList from '../components/CardList.svelte';
</script>

<div
	class="snap-y container grid grid-rows-2 m-auto gap-5 overflow-y-scroll mt-3"
>
	<CardList listIdentifier="1" />
	<CardList listIdentifier="2" />
	<!-- <CardList listIdentifier="alltimebest" />
	<CardList listIdentifier="alltimebest" />
	<CardList listIdentifier="alltimebest" /> -->
</div>
