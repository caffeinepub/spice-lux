/**
 * WhatsApp integration utilities for Spice Lux
 * Opens WhatsApp with prefilled messages for enquiries
 */

// Update this with your actual WhatsApp business number (include country code without + or spaces)
const WHATSAPP_NUMBER = '919876543210'; // Example: India number

/**
 * Opens WhatsApp with a prefilled message
 * @param context - Optional context (e.g., 'bulk enquiry', 'enquiry about Green Cardamom')
 */
export function openWhatsApp(context?: string) {
  let message = 'Hello Spice Lux! ';

  if (context) {
    if (context.toLowerCase().includes('bulk')) {
      message += 'I am interested in bulk orders. Please provide more information.';
    } else if (context.toLowerCase().includes('enquiry about')) {
      message += `I would like to know more about ${context.replace('enquiry about ', '')}.`;
    } else {
      message += `I am interested in ${context}.`;
    }
  } else {
    message += 'I would like to place an order.';
  }

  // URL encode the message
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp deep link format
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Open in new tab/window
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
