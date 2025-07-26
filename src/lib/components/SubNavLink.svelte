<script lang="ts">
	import '../../app.css';
	import type { MainNavLinkI } from '../models/main-nav-link.models';

	let { children, link, active, disabled = false }: MainNavLinkI = $props();
</script>

<a
	href={!disabled ? link : null}
	class={{
		'border-b-2 font-semibold': active,
    'text-gray-400 cursor-not-allowed': disabled,
    'hover:bg-gray-100 focus-within:outline-black-500': !disabled,
		'text-sm flex h-10 items-center px-1': true
	}}
  aria-disabled={disabled || null}
  aria-current={active ? 'page' : null}
  role={disabled ? 'link' : null}
>
	{@render children()}
</a>