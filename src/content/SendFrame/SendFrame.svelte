<script>
  import DataSender from "@Components/DataSender";

  const FORM_ID = "quiz_form";
  let sendDataHandler;
  export let quizData = [];
  export let discount = "0 %";

  function createFormData(data){
    let formData = new FormData();
    for (let [prop, value] of data) {
      if(value == undefined) return;
      formData.append(prop, value);
    }
    return formData;
  }
  function sendQuiz(){
    let messageArray = quizData.map(item=>{
      if (typeof(item) == "function") return item();
      return item;
    });

    if (messageArray.length == 0 || messageArray.includes(undefined)) return;
    let sendData = createFormData([
          ["form_id", FORM_ID],
          ["message", messageArray.join("")],
        ]);
    sendDataHandler(sendData);
  }
</script>

<section>
  <div class="title_block">
    <h3 class="title">Вы успешно ответили на все вопросы, менеджер уже готовит смету</h3>
    <p class="info">
      Заполните форму и наш менеджер свяжется с вами,
      чтобы рассказать о подходящих вариантах и итоговой стоимости.
    </p>
  </div>
  <div class="form_block">
    <div class="form_block-wrapper">
      <slot></slot>

      <DataSender bind:sendData={sendDataHandler}>
        <p slot="progress" class="send-informer-status __sending">
          Идет отправка ...
        </p>
        <p slot="netError" class="send-informer-status __error">
          Неполадки при отправке. Попробуйте позже.
        </p>
        <p slot="success" class="send-informer-status __success">
          Ваша заявка отправлена
        </p>
      </DataSender>

      <button class="btn send-btn" on:click={sendQuiz}>
        Получить смету на септик и скидку {discount}
      </button>
    </div>
  </div>
</section>

<style src="./SendFrame.scss"></style>