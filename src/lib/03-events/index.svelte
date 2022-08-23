<script lang="ts">
	import Mouse from './mouse.svelte'

	let x = 0
	let y = 0

	function updatePosition(event: CustomEvent<MouseEvent>) {
		const target = event.detail.target as HTMLDivElement
		const element = target.getBoundingClientRect()

		x = event.detail.clientX - element.left
		y = event.detail.clientY - element.top
	}
</script>

<Mouse on:updatePosition={updatePosition} />

<div>
	x: {x}, y: {y}
</div>
