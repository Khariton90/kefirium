import { defineStore } from 'pinia'
import { CategoryName } from '~/entities/category'

interface MainState {
	isLoading: boolean
	itemsMap: string[]
	filter: CategoryName
}

export const useMainStore = defineStore('main', {
	state: (): MainState => ({
		isLoading: false,
		itemsMap: [],
		filter: CategoryName.Default,
	}),
	actions: {
		addItem(id: string) {
			this.itemsMap.push(id)
		},
		removeItem(id: string) {
			this.itemsMap = this.itemsMap.filter(item => item !== id)
		},
		setIsLoading(value: boolean) {
			this.isLoading = value
		},
		changeCategory(category: CategoryName) {
			this.filter = category
		},
	},
})
