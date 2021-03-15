<script context="module">
  let checkFuncList = new Set();

  export function checkAll() {
    return [...checkFuncList].map( fn => fn() );
  }
</script>

<script>
  import { onDestroy } from 'svelte';
  import { RequiredError } from "@Root/Errors";

  export let name;
  export let label;
  export let value = "";
  export let placeholder = "";
  export let pattern = [];
  let errorArray = [];
  let hasError = false;
  let isFirstInputFlag = true;

  $: hasError = (() => {
    if (isFirstInputFlag) return false;
    return errorArray.find(isError) ? true : false;
  })();

  checkFuncList.add(checkField);

  onDestroy(() => {
		checkFuncList.delete(checkField);
	});

  export function checkField() {
    errorArray = pattern.map(item=>{
      if (item.reg.test(value)) {
        return null;
      } else {
        return new RequiredError(item.message);
      }
    });
    return errorArray;
  }

  function checkInputValue() {
    if (isFirstInputFlag) return;
    checkField();
  }

  function disableInputFlag() {
    isFirstInputFlag = false;
  }

  function isError(item) {
    return item instanceof RequiredError
  }
</script>

<label class="input-block {$$props.class || ''}">
  {#if label}<span class="input-label">{@html label}</span>{/if}
  <input
    bind:value={value}
    class="input-field {hasError ? '__error' : ''}"
    name={name}
    type="text"
    placeholder={placeholder}
    on:input={checkInputValue}
    on:blur|once ={disableInputFlag}
    on:blur={checkField}
  >

  {#each errorArray.filter(isError).slice(0, 1) as error, index}
      <p class="input-error">{@html error.message}</p>
  {/each}
</label>

<style lang="scss">
  .input-block {
    display: block;
  }

  .input-label {
    display: block;
    margin: 0 0 0.25em;
  }

  .input-field  {
    width: 100%;

    &.__error {
      border-color: #f76829;
    }
    &:invalid {
      box-shadow: none;
    }
  }

  .input-error {
    color: #f00;
    font-size: 0.9em;
    padding: 0.1em;
    margin: 0.2em 0 0;
  }
</style>