<script lang="ts">
	import WidgetTemplate from '$lib/components/widget_template.svelte';
	import Fa from 'svelte-fa';
	import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	//let Plotly; // To be imported asynchronously, resolves rendering issue

	let title = 'Grid Carbon Intensity';
	let charge_target = $state('-');
	let discharge_target = $state('-');
	let carbon_level = $state('high');
	let widget: HTMLElement;

	onMount(async () => {
		const Plotly = await import('plotly.js-dist-min');
		let { grid_carbon_intensity_widget } = $derived(page.data);
		let current_widget_data = () => grid_carbon_intensity_widget;
		Plotly.newPlot(
			widget,
			current_widget_data().graph.data,
			{
				...current_widget_data().graph.layout,
				autosize: true,
				margin: {
					t: 30,
					b: 5,
					r: 10,
					l: 10,
					pad: 1
				}
			},
			{ responsive: true }
		);
		charge_target = current_widget_data().charge_target;
		discharge_target = current_widget_data().discharge_target;
		carbon_level = current_widget_data().carbon_level;
	});
</script>

<WidgetTemplate {title}>
	<div class="flex flex-row">
		<div class="widget" bind:this={widget}>
			<!--Place rendered plot here-->
		</div>
		<div>
			<p>Today's Targets:</p>
			<!--Change algorithm so that a time range is defined for recommended charge and discharge times-->
			<p><span class="charge">Charge</span> at {charge_target}g CO<sub>2</sub>/kWh</p>
			<p><span class="discharge">Discharge</span> at {discharge_target}g CO<sub>2</sub>/kWh</p>
		</div>
	</div>
	<div class="grid-info-text {carbon_level}">
		<Fa icon={faInfoCircle} />
		{#if carbon_level == 'high'}
			<p>Grid carbon intensity is higher than usual. Charging is not recommended.</p>
		{:else if carbon_level == 'low'}
			<p>Grid carbon intensity is lower than usual. Charging is highly recommended.</p>
		{:else}
			<p>Grid carbon intensity is stable.</p>
		{/if}
	</div>
</WidgetTemplate>

<style>
	.widget {
		height: 150px;
		width: 50%;
	}

	span {
		font-weight: bold;
		border: 1px solid black;
		border-radius: 5px;
		color: white;
		padding: 2px;
	}

	.charge {
		background-color: lightgreen;
	}

	.discharge {
		background-color: red;
	}

	.grid-info-text {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 5px 10px;
		border: 2px solid black;
		border-radius: 5px;
	}

	.grid-info-text * {
		margin: 0;
	}

	.high {
		border: 2px solid red;
	}

	.low {
		border: 2px solid lightgreen;
	}
</style>
