<script lang="ts">
	import Chip from './Chip.svelte';
	import type { TablePropsI } from '$lib/models/table.models';
	import { ArrowDown, Ellipsis } from '@lucide/svelte';

	const { columns, rows }: TablePropsI = $props();

	const getPropertyValue = (obj: any, key: string | undefined) => {
		if (key && obj && typeof obj === 'object') {
			return obj[key];
		}
		return undefined;
	};

	const getInitials = (name: string | undefined) => {
		if (!name) return '';
		const parts = name.split(' ').filter((p) => p.length > 0);
		if (parts.length === 1) {
			return parts[0].charAt(0).toUpperCase();
		} else if (parts.length > 1) {
			return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
		}
		return '';
	};
</script>

<div class="overflow-x-auto">
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="">
			<tr>
				{#each columns as column, index (column.title)}
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-bold tracking-wider text-gray-600"
					>
						<div class="flex items-center gap-2">
							{column.title}

							{#if index === 0}
								<button class="cursor-pointer" aria-label="Sort">
									<ArrowDown size={14} />
								</button>
							{/if}
						</div>
					</th>
				{/each}
			</tr>
		</thead>

		<tbody class="divide-y divide-gray-200">
			{#each rows as row (row.id || JSON.stringify(row))}
				<tr class="transition-colors duration-150 hover:bg-gray-50">
					{#each columns as column (column.title)}
						<td class="px-6 py-4 text-sm text-gray-800">
							{#if column.type === 'profile'}
								<div class="flex items-center space-x-3">
									{#if getPropertyValue(row, column.imageKey)}
										<img
											class="h-9 w-9 rounded-full border border-gray-200 object-cover"
											src={getPropertyValue(row, column.imageKey)}
											alt={getPropertyValue(row, column.nameKey)}
										/>
									{:else}
										<div
											class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm leading-none font-semibold text-blue-600"
										>
											{getInitials(getPropertyValue(row, column.nameKey))}
										</div>
									{/if}

									<div>
										<div class="text-sm font-bold text-gray-700">
											{getPropertyValue(row, column.nameKey)}
										</div>

										{#if column.secondaryTextKey}
											<div class="text-xs text-gray-500">
												{getPropertyValue(row, column.secondaryTextKey)}
											</div>
										{/if}
									</div>
								</div>
							{:else if column.type === 'chip'}
								<Chip
									text={getPropertyValue(row, column.chipValueKey) || ''}
									variant={getPropertyValue(row, column.chipStyleKey) || 'primary'}
								/>
							{:else if column.type === 'text'}
								{getPropertyValue(row, column.key || column.title.toLowerCase()) || ''}
							{:else if column.type === 'kebab'}
								<button
									class="mt-3 cursor-pointer"
									aria-label="More actions"
									onclick={() => column.kebabHandler && column.kebabHandler(row)}
								>
									<Ellipsis size={14} />
								</button>
							{/if}
						</td>
					{/each}

					<td class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap"> </td>
				</tr>
			{:else}
				<tr>
					<td colspan={columns.length + 1} class="px-6 py-4 text-center text-gray-500">
						No data available.
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
