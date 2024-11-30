import { faker } from '@faker-js/faker'
import type { Product } from '../../model/types'
import { CategoryName } from '~/entities/category'

export function generateMockProducts() {
	const data = []
	const categoryArray = Object.values(CategoryName)

	for (let index = 0; index < 40; index++) {
		const item = categoryArray[Math.floor(Math.random() * categoryArray.length)]

		const element: Product = {
			id: faker.string.uuid(),
			title: faker.commerce.product.name,
			price: faker.commerce.price(),
			description: faker.commerce.productDescription(),
			category: {
				id: faker.string.uuid(),
				image: faker.image.avatar(),
				name: item,
			},
		}

		data.push(element)
	}

	return data
}

export const mockProductsJSON = generateMockProducts()
