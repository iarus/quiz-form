<script>
  import { fade } from 'svelte/transition';

  import Question$1 from "./1";
  import Question$2 from "./2";
  import Question$3 from "./3";
  import Question$4 from "./4";
  import Question$5 from "./5";

  /*
  Массив будет хранить информацию вида:
  {
    component : компонет вопроса
    check : функция из компанента для проверки ответа
    answer : ответ на вопрос
    title : сопроводительный текст / разяснение ответа
  }
  */
  let questionList = [
    { component: Question$1 },
    { component: Question$2 },
    { component: Question$3 },
    { component: Question$4 },
    { component: Question$5 },
  ];

  let timerId;
  export let currentStep = 0;
  export let totalStep = questionList.length;
  export let isFinish = false;
  let currentItem = questionList[currentStep];

  $: currentItem = questionList[currentStep];
  $: isFinish = currentStep >= totalStep ? true : false;

  function gotoNextFrame() {
    clearTimeout(timerId);
    if (!currentItem.check().error) {
      currentStep++;
    }
  }
  function gotoPrevFrame() {
    currentStep--;
  }
  export function getHTMLResult() {
    if (!isFinish) return;
    return questionList.reduce((acc, item) => {
      return `${acc}<p><b>${item.title}:</b> ${item.answer}</p>`
    }, "")
  }
  function onAnswer() {
    timerId = setTimeout(()=>gotoNextFrame(), 300);
  }
</script>

<div class="items-block">
  {#if currentItem}
    {#key currentStep}
      <div in:fade={{duration:300}} >
        <svelte:component
          this={currentItem.component}
          bind:getAnswer={currentItem.check}
          bind:result={currentItem.answer}
          bind:title={currentItem.title}
          on:answer={onAnswer}
        />
      </div>
    {/key}

    <div class="nav-block">
      {#if currentStep !== 0}
        <button class="btn __goback" on:click="{gotoPrevFrame}">Назад</button>
      {/if}
      <button class="btn" on:click="{gotoNextFrame}">
        {#if currentStep < totalStep-1}Перейти к следующему вопросу{/if}
        {#if currentStep === totalStep-1}Завершить анкету{/if}
      </button>
    </div>
  {/if}
</div>

<style lang="scss">
  .items-block {
    overflow: hidden;
    padding: 2em 5em 2em 2em;

    @media (max-width: 991px) {
      padding: 2em;
    }
    @media (max-width: 575px) {
      padding: 1.5em;
    }
  }

  .nav-block {
    margin: 3em 0 0;
    @apply flex flex-wrap flex-col-reverse sm:flex-row;
  }

  .btn.__goback {
    background: #ececec;
    color: inherit;
    @apply mt-2 sm:mt-0 sm:mr-2;

    &:hover {
      background: #dedede;
    }
  }
</style>
