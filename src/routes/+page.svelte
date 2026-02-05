<script>
	import Header from '$lib/composites/header.svelte';
	import GridCarbonIntensity from '$lib/composites/widgets/grid_carbon_intensity.svelte';
	import GridCarbonIntensityToday from '$lib/composites/widgets/grid_carbon_intensity_today.svelte';
</script>

<Header />

<section>
<GridCarbonIntensity />
<GridCarbonIntensityToday/>
</section>

<style>
	section {
		display: flex;
	}
</style>