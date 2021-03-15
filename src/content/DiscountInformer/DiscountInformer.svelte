<script>
  export let isEnd = false;
  export let discount = 0;
</script>

<div class="discount-informer">
  <div class="title-block">
    {#if !isEnd}
      <h4 class="title">Пройдите тест до конца</h4>
      <p class="sub-title">и получите персональную скидку за экономию нашего времени.</p>
    {:else}
      <h4 class="title">Вы успешно прошли тест</h4>
      <p class="sub-title">Спасибо за ответы!</p>
    {/if}
  </div>
  <p class="value-block">
    <span class="title">
      {#if !isEnd}
        Скидка на данный момент:
      {:else}
        Ваша скидка составила:
      {/if}
    </span>
    <span class="value">{discount}</span>
  </p>
</div>

<style src="./DiscountInformer.scss"></style>