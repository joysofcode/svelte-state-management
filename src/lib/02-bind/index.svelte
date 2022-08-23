<script lang="ts">
	import Input from './input.svelte'
	import Output from './output.svelte'

	let input = ''
</script>

<Input bind:input />
<Output {input} />
