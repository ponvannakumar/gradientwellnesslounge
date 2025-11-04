// src/config/api.ts
// For Netlify Functions, we use relative paths
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/.netlify/functions/contact`,
  HEALTH: `${API_BASE_URL}/.netlify/functions/health`,
};

export default API_ENDPOINTS;