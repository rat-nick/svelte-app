<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, initializeStores } from '@skeletonlabs/skeleton';
	import Search from '../components/Search.svelte';
	import { Toast } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<Toast />
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
