import type { Product } from '../../model/types'
import { mockProductsJSON } from './mock-products'

export function mockProductDetailsDto(id: string) {
	return mockProductsJSON.find(product => product.id === id) as Product | null
}
