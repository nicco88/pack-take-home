<script lang="ts">
	import { Button, Card, ContentLink, LineChart, PieChart, Table } from '$lib/index';
	import type { ContentLinkTrendT } from '$lib/models/content-link.models';
	import type { ColumnT, RowT } from '$lib/models/table.models';
	import Progress from '@bonosoft/sveltekit-progress';
	import { Blocks, ChartNoAxesColumn, Folders, TrendingDown, TrendingUp } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import '../../app.css';

	const { data } = $props();

	const pieData = $state({
		labels:
			data?.analytics?.pieData?.map(
				(item: { value: number; category: string }) => `${item.value}% ${item.category}`
			) || [],
		data: data?.analytics?.pieData?.map((item: { value: number }) => item.value) || []
	});

	const columns: ColumnT[] = [
		{
			title: 'User',
			type: 'profile',
			imageKey: 'avatar',
			nameKey: 'name',
			secondaryTextKey: 'role'
		},
		{ title: 'Accessed Content', key: 'accessedContent', type: 'text' },
		{ title: 'Opened on', key: 'openedOn', type: 'text' },
		{ title: 'Closed on', key: 'closedOn', type: 'text' },
		{ title: 'Provider', type: 'chip', chipValueKey: 'provider', chipStyleKey: 'providerStyle' },
		{
			title: '',
			type: 'kebab',
			kebabHandler: (row: RowT) => {
				console.log(`Kebab menu clicked for user: ${row.name}, ID: ${row.id}`);
			}
		}
	];

	function checkNull(data: string | number | null | undefined, alt: string = '-'): string | number {
		return data != null && !isNaN(data as number) ? data : alt;
	}

	function checkNullWithPercent(
		data: string | number | null | undefined,
		alt: string = '-'
	): string | number {
		return data != null && !isNaN(data as number) ? `${data}%` : alt;
	}

	const progressTweenOptions = {
		duration: 2000,
		easing: cubicOut
	};
	const tweenOptions = {
		duration: 4000,
		easing: cubicOut
	};
	const activeUsersAccessRate = new Tween(0, progressTweenOptions);
	const resourcesUtilized = new Tween(0, progressTweenOptions);
	const resourcesUploaded = new Tween(0, tweenOptions);
	const completionRate = new Tween(0, tweenOptions);
	const uniqueAccesses = new Tween(0, tweenOptions);

	function initializeTween() {
		if (typeof data?.analytics?.resourcesUtilized === 'number') {
			resourcesUtilized.set(data.analytics.resourcesUtilized);
		}
	
		if (typeof data?.analytics?.activeUsersAccessRate === 'number') {
			activeUsersAccessRate.set(data.analytics.activeUsersAccessRate);
		}
	
		if (typeof data?.analytics?.resourcesUploaded?.total === 'number') {
			resourcesUploaded.set(data.analytics.resourcesUploaded.total);
		}
	
		if (typeof data?.analytics?.completionRate?.total === 'number') {
			completionRate.set(data.analytics.completionRate.total);
		}
	
		if (typeof data?.analytics?.uniqueAccesses?.partial === 'number') {
			uniqueAccesses.set(data.analytics.uniqueAccesses.partial);
		}
	}

	onMount(() => {
		initializeTween();
	});
</script>

<h2 class="sr-only text-xl font-bold">Analytics</h2>

<div class="grid gap-y-5">
	<section class="grid min-w-0 gap-3 lg:h-[400px] lg:grid-cols-24 lg:grid-rows-20">
		<Card classList="lg:col-span-5 lg:row-span-10 grid gap-y-3 text-center place-content-center">
			<div class="fit-content mx-auto">
				<Progress
					progress={Math.round(activeUsersAccessRate.current || 0).toString()}
					color="var(--color-emerald-500)"
					textColor="var(--color-emerald-500)"
				/>
			</div>

			<h3 class="w-[100px] text-sm text-gray-400">Active Users Access Rate</h3>
		</Card>

		<Card
			classList="lg:col-start-6 lg:col-span-5 lg:row-span-10 grid gap-y-3 text-center place-content-center"
		>
			<div class="fit-content mx-auto">
				<Progress
					progress={Math.round(resourcesUtilized.current || 0).toString()}
					color="var(--color-orange-400)"
					textColor="var(--color-orange-400)"
				/>
			</div>

			<h3 class="w-[100px] text-sm text-gray-400">Resources Utilized</h3>
		</Card>

		<Card
			classList="lg:col-start-11 lg:col-end-[-1] lg:row-span-6 md:flex md:items-center md:justify-center"
		>
			<dl class="grid w-full gap-3 md:grid-cols-[1fr_2px_1fr_2px_1fr]">
				<div class="text-center">
					<dt class="mb-3 inline-flex items-center gap-1 text-xs text-gray-400">
						<Folders size={12} />

						Resources uploaded
					</dt>

					<dd class="text-xl font-bold">
						{checkNull(Math.round(resourcesUploaded.current))}

						{#if data?.analytics?.resourcesUploaded?.trend}
							{@const trend = data?.analytics?.resourcesUploaded?.trend}

							<sub
								class="relative top-3 ml-1 inline-flex items-center gap-1 text-sm {trend > 0
									? 'text-emerald-600'
									: 'text-orange-600'}"
							>
								{#if trend > 0}
									<TrendingUp size={12} />

									+{trend}%
								{:else}
									<TrendingDown size={12} />

									{trend}%
								{/if}
							</sub>
						{/if}
					</dd>
				</div>

				<hr
					class="border-t-2 border-gray-200 md:h-auto md:w-full md:border-t-0 md:border-transparent md:bg-gray-200"
				/>

				<div class="text-center">
					<dt class="mb-3 inline-flex items-center gap-1 text-xs text-gray-400">
						<Blocks size={12} />
						Completion rate
					</dt>

					<dd class="text-xl font-bold">
						{checkNullWithPercent(Math.round(completionRate.current))}

						{#if data?.analytics?.completionRate?.trend}
							{@const trend = data?.analytics?.completionRate?.trend}

							<sub
								class="relative top-3 ml-1 inline-flex items-center gap-1 text-sm {trend > 0
									? 'text-emerald-600'
									: 'text-orange-600'}"
							>
								{#if trend > 0}
									<TrendingUp size={12} />

									+{trend}%
								{:else}
									<TrendingDown size={12} />

									{trend}%
								{/if}
							</sub>
						{/if}
					</dd>
				</div>

				<hr
					class="border-t-2 border-gray-200 md:h-auto md:w-full md:border-t-0 md:border-transparent md:bg-gray-200"
				/>

				<div class="text-center">
					<dt class="mb-3 inline-flex items-center gap-1 text-xs text-gray-400">
						<ChartNoAxesColumn size={12} />
						Unique accesses
					</dt>

					<dd class="text-xl font-bold">
						{checkNull(Math.round(uniqueAccesses.current))}/{checkNull(
							data?.analytics?.uniqueAccesses?.total
						)}

						{#if data?.analytics?.uniqueAccesses?.trend}
							{@const trend = data?.analytics?.uniqueAccesses?.trend}

							<sub
								class="relative top-3 ml-1 inline-flex items-center gap-1 text-sm {trend > 0
									? 'text-emerald-600'
									: 'text-orange-600'}"
							>
								{#if trend > 0}
									<TrendingUp size={12} />

									+{trend}%
								{:else}
									<TrendingDown size={12} />

									{trend}%
								{/if}
							</sub>
						{/if}
					</dd>
				</div>
			</dl>
		</Card>

		<Card
			classList="lg:col-span-10 lg:row-start-11 lg:row-end-[-1] flex flex-col gap-y-5 overflow-x-auto min-w-0"
		>
			<h3 class="ml-10 text-xs text-gray-400">Resources by category</h3>

			<PieChart chartLabels={pieData.labels} chartData={pieData.data} dataLabel="Pie chart" />
		</Card>

		<Card
			classList="lg:col-start-11 lg:col-end-[-1] lg:row-start-7 lg:row-end-[-1] overflow-x-auto min-w-0"
		>
			<h3 class="mb-3 text-center text-xs text-gray-400">Uploaded content vs Usage over time</h3>

			<LineChart chartLabels={[]} chartData={[0, 1100, 20, 500, 700]} dataLabel="First" />
		</Card>
	</section>

	<section class="grid gap-3 md:grid-cols-2 lg:gap-x-5">
		<Card padding="md">
			<h3 class="mb-3 text-xs text-gray-400">Most Used Resources</h3>

			{#each data?.analytics?.mostUsedResources || [] as resource}
				<ContentLink link={resource.link} trend={resource.trend as ContentLinkTrendT}>
					{resource.title}
				</ContentLink>
			{/each}
		</Card>

		<Card padding="md">
			<h3 class="mb-3 text-xs text-gray-400">Most Used Resources</h3>

			{#each data?.analytics?.mostUsedResources2 || [] as resource}
				<ContentLink link={resource.link} trend={resource.trend as ContentLinkTrendT}>
					{resource.title}
				</ContentLink>
			{/each}
		</Card>
	</section>

	<hr class="border-gray-300" />

	<section class="min-w-0">
		<h2 class="mb-5 text-lg font-bold">User Content Access</h2>

		<div class="mb-5 grid gap-3 md:items-center lg:flex">
			<form class="grid gap-3 lg:flex">
				<div>
					<label for="provider" class="sr-only">Provider</label>

					<select
						placeholder="Provider"
						class="h-[40px] w-full rounded border border-gray-300 px-3 lg:w-[200px]"
						name="provider"
						id="provider"
					>
						<option value="">Provider</option>
					</select>
				</div>

				<div>
					<label for="from" class="sr-only">From</label>

					<input
						placeholder="From"
						type="text"
						id="from"
						class="h-[40px] w-full rounded border border-gray-300 px-3 lg:w-auto"
					/>
				</div>

				<div>
					<label for="to" class="sr-only">To</label>

					<input
						placeholder="To"
						type="text"
						id="to"
						class="h-[40px] w-full rounded border border-gray-300 px-3 lg:w-auto"
					/>
				</div>
			</form>

			<Button>Download</Button>
		</div>

		<Table {columns} rows={data?.tableContent || []} />
	</section>
</div>
