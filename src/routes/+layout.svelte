<script lang="ts">
	import { MainNavLink } from '../lib/index';
	import { page } from '$app/state';
	import { AlignJustify } from '@lucide/svelte';
	import '../app.css';

	const { children } = $props();

	let expanded = $state<boolean>(false);

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

<header
	class:inset-0={expanded}
	class:flex-row={!expanded}
	class:h-12={!expanded}
	class:justify-between={!expanded}
	class:justify-center={expanded}
	class:items-center={!expanded}
	class="fixed z-[9999] flex w-full flex-col items-center bg-gray-50 px-3 shadow-sm shadow-gray-400 lg:static lg:h-12 lg:flex-row lg:justify-between"
>
	<nav
		class="flex flex-col items-center justify-between sm:mb-0 lg:flex-row lg:w-full"
		class:mb-5={expanded}
	>
		<a class="sm:mb-0" class:mb-5={expanded} href="/" aria-label="home">
			<img class="w-[90px]" src="/pack-logo.png" alt="">
		</a>

		<ul class="flex flex-col gap-x-5 lg:flex! lg:h-full lg:flex-row lg:mx-auto" class:hidden={!expanded}>
			{#each navigation as item}
				<li class="h-full">
					<MainNavLink link={item.link} active={page.url.pathname.startsWith(item.link)}>
						{item.label}
					</MainNavLink>
				</li>
			{/each}
		</ul>
	</nav>

	<div
		class:hidden={!expanded}
		class="mb-5 flex flex-col gap-y-3 mx-auto lg:mx-0 justify-between gap-x-3 text-center lg:mb-0 lg:flex! lg:flex-row lg:justify-items-normal"
	>
		<button type="button" aria-label="change language">
			<img class="w-[30px]" alt="english" src="/american-flag.webp"	/>
		</button>

		<button type="button" aria-label="profile" >
			<img src="https://i.pravatar.cc/150?img=49" alt="" class="rounded-full w-[30px] h-[30px]">
		</button>
	</div>

	<button
		class="cursor-pointer lg:hidden"
		class:hidden={expanded}
		type="button"
		aria-label="toggle navigation menu"
		onclick={() => (expanded = true)}
	>
		<AlignJustify />
	</button>

	<button
		class="cursor-pointer lg:hidden"
		class:hidden={!expanded}
		type="button"
		onclick={() => (expanded = false)}
	>
		Close
	</button>
</header>

<main class="flex justify-center px-5 pt-18 pb-5 lg:pt-5">
	{@render children()}
</main>

<!-- <button>Chat</button> -->

<style>
	:global(body) {
		color: rgba(0, 0, 0, 0.7);
		background-color: rgba(0, 0, 0, 0.1);
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
