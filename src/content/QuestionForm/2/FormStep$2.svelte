<script>
  import { createEventDispatcher } from 'svelte';
  import FormChooseItem from "@Components/FormChooseItem";
  import { ValidationError } from "@Root/Errors";

  // Изображения
  import img_users_1 from "./img_users_1.svg";
  import img_users_3 from "./img_users_3.svg";
  import img_users_5 from "./img_users_5.svg";
  import img_users_10 from "./img_users_10.svg";

  const dispatch = createEventDispatcher();
  const QUESTION_TEXT = "Сколько человек проживает в доме?";
  const MESSAGE_TEXT = "Количество человек в доме";
  const ERROR_TEXT = "Выберите расчитываемое количество"
  export let required = true;
  export let result = null;
  export let error = null;
  export {
    QUESTION_TEXT as question,
    MESSAGE_TEXT as title,
  }

  const questionData = [
    { value: "1-2 человека", img: img_users_1, imgAlt: "1-2 человека", imgStyle: "height: 1.5em" },
    { value: "3-4 человек", img: img_users_3, imgAlt: "3-4 человек", imgStyle: "height: 2em" },
    { value: "5-10 человек", img: img_users_5, imgAlt: "5-10 человек", imgStyle: "height: 2.5em" },
    { value: "10 и более", img: img_users_10, imgAlt: "10 и более человек", imgStyle: "height: 3em" },
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
          <span class="step_2-card-label">{item.value}</span>
          <img class="step_2-card-img" src={item.img} alt="{item.imgAlt}" style={item.imgStyle}>
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

    .step_2-card {

      &-img {
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 1.5em;
        height: 1.5em;
      }

      &-label {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .error {
    color: #f76829;
    margin: 1em 0 0;
  }
</style>