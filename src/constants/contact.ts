import { obfuscate, deobfuscate } from "../utils/obfuscation";

// Obfuscated values generated via node script
export const OBFUSCATED_PHONE = "NzA5MCAzNDEgOTgzIDkzKw==";
export const OBFUSCATED_EMAIL = "bW9jLmxpYW1nQDIyMDJpdHRhaWxnYXRzYW1vaHQ=";

export const CONTACT_INFO = {
  get phone() {
    return deobfuscate(OBFUSCATED_PHONE);
  },
  get email() {
    return deobfuscate(OBFUSCATED_EMAIL);
  },
  whatsappLink(message: string) {
    const cleanPhone = this.phone.replace(/\s/g, "").replace("+", "");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }
};
