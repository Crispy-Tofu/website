<svelte:head><title>Sol Electronics</title></svelte:head>

<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import InfoButton from '$lib/components/InfoButton.svelte';
	import '../scss/global.scss';
	import themes from '$lib/info.js'

</script>


<main>
	<section class="hero">
		<div id="hero" class="hero-wrapper">
			<div class="hero-btn-wrapper">
				<Button buttonStyle="heroButton" text="Contact" link="contact">
				</Button>
				
			</div>
		</div>
	</section>

	<hr />
	<section class="info flow" id="">
		<div class="text-container">
		<h2>Bij Sol kun je terecht voor</h2>
		<div class="thema-wrapper">
		
			{#each themes as theme}
			<InfoButton {theme}></InfoButton>
			{/each}

		</div>
		<div> 
			
		</div>
	</div>
	</section>
	<hr />
	<section class="over-sol flow" id="over-sol">
		<h2>Over Sol Electronics</h2>
		<div class="text-container">
			<p>
				Sol Electronics is dé plek voor jouw reparaties. Sol is gespecialiseerd in
				gitaarversterkers, buizenversterkers, effectpedalen en alle andere benodigdheden voor het
				maken van muziek! Maar ook als je PA-versterker weer eens het leven laat of als je
				synthesizer een valse noot blijft spelen, kun je hier terecht!
			</p>
		</div>
	</section>
</main>

<!-- </Layout> -->

<style lang="scss">
	@use '/src/scss/global.scss' as *;

	hr {
		margin-top: 3rem;
		color: grey;
		width: 80%;
		size: 2px;
	}

	h3 {
		margin-inline: auto;
	}


	.text-container > p {
		padding-inline: 1rem;
		text-align: justify;
	}

	.hero {
		justify-content: stretch;
	}
	.hero-wrapper {
		background-image: url('/hero-image-groot.webp');
		background-repeat: no-repeat;
		background-size: cover;

		margin: auto;
		margin-block: clamp(4rem, 5vh, 6rem) clamp(3rem, 5vh, 5rem);

		height: 20rem;
		width: min(90%, 45rem);

		border-radius: 1rem;
		outline: $outline-accent-small;
		box-shadow: $box-shadow-primary-medium;
		display: flex;
		align-items: end;
		position: relative;
	}

	.hero-btn-wrapper {
		box-sizing: initial;
		margin-inline: auto;
		width: 100%;
		max-width: 65ch;
		display: flex;
		padding: 1rem;
		gap: clamp(1rem, 2vw, 3rem);
		justify-content: center;
	}



	@media (max-width: 64rem) {
		.hero-wrapper {
			width: 90%;
			background-size: cover;
		}
	}

	@media screen and (max-width: 760px) {
		.hero-wrapper {
			background-image: url('/hero-image-klein.webp');
			align-items: end;

			gap: 1rem;
		}
	}

	@media screen and (max-width: 520px) {
		.hero-wrapper {
			background-image: none;
			align-items: center;
			gap: 1rem;
			height: auto;
			box-shadow: none;
			outline: none;
		}
	}


	.thema-wrapper {
		position: relative;
		display: grid;
		place-content: center;
		justify-items: center;
		padding-top: $size-8;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		row-gap: clamp(1rem, 7.5vh, 4rem);
		container-name: themas;
		container-type: inline-size;
		
	}
</style>
