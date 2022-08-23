import { writable } from 'svelte/store'

export const notifications = writable<string[]>([])

export function toast(message: string) {
	notifications.update((state) => [message, ...state])
	setTimeout(removeToast, 2000)
}

function removeToast() {
	notifications.update((state) => {
		state.shift()
		return state
	})
}
