export async function load({ fetch }) {
	const response = await fetch(
		'http://nmelfi235.pythonanywhere.com/grid/carbon_intensity/widget.json'
	);
	const { grid_carbon_intensity_widget } = await response.json();
	const { intensity_today_widget } = await fetch(
		'http://nmelfi235.pythonanywhere.com/grid/carbon_intensity/today/widget.json'
	).then((res) => res.json());
	return { grid_carbon_intensity_widget, intensity_today_widget };
}

export const prerender = true;
