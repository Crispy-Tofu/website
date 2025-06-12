<script>
    import { scale } from 'svelte/transition'
    import { trapFocus } from '$lib/actions.svelte.js';

    let { theme } = $props();

    let active = $state(false)

    function showInfo() {
        active = true;

        let el = document.querySelector('.info');
        el?.scrollIntoView({block: 'center', behavior: 'smooth'})

    }

    function hideInfo() {    
        active = false;
    }
        




</script>

<div class="wrapper"
     role="button" 
     id='openModal'
     onclick={showInfo} 
     onkeydown={(e) => {
        if (e.key === "Enter" || e.key === " "){
        showInfo()}}} 
     tabindex="{active ? -1 : 0 }"  >
    <p>{theme.name}</p>

</div>

{#if active}
<div class="info" id='modal' use:trapFocus transition:scale>
    <div
    class="close-button"
    role="button"
    tabindex="{active ? 0 : -1 }"
    onclick={hideInfo}
    onkeydown={(e) =>{
    if (e.key === "Enter" || e.key === " " || e.key === "Escape"){
    hideInfo()}}}
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
        ></path>
        </svg>
    </div>
    <p id={theme.name.toLowerCase()}  >{theme.text}</p>

</div>
{/if}

<style lang="scss">
    @use '../../scss/global.scss' as *;

.wrapper {
        cursor: pointer;
        outline: $outline-accent-small;
        outline-offset: calc($size-1 * -1);
		padding: $size-4 $size-4;
		display: flex;
		width: 10rem;
        aspect-ratio: 1;
		text-align: center;
		box-shadow: $box-shadow-primary-medium;
		border-radius: $border-radius-medium;
		align-items: center;
        justify-content: center;
    
    &:focus-visible {
        scale: 1.05;
    }
        
	}




p {
    text-align: center;
    font-weight: bold;
}

.info {
    position: absolute;
    inset: -1.5rem;


    border: none;
    outline: none;

    color: $clr-neutral-100;
    border-radius: $border-radius-small;
    padding: $size-8;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;

    backdrop-filter: blur(2px) saturate(20%);


    & p {
        text-align: justify;
        outline: $outline-accent;
        padding: $size-8;
        border-radius: $border-radius-small;
        background-color: var(--background-see-through);
        color: var(--theme-clr-text);
        box-shadow: $box-shadow-primary-medium;

    }

}




@container themas (width < 710px) {
    .close-button {
        top: 20%;
        right: 5%;
    }
}
@container themas (width < 480px) {
    .close-button {
        top: 37%;
        right: 5%;
    }
}

</style>