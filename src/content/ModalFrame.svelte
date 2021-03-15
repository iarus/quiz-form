<script>
  import { fade } from 'svelte/transition';
  import { portal } from "svelte-portal";

  import QuizForm from "@Content/QuizForm"

  export let open = false;
  let initialStyle = {};

  export function close() {
    open = false;
  }
  export function show() {
    open = true;
  }
  function enableScroll() {
    Object.assign(document.body.style, initialStyle);
  }
  function disableScroll() {
    let marginRight = window.innerWidth - document.documentElement.clientWidth;

    initialStyle = {
      marginRight: document.body.style.marginRight,
      overflow: document.body.style.overflow
    }
    Object.assign(document.body.style, {
      ...( marginRight !== 0 ? { marginRight: marginRight + "px" } : {} ),
      overflow: "hidden"
    });
  }
  function escapeHandler(event){
    if (event.key === "Escape") {
      close();
    }
  }
</script>

<svelte:window on:keydown={escapeHandler} />

{#if open}
  <div class="modal-window"
    use:portal
    transition:fade={{duration:300}}
    on:introstart={disableScroll}
    on:outroend={enableScroll}
  >
    <button on:click={close} class="btn-close_modal" title="Закрыть форму"></button>
    <div class="modal-window-content">
      <QuizForm />
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-window {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal-window-content {
    max-width: 1400px;
    margin: 10em auto 1em;
    padding: 0 1em;

    @media screen and(max-width: 1600px) {
      margin-top: 5em;
    }

    @media screen and(max-width: 1200px) {
      margin-top: 1em;
    }

    @media screen and(max-width: 991px) {
      margin: 0;
      padding: 0;
    }
  }

  .btn-close_modal {
    border: none;
    line-height: 0;
    color: #000;
    background: rgba(255, 255, 255, 0.85) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 386.7 386.7'%3E%3Cpath d='M387 46L341 0 193 148 46 0 0 46l148 147L0 341l46 46 147-148 148 148 46-46-148-148z'/%3E%3C/svg%3E") 50% 50%/1em auto no-repeat;
    position: absolute;
    right: 1em;
    top: 1em;
    font-size: 1em;
    z-index: 1;
    padding: 0;
    width: 2.5em;
    height: 2.5em;
    cursor: pointer;
    transition: 0.2s ease;

    &:focus {
      outline: none;
      transform: scale(0.9);
    }

    @media screen and(max-width: 991px) {
      top: 1.7em;
    }
    @media screen and(max-width: 575px) {
      top: 0.8em;
      right: 0.2em;
    }
  }
</style>