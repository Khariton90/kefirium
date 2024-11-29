export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	dir: {
		pages: './app/routes',
		layouts: './app/layouts',
		plugins: './app/plugins',
		public: './shared/public',
		assets: './app/assets',
	},
	css: ['./app/assets/styles/base.scss'],
	fonts: {
		families: [{ name: 'roboto', provider: 'google' }],
	},
	generate: {
		routes: ['/contacts', '/contacts'],
	},
	routeRules: {
		'/': { prerender: true },
		'/products/*': { ssr: true },
	},
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
	modules: ['@pinia/nuxt', '@nuxt/fonts'],
})
