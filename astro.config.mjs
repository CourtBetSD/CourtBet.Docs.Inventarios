import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sistema de Inventarios',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{ slug: 'inventarios/interfaz' },
				{ slug: 'inventarios/almacen' },
				{ slug: 'inventarios/activos' },
				{ slug: 'inventarios/modulos' },
				{ slug: 'inventarios/catalogos' }
			],
		}),
	],
});
