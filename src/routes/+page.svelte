<script lang="ts">
	import Props from '$lib/01-props/index.svelte'
	import Bind from '$lib/02-bind/index.svelte'
	import Events from '$lib/03-events/index.svelte'
	import Stores from '$lib/04-stores/index.svelte'
	import Context from '$lib/05-context/index.svelte'
	import Module from '$lib/06-module/index.svelte'
	import Url from '$lib/07-url/index.svelte'
</script>

<svelte:head>
	<title>State Management</title>
</svelte:head>

<h1>Svelte State Management</h1>

<details>
	<summary>Props</summary>
	<Props />
</details>

<hr />

<details>
	<summary>Bindings</summary>
	<Bind />
</details>

<hr />

<details>
	<summary>Dispatching Events</summary>
	<Events />
</details>

<hr />

<details>
	<summary>Stores</summary>
	<Stores />
</details>

<hr />

<details>
	<summary>Context API</summary>
	<Context />
</details>

<hr />

<details>
	<summary>Module Context</summary>
	<Module />
</details>

<hr />

<details>
	<summary>URL</summary>
	<Url />
</details>
