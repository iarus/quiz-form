<script>
  import Spinner from "@Components/Spinner";

  let isLoading = false;
  let isError = false;
  let errorTimer;
  let ModalFrame;
  let showModal;

  function showForm() {
    if (ModalFrame) {
      showModal();
    } else {
      loadContent();
    }
  }

  function loadContent() {
    isLoading = true;
    clearError();
    import("@Content/ModalFrame")
      .finally(()=>{
        isLoading = false;
      })
      .then(res=>{
        ModalFrame = res.default;
      })
      .catch(()=>{
        isError = true;
        errorTimer = setTimeout(clearError, 10000);
      });
  }

  function clearError() {
    isError = false;
    clearTimeout(errorTimer);
  }
</script>

<div class="root">
  <button
    on:click={showForm}
    disabled={isLoading}
    class="btn btn-loader {isLoading ? '__loading' : ''}"
  >
    Калькулятор подбора септика

    {#if isLoading}
      <span class="spinner">
        <Spinner />
      </span>
    {/if}
  </button>

  {#if isError}
    <p
      class="loading-error"
      on:click={clearError}
    >
      Ошибка при загрузке формы, попробуйте повторить позже.
    </p>
  {/if}

  <svelte:component this={ModalFrame} open={true} bind:show={showModal} />
</div>

<style lang="scss">
  .root {
    position: relative;
    z-index: 0;
  }

  .btn-loader {
    position: relative;
    z-index: 0;

    &.__loading {
      color: transparent;
    }
  }

  .spinner {
    position: absolute;
    color: rgba(255, 255, 255, 0.85);
    width: 2em;
    height: 2em;
    top: calc(50% - 1em);
    left: calc(50% - 1em);
  }

  .loading-error {
    $bg-color: #ff4444;
    $text-color: #fff;

    cursor: pointer;
    position: absolute;
    text-transform: none;
    line-height: 1.6;
    top: calc(100% + 0.5rem);
    left: 50%;
    width: 100%;
    max-width: 280px;
    transform: translateX(-50%);
    margin: 0;
    color: $text-color;
    background: $bg-color;
    font-size: 0.8rem;
    text-align: center;
    padding: 0.8rem 1rem;
    box-shadow: 0 1rem 1rem rgba(0,0,0,0.1);
    border-radius: 0.2rem;

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin: 0 0 0 -0.3rem;
      border: 0.3rem solid transparent;
      border-top: none;
      border-bottom-color: $bg-color;
    }
  }
</style>
