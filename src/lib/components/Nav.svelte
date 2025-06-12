<script lang="ts">
	import {slide, fade} from 'svelte/transition'
	import NavButton from '$lib/components/NavButton.svelte';
	let menuOpen: boolean = $state(true);
	function showMenu() {
		 menuOpen = true
	}
	function closeMenu() {
		 menuOpen = false
	}
</script>

<nav aria-label="navigation">
	<div role="button" class="hamburger {menuOpen ? "hidden" : ""}" id="hamburger"   onclick={showMenu} onkeydown={(e) => {
		if (e.target === e.currentTarget) {
			showMenu
		} 
	}} tabindex="0">
		<svg

			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="hamburger-svg"
			><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line
				x1="3"
				y1="18"
				x2="21"
				y2="18"
			></line></svg
		>
	</div>

	{#if menuOpen}
	<ul class="menu" id="menu" data-status="closed" transition:slide={{axis: "x", duration: 500}}>
		<NavButton link="/" text="Home" />
		<NavButton link="/contact" text="Contact" />
		<NavButton link="/workshops" text="Workshops" />
		<div role="button" class="close {menuOpen ? "" : "hidden"}" id="close" onclick={closeMenu}
		 onkeydown={(e) => {
			if (e.target === e.currentTarget) {
				closeMenu
			} 
		}} tabindex="0">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				class="close-svg"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2"
					d="M6 18L18 6m0 12L6 6"
				></path></svg
			>
		</div>
	</ul>
	{/if}
</nav>

<style lang="scss">
	@use '../../scss/global.scss' as *;

	nav {
		position: relative;
		min-width: 2rem;
		min-height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: $gap-medium;
		margin: 0;
		padding: 1rem;
	}

	.hamburger-svg,
	.close-svg {
		pointer-events: none;
		z-index: 3;
	}

	.hidden {
		display: none;
	}
	.hamburger {
		padding: $size-4;
	}	

	.hamburger,
	.close {
		cursor: pointer;

	}


	@media screen and (max-width: 600px) {

		.nav {
			align-items: normal;
		}

		ul {
			z-index: 1;
			gap: $size-2;
			flex-direction: row;
			justify-content: center;
			align-content: end;

			margin-right: 1rem;

			// position: absolute;
			// right: 2rem;
			// top: 0rem;
			// z-index: 1;
		}

		.hamburger {
			// padding-top: .25rem;
			padding-left: 1rem;
			padding-right: 0;
		}

		.close {
			position: absolute;
			top: 30%;
			right: 0;
		}		

	}

	@media screen and (max-width: 520px) {
		nav {
			align-self: start;
		}
		ul {
			text-align: left;
			flex-direction: column;
			justify-content: flex-start;
			align-items: stretch;
			top: -.6rem;
			right: 0;
			gap: $gap-small;

			margin-right: 0rem;


			position: absolute;

			z-index: 1;
		}

		.hamburger {
			margin-right: clamp(0.1rem, 1vw, 1rem);
			padding-right: clamp(0.1rem, 1vw, 1rem);
			padding-top: .25rem;
		}
		.close {
			position: absolute;
			top: 10%;
			right: .5rem;
		}

		ul > * > * {
			margin: 0;
			padding: 0;
		}
	}
</style>
