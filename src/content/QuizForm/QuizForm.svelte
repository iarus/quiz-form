<script>
  import { fade } from 'svelte/transition';

  import DiscountInformer from "@Content/DiscountInformer";
  import FormProgressBar from "@Content/FormProgressBar";
  import QuestionForm from "@Content/QuestionForm";
  import UserForm from "@Content/UserForm";
  import SendFrame from "@Content/SendFrame";

  let currentStep;
  let totalStep;
  let isFinish = false;
  let discount = 0;
  const maxDiscount = 10;
  let questionFormHTMLResult;
  let userFormHTMLResult;

  $: discount = Number((maxDiscount * (currentStep / totalStep)).toFixed()) + " %";
</script>

<div class="main">
  {#if !isFinish}
    <FormProgressBar value={currentStep} max={totalStep} />
    <QuestionForm bind:currentStep bind:totalStep bind:isFinish bind:getHTMLResult={questionFormHTMLResult} />
  {:else}
    <div in:fade={{duration:300}} >
      <SendFrame quizData={[questionFormHTMLResult, userFormHTMLResult]} discount={discount} >
        <UserForm bind:getHTMLResult={userFormHTMLResult} />
      </SendFrame>
    </div>
  {/if}

  <div class="discount-block">
    <DiscountInformer discount={discount} isEnd={isFinish} />
  </div>
</div>

<style src="./QuizForm.scss"></style>