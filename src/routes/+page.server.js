export async function load({ fetch }) {
	const response = await fetch('http://127.0.0.1:5000/grid/carbon_intensity/widget.json');
	const { grid_carbon_intensity_widget } = await response.json();
	return { grid_carbon_intensity_widget };
}
