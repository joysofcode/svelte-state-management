<script lang="ts">
	import Canvas from './canvas.svelte'
	import Circle from './circle.svelte'

	let width = 600
	let height = 400
</script>

<Canvas {width} {height}>
	<Circle
		x={width / 2}
		y={height / 2}
		radius={40}
		startAngle={0}
		endAngle={2 * Math.PI}
		color="aquamarine"
	/>
</Canvas>
