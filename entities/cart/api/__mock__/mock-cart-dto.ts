import { mockProductsJSON } from '~/entities/product'

export function mockCartDto(items: string[]) {
	return mockProductsJSON.filter(products => items.includes(products.id))
}
