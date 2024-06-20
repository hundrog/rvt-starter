import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import '~/style.css'

createInertiaApp({
	resolve: name => {
		const pages = import.meta.glob('../Pages/**/*.vue', { eager: true })
		return pages[`../Pages/${name}.vue`]
	},
	setup({ el, App, props, plugin }) {
		const app = createApp({ render: () => h(App, props) })
		app.use(plugin)
			;
		app.component("iHead", Head);
		app.component("iLink", Link);

		app.mount(el)
	},
})
