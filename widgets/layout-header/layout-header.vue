<template>
	<header class="header">
		<div class="container">
			<NuxtLink class="logo" to="/">Kefirium</NuxtLink>

			<nav class="nav">
				<ul class="nav-list">
					<li class="nav-item">
						<NuxtLink class="nav-link" to="/">Домой</NuxtLink>
					</li>
					<li class="nav-item">
						<NuxtLink class="nav-link" to="/contacts">Контакты</NuxtLink>
					</li>
					<slot />
				</ul>
			</nav>
		</div>
	</header>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.header {
	& .container {
		@include flex(row, space-between, center);
	}
}

.nav-list {
	@include flex(row, center, center);
	gap: 20px;
}

.logo {
	text-transform: uppercase;
	font-weight: 600;
}
</style>
