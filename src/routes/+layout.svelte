<script lang="ts">
	import { MainNavLink } from '../lib/index';
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();

	const navigation = [
		{ link: '/dashboard', label: 'Dashboard' },
		{ link: '/users', label: 'Users' },
		{ link: '/feedback', label: 'Feedback' },
		{ link: '/programs', label: 'Programs' },
		{ link: '/resources', label: 'Resources' },
		{ link: '/counterparties', label: 'Counterparties' },
		{ link: '/events', label: 'Events' }
	] as const;
</script>

<style>
	:global(body) {
		color: rgba(0, 0, 0, 0.7);
		background-color: rgba(0, 0, 0, 0.1);
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>

<nav class="flex h-12 items-center justify-between bg-gray-50 px-3 shadow-sm shadow-gray-400">
	<a href="/">Home</a>

	<ul class="flex h-full gap-x-5">
		{#each navigation as item}
			<li class="h-full">
				<MainNavLink link={item.link} active={page.url.pathname.startsWith(item.link)}>
					{item.label}
				</MainNavLink>
			</li>
		{/each}
	</ul>

	<div>
		<button type="button">Flag</button>

		<button type="button">Profile</button>
	</div>
</nav>

<main class="flex justify-center py-5 px-5">
	{@render children()}
</main>

<button>Chat</button>

