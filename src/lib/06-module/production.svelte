<script context="module" lang="ts">
	import { writable } from 'svelte/store'

	export let bananas = writable<string[]>([])
</script>

<script lang="ts">
	function addBanana() {
		$bananas = [...$bananas, '🍌']
	}

	function removeBanana() {
		$bananas = [...$bananas.slice(0, $bananas.length - 1)]
	}
</script>

<h3>Component</h3>

<div class="production">
	<button on:click={addBanana}> +🍌</button>
	<button on:click={removeBanana}> -🍌</button>
</div>
