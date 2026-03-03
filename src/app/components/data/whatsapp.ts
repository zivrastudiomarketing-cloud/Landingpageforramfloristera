const WA_NUMBER = "573224238092";

const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const createGeneralWhatsAppLink = (
  message = "Hola, quiero conocer mas sobre sus arreglos florales."
) => buildWhatsAppLink(message);

export const createProductWhatsAppLink = (productName: string) =>
  buildWhatsAppLink(
    `Hola, quiero cotizar un arreglo como: ${productName}. Me ayudas por favor?`
  );

