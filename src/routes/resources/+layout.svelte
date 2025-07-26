<script lang="ts">
	import '../../app.css';
	import { SubNavLink, Card, Button } from '$lib/index';
	import { page } from '$app/state';

	let { children } = $props();

	const base = '/resources';

	const navigation = [
		{ link: '/all', label: 'All' },
		{ link: '/videos', label: 'Videos' },
		{ link: '/documents', label: 'Documents' },
		{ link: '/lessons', label: 'Lessons' },
		{ link: '/archive', label: 'Archive', disabled: true }
	].map((item) => ({ ...item, link: `${base}${item.link}` }));
</script>

<Card padding="md" classList="w-full sm:w-[400px] md:w-[600px] lg:w-[900px]">
  <h1 class="text-2xl font-bold sr-only">Resources</h1>

	<div class="flex flex-wrap lg:flex-nowrap lg:h-10 items-center gap-3">
		<nav class="h-full w-full">
			<ul class="flex flex-wrap sm:flex-nowrap h-full justify-center sm:justify-start items-center gap-x-2 border-b border-b-gray-300 text-sm">
				<li class="h-full">
					<SubNavLink link={base} active={page.url.pathname === base}>Icon</SubNavLink>
				</li>

				{#each navigation as item}
					<li class="h-full">
						<SubNavLink
							link={item.link}
							active={page.url.pathname !== base && page.url.pathname.startsWith(item.link)}
							disabled={item.disabled}
						>
							{item.label}
						</SubNavLink>
					</li>
				{/each}
			</ul>
		</nav>

		<input
			class="rounded border border-gray-300 px-3 py-2 w-full sm:w-auto"
			type="search"
			name="search"
			placeholder="Search"
			id="search"
		/>

		<Button type="button" classList="w-full sm:w-auto">Upload</Button>
	</div>

	<div class="py-5">
		{@render children()}
	</div>
</Card>
