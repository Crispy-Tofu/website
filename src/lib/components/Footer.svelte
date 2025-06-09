<script>
	import { slide } from 'svelte/transition';

	let showFooter = $state(false);
</script>

<footer class="" data-status="closed" id="footer">
	<div
		id="trigger"
		class="trigger"
		role="button"
		tabindex="0"
		onclick={(e) => {
			if (e?.target === e?.currentTarget) {
				showFooter = true;
			}
		}}
		onkeydown={(e) => {
			if (e?.target === e?.currentTarget && e.key === 'Enter') {
				showFooter = true;
			}
		}}
	>
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
			class="chevrons-foooter feather-chevrons-up"
			><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"
			></polyline></svg
		>
	</div>
	{#if showFooter}
		<div
			class="footer-wrapper"
			id="footer-wrapper"
			data-status="closed"
			transition:slide|global={{ duration: 1000 }}
		>
			<div
				class="close-button"
				id="footer-close"
				role="button"
				tabindex="0"
				onclick={(e) => {
					if (e?.target === e?.currentTarget) {
						showFooter = false;
					}
				}}
				onkeydown={(e) => {
					if (e?.target === e?.currentTarget && e.key === 'Enter') {
						showFooter = false;
					}
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					class="close-button-x"
					><path
						fill="none"
						stroke="#fff"
						stroke-linecap="round"
						stroke-width="2"
						d="M6 18L18 6m0 12L6 6"
					></path></svg
				>
			</div>
			<div class="contact-info">
				<p>Sol Electronics</p>
				<p>Van Ostadestraat 49E</p>
				<p>1072SN Amsterdam</p>
				<p>info@solelectronics.nl</p>
				<p>06-48225280</p>
				<p>KVK: 72721987</p>
			</div>
		</div>
	{/if}
</footer>

<style lang="scss">
	@use '../../scss/global.scss' as *;

	button {
		box-shadow: none;
	}

	footer {
		margin-top: 2rem;
		margin-bottom: 0rem;
		margin-inline: auto;
		max-width: $max-width;
		overflow: visible;
		display: flex;
		justify-content: center;
	}

	.footer-wrapper {
		position: absolute;
		bottom: 0;
		left: 50%;
		translate: -50% 0;
		width: min(90%, 20rem);
		padding: $size-6;
		

		display: flex;
		flex-direction: row;
		justify-content: center;

		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		outline: $outline-accent-small;
		background-color: var(--background-see-through, black), ;
		box-shadow: $box-shadow-primary-medium;

	}

	.trigger {
		display: block;
		cursor: pointer;
		padding: $size-2 $size-4;
		box-shadow: $box-shadow-primary-small;
		place-self: center;
		border-radius: $border-radius-small $border-radius-small 0 0;
		outline: $outline-primary-small;
		transition: all $animation-length-short ;
	}

	.trigger:hover,
	.trigger:focus-within {
		scale: 1.03;
		box-shadow: $box-shadow-primary-medium;
	}

	.trigger > * {
		pointer-events: none;
	}

	.chevrons-footer {
		fill: $clr-neutral-100;
	}

	.contact-info {
		margin-block: 0.5rem;
		font-size: 0.8rem;
		display: flex;
		flex-direction: column;
		& > * {
			color: currentColor;
			font-weight: bold;
			font-family: Dutch_Bold, serif;
			margin: 0;
			padding: 0.1rem;
		}
	}

	@media screen and (max-width: 64rem) {
		footer {
			max-width: 90%;
		}
	}

</style>