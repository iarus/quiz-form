<script context="module">
  let callbackFuncList = new Set();

  export function checkAll() {
    return [...callbackFuncList].map( fn => fn() );
  }
</script>

<script>
  import { onDestroy } from 'svelte';
  import { RequiredError } from "@Root/Errors";

  export let name;
  export let label;
  export let checked = false;
  export let error;
  export let required = false;
  export let requiredText = "The field is not correct";

  export function checkField() {
    if ( required && !checked ) {
      error = new RequiredError(requiredText)
    } else {
      error = null;
    }
    return error;
  }

  callbackFuncList.add(checkField);

  onDestroy(() => {
		callbackFuncList.delete(checkField);
	});
</script>

<label class="checkbox-block {$$props.class || ''}">
  <input
    type="checkbox"
    name={name}
    class="checkbox-input"
    bind:checked={checked}
    on:change={checkField}
  >
  <div class="checkbox-label">
    <span class="checkbox-label_text">{@html label}</span>
    {#if error}
      <span class="checkbox-error">{@html requiredText}</span>
    {/if}
  </div>
</label>

<style lang="scss">
  .checkbox {
    &-block {
      display: flex;
      align-items: flex-start;
    }

    &-input {
      margin: 0.2em 0.6em 0 0;
    }

    &-label {
      overflow: hidden;
    }

    &-label_text {
      font-size: 0.9em;
      display: block;
    }

    &-error {
      color: #f00;
      font-size: 0.9em;
      padding: 0.1em;
      margin-top: 0.5em;
      display: block;
    }
  }

</style>