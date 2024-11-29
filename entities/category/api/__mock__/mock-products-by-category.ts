import { mockProductsJSON } from '~/entities/product'

export function mockProductsByCategory(category: string) {
	if (!category) {
		return mockProductsJSON
	}

	return mockProductsJSON.filter(product => product.category.name === category)
}
