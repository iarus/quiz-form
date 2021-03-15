<script>
  import ProgressBar from "@Components/ProgressBar";

  export let value = 0;
  export let max = 10;
</script>

<div class="progress_block">
  <div class="step_info">
    <div class="step_counter">
      Шаг <span class="step_counter-current_step">{value + 1}</span> из {max}
    </div>
    <div class="step_progress">
      <ProgressBar value="{value}" max="{max}" />
    </div>
  </div>
  {#if value == 0}
    <p class="info">
      После ответов на вопросы вы получите итоговую стоимость и готовую смету
    </p>
  {/if}
</div>

<style lang="scss">
  .progress_block {
    border-bottom: 1px solid #ececec;
    padding: 2em 5em 2em 2em;

    @media (max-width: 575px) {
      padding: 1.5em 3.5em 1.5em 1.5em;
    }
  }

  .step_info {
    display: flex;
    align-items: center;
  }

  .step_progress {
    max-width: 600px;
    flex-grow: 1;
  }

  .step_counter {
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1.4em;
    margin-right: 2em;
    white-space: nowrap;

    @media (max-width: 575px) {
      font-size: 1em;
    }

    &-current_step {
      display: inline-block;
      border-radius: 2em;
      background-color: rgba(0, 0, 0, 0.75);
      color: #fff;
      width: 2em;
      height: 2em;
      text-align: center;
      line-height: 2em;
      margin: 0 0.3em;
    }
  }

  .info {
    margin: 1em 0 0;
    width: 100%;
  }
</style>
