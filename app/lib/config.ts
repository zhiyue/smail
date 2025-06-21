// Site configuration
export const getConfig = () => {
  // For Cloudflare Workers, environment variables are available on the global object
  // In development, we can use Vite's import.meta.env
  let domain = 'deploy.cv';
  let protocol = 'https';
  
  // Try to get from Vite env (development)
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    domain = import.meta.env.VITE_DOMAIN || domain;
    protocol = import.meta.env.VITE_PROTOCOL || protocol;
  }
  
  // Try to get from global (Cloudflare Workers production)
  if (typeof globalThis !== 'undefined') {
    // @ts-ignore - Cloudflare Workers environment variables
    domain = globalThis.DOMAIN || domain;
    // @ts-ignore - Cloudflare Workers environment variables
    protocol = globalThis.PROTOCOL || protocol;
  }
  
  return {
    // Domain configuration
    domain,
    siteUrl: `${protocol}://${domain}`,
    
    // Email addresses
    supportEmail: `support@${domain}`,
    privacyEmail: `privacy@${domain}`,
    legalEmail: `legal@${domain}`,
    
    // Generate temporary email
    generateTempEmail: (prefix: string) => `${prefix}@${domain}`,
  };
};

// Export individual config values for convenience
export const config = getConfig();