<script>
	import Nav from './Nav.svelte';
</script>

<header>
	<a href="/" id="logo-header-link"
		><!--?xml version="1.0" encoding="UTF-8"?-->
		<svg
			id="logo-header"
			data-name="logo-header"
			xmlns="http://www.w3.org/2000/svg"
			width="110.8mm"
			height="59.26mm"
			viewBox="0 0 314.09 167.99"
		>
			<g id="Layer_1-2" data-name="Layer 1">
				<text
					transform="translate(10.71 131.13) scale(1.03 1)"
					style="fill: currentColor; font-family: Dutch801BT-Bold, 'Dutch801 Rm BT'; font-size: 156.29px; font-weight: 700;"
					><tspan x="0" y="0">S</tspan></text
				>
				<text
					transform="translate(104.25 131.13) scale(.91 1)"
					style="fill: currentColor; font-family: Dutch801BT-Bold, 'Dutch801 Rm BT'; font-size: 156.29px; font-weight: 700;"
					><tspan x="0" y="0">O</tspan></text
				>
				<text
					transform="translate(215.5 131.13) scale(.89 1)"
					style="fill: currentColor; font-family: Dutch801BT-Bold, 'Dutch801 Rm BT'; font-size: 156.29px; font-weight: 700; letter-spacing: 0em;"
					><tspan x="0" y="0">L</tspan></text
				>
			</g>
		</svg>
	</a>
	<Nav />
</header>

<style lang="scss">
	@use '../../scss/global' as *;

	#logo-header {
		background-color: transparent;
		max-height: 4rem;
		width: clamp(7rem, 5vw, 10rem);
	}


	#logo-header-link {
		background-color: transparent;
	}

	header {
		max-width: $max-width;
		margin-inline: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: clamp(2rem, 2vh, 3rem) clamp(2rem, 2vh, 5rem);
	}

	@media (max-width: 64rem) {
		header {
			max-width: 90%;
		}
	}
</style>
