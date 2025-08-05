<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { CardPropsI } from '../models/card.models';

	const {
		children,
		padding = 'sm',
		classList,
		animate = false,
		flyParams
	}: CardPropsI = $props();
</script>

<div in:fly={animate ? flyParams : undefined} class="bg-gray-50 rounded-xl border border-gray-300 {classList}" class:p-3={padding === 'sm'} class:p-5={padding === 'md'}>
	{@render children()}
</div>
