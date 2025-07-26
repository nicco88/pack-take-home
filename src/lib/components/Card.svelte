<script lang="ts">
	import type { CardPropsI } from '../models/card.models';

	const { children, padding = 'sm', classList }: CardPropsI = $props();
</script>

<div class="bg-gray-50 rounded-xl border border-gray-300 {classList}" class:p-3={padding === 'sm'} class:p-5={padding === 'md'}>
	{@render children()}
</div>
