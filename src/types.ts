export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  label: string; // "ON DEMAND AVAILABLE"
  brandCategory?: string;
  highlight?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  urduName?: string;
  description: string;
  image: string;
  icon: string;
}

export const OFFICIAL_PHONE_DISPLAY = "0330-5672800";
export const OFFICIAL_WHATSAPP_NUMBER = "923305672800";
export const STORE_ADDRESS = "Main Simly Dam Road near Gujjar Battery Centre, Bhara Kahu, Islamabad";

export const DEFAULT_WHATSAPP_MESSAGE = 
  "Assalam-o-Alaikum, mujhe New Talha Electronic se ek product on demand chahiye (Instalment / Cash Easy Plan). Please availability aur plan ke bare mein batayein.";

export function createWhatsAppLink(customMessage?: string): string {
  const message = customMessage && customMessage.trim().length > 0 
    ? customMessage 
    : DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createProductWhatsAppLink(productName: string): string {
  const message = `Assalam-o-Alaikum, mujhe New Talha Electronic se "${productName}" on demand chahiye (Instalment / Cash Easy Plan). Please availability ke bare mein batayein.`;
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createCategoryWhatsAppLink(categoryName: string): string {
  const message = `Assalam-o-Alaikum, mujhe New Talha Electronic se ${categoryName} category mein product on demand chahiye (Instalment / Cash Easy Plan). Please availability ke bare mein batayein.`;
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
