<script>
  export let name = "";
  export let value = "";
  export let group;
  let input;

  function spaceHandler(e) {
    e.preventDefault();
    if (event.key === " ") {
      group = value
    }
  }
</script>

<label class="item {$$props.class || ''}" tabindex="0" on:keypress|self={spaceHandler}>
  <input
    style="display:none"
    type="radio"
    bind:this={input}
    bind:group={group}
    name={name}
    value={value}
    on:change
  >
  <div class="label_block">
    <slot></slot>
  </div>
</label>

<style lang="scss">
  .item {
    display: block;
  }
  .label_block {
    background: #fff;
    border: 1px solid #efefef;
    padding: 1.5em;
    box-shadow: 0 0.5em 1em rgba(0,0,0,0.03);
    transition: all 0.3s ease-out;
    cursor: pointer;
    border-radius: 3px;
    min-height: 100%;

    &:hover {
      border-color: #888;
    }

    input:checked ~ & {
      border-color: rgba(247, 104, 41, 1);;
      box-shadow: 0 0.5em 1em rgba(247, 104, 41, 0.3), 0 0 0 2px rgba(247, 104, 41, 1);
    }

    &:focus {
      outline: none;
    }
  }
</style>