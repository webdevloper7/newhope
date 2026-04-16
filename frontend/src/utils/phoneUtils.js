/**
 * Utility to format phone numbers for WhatsApp and Tel links.
 * Ensures country code '91' is handled correctly.
 */

export const formatWhatsAppNumber = (phone) => {
  if (!phone) return '918600584199';
  
  // Remove all non-numeric characters
  const cleaned = phone.toString().replace(/[^0-9]/g, '');
  
  // If it starts with 91 and has 12 digits, assume it's already correct
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned;
  }
  
  // If it's a 10-digit number, prepend 91
  if (cleaned.length === 10) {
    return `91${cleaned}`;
  }
  
  // Fallback for other cases - just return cleaned if 10+ digits, otherwise default
  return cleaned.length >= 10 ? cleaned : '918600584199';
};

export const formatTelLink = (phone) => {
  if (!phone) return '8600584199';
  const cleaned = phone.toString().replace(/[^0-9]/g, '');
  // Tel links are usually fine without country code locally, but better with it
  return cleaned.length === 10 ? `+91${cleaned}` : `+${cleaned}`;
};
