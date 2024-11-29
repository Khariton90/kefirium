<template>
	<main class="contact">
		<section class="contact-info">
			<h2>Адрес:</h2>
			<p>г. СПБ, ул. Манежная, д. 12</p>
			<h2>Телефон:</h2>
			<p><a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
			<h2>Электронная почта:</h2>
			<p><a href="mailto:info@example.com">info@example.com</a></p>
			<h2>Часы работы:</h2>
			<ul>
				<li>Понедельник – Пятница: 9:00–18:00</li>
				<li>Суббота: 10:00–16:00</li>
				<li>Воскресенье: выходной</li>
			</ul>
		</section>
		<section class="map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.988750378253!2d30.26325121595524!3d60.00460937965471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963134ccb39dbb%3A0xfbcdeecfb9a65b50!2z0JPQsNGA0LDQvdC40Y8g0JTQtdGB0YLQstCwLCDQmtGC0LXRgdGM0L3Ri9C5INGB0LrRhtGPINC_0LjRgNCw0LnRjA!5e0!3m2!1sru!2sru!4v1680137959877!5m2!1sru!2sru"
				width="100%"
				height="450"
				style="border: 0"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</section>
	</main>
</template>

<script setup lang="ts">
useHead({
	title: 'Kefirium | Контакты',
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: 'Контакты Kefirium',
		},
		{ hid: 'keywords', name: 'keywords', content: 'контакты, телефон, email' },
	],
})

useSeoMeta({
	title: 'Kefirium | Контакты',
	ogTitle: 'Kefirium | Контакты',
	description: 'Контакты Kefirium',
	ogDescription: 'Контакты Kefirium',
})
</script>

<style lang="scss">
.contact {
	padding: 10px;
}

.contact-info {
	@include flex(column, center, center);
	gap: 10px;
	padding: 10px;
}
</style>
