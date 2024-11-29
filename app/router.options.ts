import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
	routes: _routes => [
		{
			name: 'home',
			path: '/',
			component: () => import('~/pages/home').then(r => r.HomePage || r),
		},
		{
			name: 'contacts',
			path: '/contacts',
			component: () =>
				import('~/pages/contacts').then(r => r.ContactsPage || r),
		},
		{
			name: 'checkout',
			path: '/checkout',
			component: () =>
				import('~/pages/checkout').then(r => r.CheckoutPage || r),
		},
		{
			name: 'product',
			path: '/products/:id',
			component: () =>
				import('~/pages/products').then(r => r.ProductDetails || r),
		},
	],
}
