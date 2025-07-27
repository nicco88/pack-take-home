<script lang="ts">
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';

	let { chartLabels, chartData, dataLabel } = $props();

	let canvas: null | HTMLCanvasElement = $state(null);
	let chart: null | Chart = $state(null);

	onMount(() => {
		if (canvas) {
			chart = new Chart(canvas, {
				type: 'pie',
				data: [],
				options: {
          responsive: true,
          maintainAspectRatio: false,
          backgroundColor: [
            'rgba(255, 137, 4, 0.2)',
            'rgba(255, 137, 4, 0.5)',
            'rgba(255, 137, 4, 1)',
          ],
          plugins: {
            legend: {
              position: 'right'
            }
          }
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

<div class="w-[270px] mx-auto">
	<canvas class="h-[120px]" bind:this={canvas}></canvas>
</div>
