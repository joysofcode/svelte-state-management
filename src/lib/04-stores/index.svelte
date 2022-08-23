<script lang="ts">
	import Toast from './toast.svelte'
	import { toast } from './notifications'
</script>

<Toast />

<button on:click={() => toast('🔥 Svelte is fire')}>
	Show notification
</button>
