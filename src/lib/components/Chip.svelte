<script lang="ts">
	import type { ChipPropsI } from '../models/chip.models';

	const { text, variant }: ChipPropsI = $props();

	let baseClassList = 'px-2 py-1 rounded-full text-xs font-semibold';
	let variantClassList: { [key: string]: string } = {
		primary: 'text-orange-500 border-orange-500 border-2',
		secondary: 'text-emerald-500 border-emerald-500 border-2'
	};
</script>

<span class="{baseClassList} {variantClassList[variant]}">
	{text}
</span>
