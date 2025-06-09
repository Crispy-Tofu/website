<script lang='ts'>

const {
    buttonStyle = "regular",

    text,
    link = " ",
  } = $props();
  let linkTrue: boolean = false;
  let linked_small: string;
  
  if (link !== " ") {
    linkTrue = true;
  
    if (link === "/") {
      linked_small = "/";
    } else {
      linked_small = link.toLowerCase();
    }
  }
</script>
  
  <button class="button {buttonStyle}" tabindex="-1">
    
      {#if linkTrue}
        <a href={linked_small} class="link-reset" tabindex="0">
          {" "}
          {text}
        </a>
       {:else}
        {text}
      {/if}
    
  </button>
  
  <style lang="scss">
    @use "../../scss/global.scss" as *;
  

    .heroButton {
      padding-inline: 1.5rem;
      padding-block: 0.75rem;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.25rem;
      letter-spacing: 0.2ch;

    }

    </style>