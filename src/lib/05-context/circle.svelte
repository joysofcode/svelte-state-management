<script lang="ts">
	import { getContext, onMount } from 'svelte'

	const { getCanvas } = getContext('canvas')

	export let x: number
	export let y: number
	export let radius: number
	export let startAngle: number
	export let endAngle: number
	export let color: string

	onMount(() => {
		const canvas: HTMLCanvasElement = getCanvas()
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		ctx.beginPath()
		ctx.fillStyle = color
		ctx.arc(x, y, radius, startAngle, endAngle)
		ctx.fill()
	})
</script>
