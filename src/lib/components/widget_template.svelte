<script>
	let { title, children } = $props();
</script>

<div>
	<div class="widget">
		<h1 class="title">{title}</h1>
		{@render children?.()}
	</div>
</div>

<style>
	.widget {
		background-color: #fff;
		border-radius: 10px;
		height: 345px;
		width: 692px;
		max-width: 692px;
		margin: 20px 33px;
		padding: 20px 40px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	.title {
		font-size: 1.25em;
		font-weight: bold;
	}
</style>
