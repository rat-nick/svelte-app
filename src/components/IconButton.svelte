<script lang="ts">
	export let variant: string = 'success';
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
	const variantMapping: { [id: string]: string } = {
		success: 'bg-gradient-to-br variant-gradient-primary-tertiary',
		info: 'bg-gradient-to-br variant-gradient-secondary-tertiary',
		error: 'bg-gradient-to-br bg-gradient-to-br variant-gradient-warning-error'
	};
</script>

<button
	on:click
	class={`btn btn-icon-${size} text-xl ${variantMapping[variant]}`}
>
	<slot />
</button>
