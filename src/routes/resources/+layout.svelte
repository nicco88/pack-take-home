<script lang="ts">
	import '../../app.css';
	import { SubNavLink, Card, Button } from '$lib/index';
	import { page } from '$app/state';
	import { ChartNoAxesColumn, X } from '@lucide/svelte';

	let { children } = $props();

	const base = '/resources';

	const navigation = [
		{ link: '/all', label: 'All' },
		{ link: '/videos', label: 'Videos' },
		{ link: '/documents', label: 'Documents' },
		{ link: '/lessons', label: 'Lessons' },
		{ link: '/archive', label: 'Archive', disabled: true }
	].map((item) => ({ ...item, link: `${base}${item.link}` }));

	let dialog = $state<HTMLDialogElement | null>(null);
</script>

<Card padding="md" classList="w-full md:w-[700px] lg:w-[900px]">
	<h1 class="sr-only text-2xl font-bold">Resources</h1>

	<div class="flex flex-wrap items-center gap-3 lg:h-10 lg:flex-nowrap">
		<nav class="h-full w-full">
			<ul
				class="flex h-full flex-wrap items-center justify-center gap-x-2 border-b border-b-gray-300 text-sm sm:flex-nowrap sm:justify-start"
			>
				<li class="h-full">
					<SubNavLink link={base} active={page.url.pathname === base} ariaLabel="Analytics">
						<ChartNoAxesColumn />
					</SubNavLink>
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

		<form class="w-full sm:w-auto">
			<label for="search" class="sr-only">Search</label>

			<input
				class="w-full rounded border border-gray-300 px-3 py-2 sm:w-auto"
				type="search"
				name="search"
				placeholder="Search"
				id="search"
			/>
		</form>

		<Button type="button" classList="w-full sm:w-auto" onclick={() => dialog?.showModal()}
			>Upload</Button
		>

		<dialog
			class="top-[50%] left-[50%] w-[300px] -translate-[50%] border-2 border-gray-300 p-5 sm:w-[400px] md:w-[600px]"
			bind:this={dialog}
		>
			<div class="text-right">
				<button
					aria-label="close"
					class="cursor-pointer text-gray-400"
					onclick={() => dialog?.close()}
				>
					<X size={16} />
				</button>
			</div>

			<h2 class="mb-5 text-lg font-bold">Upload Resource</h2>

			<form class="grid w-full gap-y-3 mb-5">
				<div>
					<label for="title" class="sr-only">Title</label>

					<input
						class="w-full rounded border border-gray-300 px-3 py-2"
						type="text"
						name="title"
						placeholder="Title *"
						id="title"
						required
					/>
				</div>

				<div>
					<label for="description" class="sr-only">Description</label>

					<input
						class="w-full rounded border border-gray-300 px-3 py-2"
						type="text"
						name="description"
						placeholder="Description *"
						id="description"
						required
					/>
				</div>

				<div>
					<label for="category" class="sr-only">Category</label>

					<select
						class="h-[40px] w-full rounded border border-gray-300 px-3"
						name="category"
						id="category"
					>
						<option value="">Category *</option>
					</select>
				</div>

				<div>
					<select
						class="h-[40px] w-full rounded border border-gray-300 px-3"
						name="language"
						id="language"
					>
						<option value="">Language *</option>
					</select>
				</div>

				<div>
					<select
						class="h-[40px] w-full rounded border border-gray-300 px-3"
						name="provider"
						id="provider"
					>
						<option value="">Provider *</option>
					</select>
				</div>

				<div>
					<select class="h-[40px] w-full rounded border border-gray-300 px-3" name="role" id="role">
						<option value="">Role *</option>
					</select>
				</div>

				<div class="grid gap-3 md:grid-cols-[2fr_1fr]">
					<input
						placeholder="No file selected *"
						class="inline-block w-full rounded border border-gray-300 px-3 py-2"
						type="file"
						id="file"
						name="file"
						required
					/>

					<label for="file" class="cursor-pointer rounded border border-gray-300 px-3 py-2"
						>Select file</label
					>
				</div>
			</form>

			<div class="text-right">
				<Button
					type="button"
					onclick={() => {
						// TODO: handle upload
						dialog?.close();
					}}>Upload</Button
				>
			</div>
		</dialog>
	</div>

	<div class="py-5">
		{@render children()}
	</div>
</Card>
