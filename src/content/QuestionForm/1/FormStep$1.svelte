<script>
  import { createEventDispatcher } from 'svelte';
  import FormChooseItem from "@Components/FormChooseItem";
  import { ValidationError } from "@Root/Errors";

  // Изображения
  import img_cottage from "./img_cottage.jpg";
  import img_house from "./img_house.jpg";
  import img_company from "./img_company.jpg";
  import img_hotel from "./img_hotel.jpg";
  import img_other from "./img_other.jpg";

  const dispatch = createEventDispatcher();
  const QUESTION_TEXT = "Выберите тип объекта";
  const MESSAGE_TEXT = "Тип объекта";
  const ERROR_TEXT = "Выберите необходимый тип"
  const required = true;
  export let result = null;
  export let error = null;
  export {
    QUESTION_TEXT as question,
    MESSAGE_TEXT as title,
  }

  const questionData = [
    { value: "Для дачи", img: img_cottage, imgAlt: "Дача" },
    { value: "Для дома", img: img_house, imgAlt: "Дом" },
    { value: "Для предприятия", img: img_company, imgAlt: "Предприятие" },
    { value: "Для гостиницы", img: img_hotel, imgAlt: "Гостиница" },
    { value: "Другое", img: img_other, imgAlt: "Жилье" },
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
        <div class="step_1-card">
          <img class="step_1-card-img" src={item.img} alt={item.imgAlt} width="200" height="200">
          <span class="step_1-card-label">{item.value}</span>
        </div>
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
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4;

      .step_1-card {
        text-align: center;

        &-img {
          display: block;
          border-radius: 3px;
          margin: 0 auto 1em;
        }

        &-label {
          display: block;
          font-weight: bold;
          font-size: 0.9em;
        }
      }
  }

  .error {
    color: #f76829;
    margin: 1em 0 0;
  }
</style>