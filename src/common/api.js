import axios from "axios";

function normalizeBaseUrl(value) {
  if (!value || value === "undefined") return "";
  return value.replace(/\/+$/, "");
}

// CRA env vars are baked at build time; when missing we fall back to local dev backend.
const LOCAL_FALLBACK_BASE_URL = "http://localhost:3001/api";
const PROD_FALLBACK_BASE_URL = "https://mora-badminton.vercel.app/api";

function getDefaultBaseUrl() {
  if (typeof window === "undefined") return LOCAL_FALLBACK_BASE_URL;
  const host = window.location?.hostname || "";
  const isFirebaseHosting = host.endsWith(".web.app") || host.endsWith(".firebaseapp.com");
  return isFirebaseHosting ? PROD_FALLBACK_BASE_URL : LOCAL_FALLBACK_BASE_URL;
}

const baseURL =
  normalizeBaseUrl(process.env.REACT_APP_API_URL) || getDefaultBaseUrl();

export const api = axios.create({ baseURL });
export const API_BASE_URL = baseURL;
