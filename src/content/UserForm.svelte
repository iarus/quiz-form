<script>
  import { ValidationError } from "@Root/Errors";
  import InputText, { checkAll as checkAllInputText }  from "@Components/InputText";
  import InputCheckBox, { checkAll as checkAllCheckBox } from "@Components/InputCheckBox";

  let formElement;
  let submitForm = getFormData;

  function getFormData() {
    if ( !hasError(checkAllFields()) ) {
      return [... new FormData(formElement)]
    }
  }
  function checkAllFields() {
    return [...checkAllInputText(), ...checkAllCheckBox()];
  }
  function hasError(list) {
    list = list.flat();
    return list.find(item => item instanceof ValidationError) ? true : false;
  }
  export function getHTMLResult() {
    let resArr = getFormData();
    if (!Array.isArray(resArr)) return;
    return resArr.reduce((acc, [name, value]) => {
      if (typeof(value) === "string" && value !== "") {
        return `${acc}<p><b>${name}:</b> ${value}</p>`
      } else {
        return acc;
      }
    }, "");
  }
</script>

<form class="user-form" bind:this={formElement} on:submit|preventDefault={getFormData}>
  <div class="input">
    <InputText
      name="Имя"
      label="Ваше имя"
      pattern={[
        {
          reg: /.+/,
          message: "Укажите ваше имя"
        }
      ]}
      placeholder="Иван Петров"
    />
  </div>

  <div class="input">
    <InputText
      name="Телефон"
      label="Ваш телефон"
      pattern={[
        {
          reg: /.+/,
          message: "Заполните номер мобильного телефона"
        },
        {
          reg: /^((8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{5,10}$/,
          message: "Недопустимый формат телефона"
        }
      ]}
      placeholder="+7 (000) 00-00-000"
    />
  </div>

  <div class="checkbox">
    <InputCheckBox
      label="
        Я даю согласие на обработку моих персональных данных в соответствии с
        <a href='#' target='_blank'>условиями</a>"
      requiredText="Необходимо ваше согласие на обработку персональных данных"
      required={true}
    />
  </div>
</form>

<style>
  .user-form {
    display: block;
  }

  .input {
    margin: 1em 0 0;
  }

  .checkbox {
    margin: 1em 0 0;
  }
</style>