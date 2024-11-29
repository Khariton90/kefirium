import { defineNuxtPlugin } from '#app'
import type { Pinia } from 'pinia'
import { useMainStore } from '../store'

declare module '#app' {
	interface NitraApp {
		$store: ReturnType<typeof useMainStore>
	}
}
export default defineNuxtPlugin(nuxtApp => {
	const pinia = nuxtApp.$pinia as Pinia
	const mainStore = useMainStore(pinia)

	nuxtApp.provide('$store', mainStore)
})
