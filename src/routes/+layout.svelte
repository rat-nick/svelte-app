<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns='grid-cols-3' slotDefault='place-self-center' slotTrail='place-content-end'>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">ANI-REC</strong>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<input type="search" name="search" id="search" class="rounded-full ps-4 variant-filled" placeholder="Search anime...">
			</svelte:fragment>
			<svelte:fragment slot="trail">
				
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
