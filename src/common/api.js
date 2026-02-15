import axios from "axios";

function normalizeBaseUrl(value) {
  if (!value || value === "undefined") return "";
  return value.replace(/\/+$/, "");
}

// CRA env vars are baked at build time. Set REACT_APP_API_URL to your backend (e.g. Vercel) in production.
const LOCAL_FALLBACK_BASE_URL = "http://localhost:3001/api";
const baseURL =
  normalizeBaseUrl(process.env.REACT_APP_API_URL) || LOCAL_FALLBACK_BASE_URL;

export const api = axios.create({ baseURL });
export const API_BASE_URL = baseURL;
