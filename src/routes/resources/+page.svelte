<script lang="ts">
	import { Card } from '$lib/index';
	import '../../app.css';
</script>

<h2 class="text-xl font-bold sr-only">Analytics</h2>

<div class="grid gap-y-5">
	<section class="grid lg:grid-cols-24 lg:grid-rows-20 gap-3 lg:h-[400px]">
		<Card classList="lg:col-span-5 lg:row-span-10 flex flex-col gap-y-5 text-center justify-center">
			<p>placeholder</p>
			<p>active users access rate</p>
		</Card>

		<Card classList="lg:col-start-6 lg:col-span-5 lg:row-span-10 flex flex-col gap-y-5 text-center justify-center">
			<p>placeholder</p>
			<p>resources utilized</p>
		</Card>

		<Card classList="lg:col-start-11 lg:col-end-[-1] lg:row-span-6 md:flex md:items-center">
			<dl class="grid md:grid-cols-[1fr_2px_1fr_2px_1fr] gap-3">
				<div class="text-center">
					<dt>Resources uploaded</dt>
					<dd>
						1150<sub>+4%</sub>
					</dd>
				</div>

				<hr class="border-t-2 border-gray-200 md:border-t-0 md:border-transparent md:w-full md:h-auto md:bg-gray-200">

				<div class="text-center">
					<dt>Completion rate</dt>
					<dd>45%<sub>-10%</sub></dd>
				</div>

				<hr class="border-t-2 border-gray-200 md:border-t-0 md:border-transparent md:w-full md:h-auto md:bg-gray-200">

				<div class="text-center">
					<dt>Unique accesses</dt>
					<dd>
						396/582<sub>+3%</sub>
					</dd>
				</div>
			</dl>
		</Card>

		
		<Card classList="lg:col-span-10 lg:row-start-11 lg:row-end-[-1] flex flex-col gap-y-5">
			<p>resources by category</p>
		</Card>

		<Card classList="lg:col-start-11 lg:col-end-[-1] lg:row-start-7 lg:row-end-[-1]">
			<p>uploaded content vs usage over time</p>
		</Card>
	</section>

	<section class="grid gap-3 md:grid-cols-2 lg:gap-x-5">
		<Card>most used resources</Card>

		<Card>most used resources</Card>
	</section>

	<hr />

	<section>
		<h2>User Content Access</h2>

		<table></table>
	</section>
</div>
