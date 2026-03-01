import { CONTACT_INFO } from '../constants/contact';

export function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}

export function generateWhatsAppLink(message: string): string {
  const encoded = encodeWhatsAppMessage(message);
  return `https://wa.me/${CONTACT_INFO.phone.whatsapp}?text=${encoded}`;
}

export function generateWhatsAppInquiryLink(
  name: string,
  phone: string,
  email: string,
  message: string
): string {
  const inquiryMessage = `My name is: ${name}\nMy phone: ${phone}\nMy E-mail: ${email}\nAnd the message is: ${message}`;
  return generateWhatsAppLink(inquiryMessage);
}

export function generateGoogleMapsLink(): string {
  return CONTACT_INFO.location.mapsUrl;
}

export function getPhoneLink(): string {
  return generateWhatsAppLink(`Hi, I'm interested in your services.`);
}

export function getEmailLink(): string {
  return `mailto:${CONTACT_INFO.email}`;
}

export function getLocationLink(): string {
  return generateGoogleMapsLink();
}
