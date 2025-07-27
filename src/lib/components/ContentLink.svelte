<script lang="ts">
	import type { ContentLinkPropsI } from '../models/content-link.models';
	import { TrendingDown, TrendingUp } from '@lucide/svelte';

	const { children, link, trend = null }: ContentLinkPropsI = $props();
</script>

<div class="flex justify-between">
	<a href={link} class="font-bold underline hover:text-orange-500 text-base">
		{@render children()}
	</a>

	{#if trend}
		{#if trend === 'up'}
			<TrendingUp color="var(--color-emerald-500)" size={20} />
		{:else}
			<TrendingDown color="var(--color-orange-500)" size={20} />
		{/if}
	{/if}
</div>
