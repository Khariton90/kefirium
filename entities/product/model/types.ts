import type { Category } from '~/entities/category'

export interface Product {
	id: string
	title: string
	price: string
	description: string
	category: Category
	images: string[]
}
