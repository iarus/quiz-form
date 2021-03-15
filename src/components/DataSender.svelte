<script>
  import { NetworkError } from "@Root/Errors";

  export let timeout = 10000;
  export let status;
  export let url = "";
  export let formData;

  const STATUS_PROGRESS = "progress";
  const STATUS_SUCCESS = "success";
  const STATUS_NET_ERROR = "net_error";

  export function sendData(data = formData) {
    if (!data) return;

    status = STATUS_PROGRESS;

    Promise.race([
      fetch(url, {
        method: "POST",
        body: data,
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new NetworkError("Request timed out"));
        }, timeout);
      }),
    ])
      .then((response) => {
        if (!response.ok) throw new NetworkError("No response");
        status = STATUS_SUCCESS;
        return response.text();
      })
      .catch((err) => {
        if (err instanceof NetworkError || err instanceof TypeError) {
          status = STATUS_NET_ERROR;
        } else {
          throw err;
        }
      });
  }
</script>

{#if status === STATUS_PROGRESS }
  <slot name="progress">Идет отправка ...</slot>
{/if}

{#if status === STATUS_SUCCESS }
  <slot name="success">Ваша заявка отправлена</slot>
{/if}

{#if status === STATUS_NET_ERROR }
  <slot name="netError">Неполадки при отправке. Попробуйте позже.</slot>
{/if}