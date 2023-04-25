import { Notify } from "quasar";

export function HandleHttpException(data: any) {
  if (Array.isArray(data?.message)) {
    data.message = data.message
      .map((item: string) => item[0].toUpperCase() + item.slice(1))
      .map((item: string) => (data.message.length > 1 ? "- " + item : item))
      .join("<br />");
  }

  Notify.create({ message: data.message ?? "Erro desconhecido", type: "negative", html: true });
}
