
<svelte:head><title>Sol Electronics - Workshops</title></svelte:head>
<script lang="ts">
	const { title } = $props();
</script>

<h1>{title}</h1>
<div class="wrapper">
	<section>
		<h2>Soldeerworkshop</h2>
		<div class="flow text-container">

		<p>
			Tijdens de drie uur durende soldeerworkshop, bouwen we samen een kleine audioversterker. We
			beginnen met de basis van de soldeertechniek en veiligheid. Daarna bouw je de versterker zelf
			helemaal af met de kennis die je opgedaan hebt en kun je een werkende versterker mee naar huis
			nemen. Je krijgt dan nog een boekje mee met extra informatie over de versterker, solderen en
			elektronicatheorie.
		</p>
	</div>
	</section>
	<section>
		<h3>Hoe het werkt</h3>
		<div class="flow text-container">
		<p>
			De workshop duurt ongeveer drie uur. Mocht je wat extra tijd nodig hebben, dan is er altijd
			ruimte voor een beetje uitloop. Omdat ik workshops moet voorbereiden en alles in huis moeten
			hebben, kun je pas meedoen als je je hebt aangemeld. Stuur daarvoor een mailtje naar <a
				href="mailto:info@solelectronics.nl">info@solelectronics.nl</a
			>
		</p>
		<p>
			Tijdens de workshop richten we ons op het leren solderen, zodat het zelfvertrouwen en de
			techniek opbouwt om verder zelf aan de slag te kunnen. Maar je leert pas echt solderen door
			het te blijven doen. We kunnen je de techniek leren, maar alleen door zelf te blijven solderen
			word je pas echt beter.
		</p>
		<p>
			De workshop vindt plaats in het <a href="https://www.toekomsthuiswg.nl">ToekomsthuisWG</a>.
			Het adres is Arie Biemondstraat 111H, Amsterdam
		</p>
		<p>
			Ik hanteer een richtprijs van €45,- voor de workshop inclusief al het materiaal en boekje met
			informatie. Mocht je heel graag mee willen doen, maar ligt dit bedrag buiten je budget, stuur
			dan een mailtje.
		</p>

		<p>
			Let op! Wij hebben een speaker en batterijen beschikbaar tijdens de workshop, maar om de
			workshop voor iedereen toegankelijk te maken houden we de prijs het liefst zo laag mogelijk.
			De speaker en batterij kun je daarom niet mee naar huis nemen. We raden daarom aan om na de
			workshop je eigen batterij en speaker te kopen.
		</p>
		<p>
			Als je deze nog niet hebt, kun je bij ons ook een soldeerbout met benodigdheden kopen. Dan kun
			je na de workshop verder met experimenteren!
		</p>
	</div>
	</section>

	<section class="list">
		<h3>Wat we gaan doen/leren</h3>
		<ul class="soldeer-list">
			<li>Solderen</li>
			<li>Een eerste introductie in de elektronica</li>
			<li>Leren problemen oplossen in apparaten</li>
		</ul>

		<h3>Wat wij leveren</h3>
		<ul class="soldeer-list">
			<li>Alles om mee te solderen</li>
			<li>Alle componenten om de versterker te kunnen bouwen</li>
			<li>Een passend doosje om de versterker in te kunnen doen</li>
			<li>Testapparatuur om de versterker te kunnen testen</li>
			<li>Een boekje met extra achtergrondinformatie</li>
		</ul>

		<h3>Wat je zelf mee kunt nemen</h3>
		<ul class="soldeer-list">
			<li>Een speaker</li>
			<li>Een 9-volt batterij</li>
			<li>Je eigen soldeer- en testapparatuur</li>
		</ul>
	</section>
</div>

<style lang=scss>
    @use "../../scss/global.scss" as *;

  .list h3 {
    margin-bottom: $size-3;
  }

  .soldeer-list {
    margin-top: 0;
  }

  </style>