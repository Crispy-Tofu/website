<script lang="ts">
	const { link, text } = $props();
	let linked_small = link.toLowerCase();
</script>

<li>
	<a href={linked_small} class="nav-button">{text}</a>
</li>

<style lang="scss">
	// @use './../../styles/global' as *;

	.nav-button {
		border: none;

		text-transform: uppercase;
		font-family: Dutch_Bold;
		font-weight: bold;

		cursor: pointer;
		transition: all 0.2s ease-in-out;
		color: currentColor;
		text-decoration: none;

		// &:hover {
		//   background-color: white;
	}


	.nav-button:hover, :focus-visible {
		text-decoration: underline;
	}

	li {
		margin: 0;
		transition: all 0.5s ease-out;
	}

	a {
		margin: 0;
	}

	.nav-button:hover {
		text-decoration: underline;
	}
</style>
