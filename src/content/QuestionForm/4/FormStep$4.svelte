<script>
  import { createEventDispatcher } from 'svelte';
  import FormChooseItem from "@Components/FormChooseItem";
  import { ValidationError } from "@Root/Errors";

  const dispatch = createEventDispatcher();
  const QUESTION_TEXT = "Куда вы хотели бы отводить очищенную воду?";
  const MESSAGE_TEXT = "Отведение воды";
  const ERROR_TEXT = "Выберите тип отведения воды"
  export let required = true;
  export let result = null;
  export let error = null;
  export {
    QUESTION_TEXT as question,
    MESSAGE_TEXT as title,
  }

  const questionData = [
    { value: "В дренажную систему" },
    { value: "В колодец для технических нужд" },
    { value: "В ливневую канаву" },
    { value: "На грунт" },
    { value: "Овраг" },
    { value: "Затрудняюсь ответить" },
  ]

  export function getAnswer() {
    if (required && result === null) {
      error = new ValidationError(ERROR_TEXT)
      return { error }
    }
    return {
      question: QUESTION_TEXT,
      answer: result,
      title: MESSAGE_TEXT
    };
  }
  function onAnswer(){
    dispatch('answer', {
			result
		});
  }
</script>

<section>
  <h3 class="title">{QUESTION_TEXT}</h3>
  <div class="choose-block">
    {#each questionData as item}
      <FormChooseItem
        value={item.value}
        bind:group={result}
        on:change={onAnswer}
      >
          {item.value}
      </FormChooseItem>
    {/each}
  </div>
  {#if required && error}
    <div class="error">
      {ERROR_TEXT}
    </div>
  {/if}
</section>

<style lang="scss">
  .title {
    font-size: 1.4em;
    font-weight: bold;
    margin: 0 0 1em;
    text-transform: uppercase;
  }

  .choose-block {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4;
  }

  .error {
    color: #f76829;
    margin: 1em 0 0;
  }
</style>