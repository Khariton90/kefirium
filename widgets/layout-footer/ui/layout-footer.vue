<template>
	<footer class="footer">
		<div class="container">Kefirium</div>
	</footer>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.footer {
	font-weight: 600;
	text-transform: uppercase;

	& .container {
		@include flex(row, center, center);
	}
}
</style>
