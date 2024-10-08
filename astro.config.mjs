import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://courtbetsd.github.io/',
	base: 'CourtBet.Docs.Inventarios/',
	integrations: [
		starlight({
			title: 'Sistema de Inventarios',
			social: {
				github: 'https://github.com/CourtBetSD/CourtBet.Docs.Inventarios.git',
			},
			sidebar: [
				{ slug: 'inventarios/interfaz' },
				{ slug: 'inventarios/almacen' },
				{ slug: 'inventarios/activos' },
				{ slug: 'inventarios/modulos' },
				{ slug: 'inventarios/catalogos' }
			],
			credits: true,
			editLink: {
				baseUrl: 'https://github.com/CourtBetSD/CourtBet.Docs.Inventarios/edit/main/',
			},
			customCss: [
				'./src/styles/custom.css',
				'@fontsource/geist-sans/400.css',
				'@fontsource/geist-sans/600.css',
			],
		}),
	],
});
