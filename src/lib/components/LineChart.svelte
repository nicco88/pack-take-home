
<script lang="ts">
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';

	let { chartLabels, chartData, dataLabel } = $props();

	let canvas: null | HTMLCanvasElement = $state(null);
	let chart: null | Chart = $state(null);

	onMount(() => {
		if (canvas) {
			chart = new Chart(canvas, {
				type: 'line',
				data: [],
				options: {
          responsive: true,
          maintainAspectRatio: false,
        }
			});
		}
	});

	$effect(() => {
		if (!chart) return;

		chart.data = {
			labels: chartLabels,
			datasets: $state.snapshot([
				{
					label: dataLabel,
					data: chartData
				}
			])
		};

		chart.update();
	});
</script>

<div class="">
	<canvas class="md:h-[220px]" bind:this={canvas}></canvas>
</div>
