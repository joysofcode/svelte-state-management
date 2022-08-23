<script lang="ts">
	import { fade } from 'svelte/transition'
	import { notifications } from './notifications'
</script>

{#if $notifications}
	<div class="notifications">
		{#each $notifications as notification}
			<div
				role="alert"
				class="notification"
				transition:fade
			>
				{notification}
			</div>
		{/each}
	</div>
{/if}
