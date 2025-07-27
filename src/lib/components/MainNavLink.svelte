<script lang="ts">
	import '../../app.css';
	import type { MainNavLinkI } from '../models/main-nav-link.models';

	let { children, link, active }: MainNavLinkI = $props();
</script>

<a
	href={link}
	aria-current={active ? 'page' : null}
	class={{
		'border-b-2 text-orange-500': active,
		'flex h-full items-center px-3 hover:bg-gray-100 focus-within:outline-orange-500 font-[500] justify-center text-center': true
	}}
>
	{@render children()}
</a>
