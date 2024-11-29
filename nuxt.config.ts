export default defineNuxtConfig({
	generate: {
		routes: ['/contacts', '/contacts'],
	},
	routeRules: {
		'/': { prerender: true },
		'/products/*': { ssr: true },
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	dir: {
		pages: './app/routes',
		layouts: './app/layouts',
		plugins: './app/plugins',
		public: './shared/public',
	},
	css: ['~/shared/base.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "~/shared/_mixins.scss" as *; @use "~/shared/_variables.scss" as *;',
					api: 'modern-compiler',
				},
			},
		},
	},
	modules: ['@pinia/nuxt'],
})
