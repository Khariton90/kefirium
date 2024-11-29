import { mockProductsJSON } from '~/entities/product'

export function mockCartDto(items: string[]) {
	// Bad approach, it is better to lick on the keys
	return mockProductsJSON.filter(products => items.includes(products.id))
}
