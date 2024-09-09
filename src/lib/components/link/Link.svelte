<script>
	export let href = '';
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	role={!href ? 'button' : ''}
	{...$$restProps}
	on:mouseover
	on:mouseleave
	on:click
>
	<slot />
</svelte:element>