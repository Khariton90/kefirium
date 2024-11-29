export enum CategoryName {
	Default = '',
	Ethereum = 'Ethereum',
	Solana = 'Solana',
	Polygon = 'Polygon',
	Binance = 'Binance',
	SmartChain = 'SmartChain',
	Flow = 'Flow',
}

export interface Category {
	id: number
	name: string
	image: string
}
