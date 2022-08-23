<script lang="ts">
	import Count from './count.svelte'
	import Increment from './increment.svelte'
	import Decrement from './decrement.svelte'

	let count = 0

	const increment = () => (count += 1)
	const decrement = () => (count -= 1)
</script>

<div class="counter">
	<Increment {increment} />
	<Count {count} />
	<Decrement {decrement} />
</div>
