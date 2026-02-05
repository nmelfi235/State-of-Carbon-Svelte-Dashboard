<script lang='ts'>
	import { page } from "$app/state";
	import WidgetTemplate from "$lib/components/widget_template.svelte";
	import { onMount } from "svelte";

  let widget : HTMLElement;

  onMount(async () => {
    const Plotly = await import('plotly.js-dist-min');
    const {intensity_today_widget} = $derived(page.data);
    const current_data = () => intensity_today_widget;
    Plotly.newPlot(widget, current_data().data, {...current_data().layout, autosize: true,
				margin: {
					t: 30,
					b: 5,
					r: 10,
					l: 10,
					pad: 1
				}}, {responsive: true})
  })
</script>

<WidgetTemplate title={"Today's Grid Carbon Intensity"}>
  <div bind:this={widget}></div>
</WidgetTemplate>

<style>
  div {
    height: 90%;
    width: 90%;
  }
</style>