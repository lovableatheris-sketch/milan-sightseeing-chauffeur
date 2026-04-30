/**
 * Simple obfuscation utility to prevent basic scrapers from harvesting email and phone numbers.
 * Uses a combination of string reversal and Base64 encoding.
 */

/**
 * Encodes a string (reverses it and then Base64 encodes it)
 */
export const obfuscate = (text: string): string => {
  const reversed = text.split("").reverse().join("");
  return btoa(reversed);
};

/**
 * Decodes an obfuscated string
 */
export const deobfuscate = (encoded: string): string => {
  try {
    const reversed = atob(encoded);
    return reversed.split("").reverse().join("");
  } catch (e) {
    console.error("Failed to deobfuscate:", e);
    return "";
  }
};

/**
 * Hook-like function to handle obfuscated links (e.g., mailto or tel)
 */
export const handleSecureLink = (type: "mailto" | "tel", encoded: string) => {
  const decoded = deobfuscate(encoded);
  window.location.href = `${type}:${decoded}`;
};
