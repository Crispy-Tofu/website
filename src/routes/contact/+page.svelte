<svelte:head><title>Sol Electronics - Contact</title></svelte:head>

<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import '../../scss/global.scss'

	export const prerender = true;
	const title = 'Contact';

	let { form }: any = $props();
	let loading = $state(false)
	let sent = $state(false)
	const loadingFunc: SubmitFunction = async () => {
		sent = true
		loading = true;

		return async ({ update }) => {
      	loading = false
      	await update()
    }
	}


</script>

<main>
	
	<div class="wrapper">
		<h1>{title}</h1>
		<section class="flow">
			<div class="text-container">
			<h2 class="">Heb je een vraag?</h2>
			<p class="">
				Neem gerust contact op via email of via Whatsapp of Signal. Dit is altijd vrijblijvend.
			</p>
		</div>
		</section>
		<hr>
		<section class="flow">
				<div class="form-wrapper" id="reparatie-form">
					<div class="form-description">
					  <p>
						Via dit formulier kun je direct een reparatie aanmelden. Ik neem dan via
						email zo snel mogelijk contact met je op. Laat alsjeblieft ook een korte beschrijving van het probleem achter, dan kan ik
						beter met je mee denken.
					  </p>
					</div>

					<form
						method="post"
						action="?/submitForm"
						data-netlify='true'
					
						aria-label="Reparatie aanmelden"
						use:enhance={loadingFunc}
						class='contact-form'
					>

					  <div class="question-wrapper">
						<label for="name">Naam:</label>
						<input
						  type="text"
						  name="name"
						  id="name"
						  value={(form?.naam && form.error) ? form?.naam : ""}
						  minlength="3"
						  autocomplete="off"
						  placeholder="Uw naam"
						  required
						  tabindex="0"
						/>
					  </div>
					  <div class="question-wrapper">
						<label for="email">Email:</label>
						<input
						  type="email"
						  name="email"
						  id="email"
						  value={form?.email ?? ""}
						  autocomplete="off"
						  placeholder="Uw emailadres"
						  required
						  tabindex="0"
						/>
					  </div>
					  <div class="question-wrapper">
						<label for="app">Apparaat</label>
						<input
						  type="text"
						  name="apparaat"
						  id="apparaat"
						  value={form?.apparaat ?? ""}
						  placeholder="Het defecte apparaat"
						  autocomplete="off"
						  required
						  tabindex="0"
						/>
					  </div>
					  <div class="question-wrapper">
						<label for="probleem">Probleem:</label>
						<textarea
						  name="probleem"
						  id="probleem"
						  value={(form?.defect)?? ""}
						  placeholder="Een beschrijving van het defect"
						  autocomplete="off"
						  required
						  tabindex="0"></textarea>
					  </div>
					  <div>
						<label class="ohnohoney" for="namehoney"></label>
						<input
						  class="ohnohoney"
						  autocomplete="off"
						  type="text"
						  id="namehoney"
						  name="namehoney"
						  placeholder="Your name here"
						  tabindex="-1"
						/>
						<label class="ohnohoney" for="emailhoney"></label>
						<input
						  class="ohnohoney"
						  autocomplete="off"
						  type="email"
						  id="emailhoney"
						  name="emailhoney"
						  placeholder="Your e-mail here"
						  tabindex="-1"
						/>
					  </div>
					  <button class="submit-btn" id="form-submit" tabindex="0"
						>Verstuur</button
					  >
					  
					  {#if sent} 
					  	<div class="message {form?.error ? 'error' : ''} {form?.success ? 'success' : ''} ">
							{#if loading}
					  			<p>Een moment geduld...</p>
							{:else if form?.emailerror}
								<p>Geef een juist emailadres op</p>
							{:else if form?.telangerror}
								<p>Het bericht was te lang, geef alsjeblieft een korte beschrijving van het defect.</p>
							{:else if form?.success}
								<p>Dankjewel, {form?.naam}. Ik neem zo snel mogelijk contact met je op!</p>
							{/if}
						</div>
						{/if}

					</form>
				  </div>
		</section>
	</div>
</main>






<style lang="scss">
	@use '../../scss/global.scss' as *;
	.row {
		display: flex;
		flex-direction: row;
		gap: clamp(0.3rem, 7vw, 5rem);
		align-items: start;

	& > * {
		flex-grow: 1;
		text-align: left;
		font-weight: bold;
	}
	& > * + * {
		text-align: right;
		font-weight: normal;
	}
	}

	.ohnohoney {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		height: 0;
		width: 0;
		z-index: -1;
  }

  .form-wrapper {
	width: min(90%, $max-width);
	margin: auto;
  }
  .contact-form {
	width: 100%;
	display: grid;

  }

  hr {
    color: inherit;
    align: center;
    size: 2px;
    width: 50%;
  }
  .question-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }

  label {
    color: inherit;
    text-transform: uppercase;
  }

  .form-description {
	padding-bottom: clamp(.5rem, 3vh, 1rem);
  }

  input,
  textarea {
    border: none;
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: $box-shadow-light;

    margin-top: 0.25rem;
	background-color: inherit;
	color: inherit;
	outline: 1px solid var(--theme-clr-text);

    &:focus-visible,
    &:focus-within,
    &:active {
      outline: $outline-accent-small;
	  box-shadow: $box-shadow-primary-small;
    }
  }

  input {
	width: min(25rem, 90%);
  }

  textarea {
    width: min(30rem, 90%);
    height: 4rem;
    max-height: 10rem;
    border: none;
	resize: vertical;
	
  }

  textarea {
	min-width: calc($size-10 * 1.5);
  }

  .submit-btn {
      padding-inline: 1.5rem;
      padding-block: 0.75rem;
	  margin-top: 2rem;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.25rem;
      letter-spacing: 0.2ch;
	  background-color: var(--theme-colour-background);
	  color: var(--theme-colour-text);

	  grid-column: 1 / -1;
	  justify-self: center;

	&:hover,
	&:focus-visible {
      box-shadow: $box-shadow-primary-medium;
      background-color: var(--background-see-through);
      outline: $outline-accent-small;
	  color: currentColor;
    }}

	.message {
		padding: $size-1 $size-4;
		display: block;
		max-width: max-content;
		text-align: center;
		margin: auto;
		margin-top: 2rem;
		box-shadow: $box-shadow-primary-medium;
		border-radius: $border-radius-medium;
		
	}

	.error, .success {
		animation: shake .3s forwards;
		animation-iteration-count: 2;
	}

	.error {
		box-shadow: $box-shadow-error-medium;
	}

	.success {
		outline: $outline-accent;
	}

</style>
