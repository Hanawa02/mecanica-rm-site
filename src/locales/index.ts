import { createI18n } from "vue-i18n";
import ptBr from "./pt-br";
import type Message from "./interfaces/message.interface";

const messages: Message = {
  "pt-br": ptBr,
};

const i18n = createI18n({
  allowComposition: true,
  availableLocales: Object.keys(messages),
  locale: "pt-br",
  fallbackLocale: "pt-br",
  messages: messages as any,
});

export default i18n;
