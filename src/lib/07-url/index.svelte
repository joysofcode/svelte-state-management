<script lang="ts">
	import { page } from '$app/stores'

	type Item = number
	type Order = 'asc' | 'desc'

	let items: Item[] = [1, 2, 3, 4]
	let order: Order =
		($page.url.searchParams.get('order') as Order) ?? 'asc'

	$: sortedItems = sortItems(order)

	function changeOrder() {
		order === 'asc' ? (order = 'desc') : (order = 'asc')
	}

	function sortItems(order: Order) {
		return order === 'asc' ? items : [...items].reverse()
	}
</script>

<button on:click={changeOrder}>
	{order === 'asc' ? '🔺' : '🔻'}
</button>

<ul>
	{#each sortedItems as item}
		<li>{item}</li>
	{/each}
</ul>
