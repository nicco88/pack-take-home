<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import type { ColumnT, RowT } from '$lib/models/table.models.js';

	const { data } = $props();

	const columns: ColumnT[] = [
		{
			title: 'Content Title',
			key: 'title',
			type: 'text'
		},
		{ title: 'Path', key: 'path', type: 'text' },
		{ title: 'View Count', key: 'viewCount', type: 'text' },
		{ title: 'Uploaded By', key: 'uploadedBy', type: 'text' },
		{
			title: 'Provider',
			type: 'chip',
			chipValueKey: 'provider',
			chipStyleKey: 'providerStyle',
			key: 'provider'
		},
		{ title: 'Type', type: 'chip', chipValueKey: 'type', chipStyleKey: 'typeStyle', key: 'type' },
		{
			title: '',
			type: 'kebab',
			kebabHandler: (row: RowT) => {
				console.log(`Kebab menu clicked for title: ${row.title}, ID: ${row.id}`);
			}
		}
	];
</script>

<Table {columns} rows={data?.tableContent || []} />
