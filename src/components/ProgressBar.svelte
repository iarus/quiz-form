<script>
  export let value = 0;
  export let max = 10;
</script>

<progress class="progress {$$props.class || ''}" value="{value}" max="{max}"></progress>

<style lang="scss">
  .progress {
    $progress-value-background: #f76829;
    $progress-value-border-radius: 2px;

    width: 100%;
    display: block;
    border: 0;
    color: $progress-value-background;
    height: 1.2em;
    border-radius: 3px;
    padding: 0.3em;
    background: #f3f3f3;
    overflow: hidden;
    box-shadow: inset 0 0 0.5em rgba(0, 0, 0, 0.03);

    &::-webkit-progress-bar {
      background: transparent;
    }
    &::-webkit-progress-value {
      background: $progress-value-background;
      transition: all 0.3s ease-out;
      border-radius: $progress-value-border-radius;
    }
    &::-moz-progress-bar {
      background: $progress-value-background;
      transition: all 0.3s ease-out;
      border-radius: $progress-value-border-radius;
    }
  }
</style>