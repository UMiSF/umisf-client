import { Modal } from "antd";
import { api } from "./api";

const DEFAULT_GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfd-x3NrpXL-w0yw7Fatxi9gGgNF6WBSncI-FybkAPdQo4b6w/viewform?usp=header";

const GOOGLE_FORM_URL =
  process.env.REACT_APP_REG_FALLBACK_GOOGLE_FORM || DEFAULT_GOOGLE_FORM_URL;

const CIRCUIT_BREAKER_KEY = "umisf_backend_down_until";

function isLikelyNetworkError(error) {
  // Axios: when the browser blocks the request (CORS) or network is down,
  // `error.response` is undefined.
  if (!error) return false;
  if (!error.response) return true;
  return false;
}

export async function isBackendAvailable({ timeoutMs = 5000 } = {}) {
  const now = Date.now();
  const downUntil = Number(localStorage.getItem(CIRCUIT_BREAKER_KEY) || "0");
  if (downUntil && downUntil > now) return false;

  try {
    const res = await api.get("/health", {
      timeout: timeoutMs,
      validateStatus: () => true,
    });

    if (res?.status === 200 && res?.data?.ok === true) return true;

    // Backend responded but isn't healthy (or behind proxy returning non-200).
    localStorage.setItem(CIRCUIT_BREAKER_KEY, String(now + 60_000));
    return false;
  } catch (error) {
    if (isLikelyNetworkError(error)) {
      localStorage.setItem(CIRCUIT_BREAKER_KEY, String(now + 60_000));
    }
    return false;
  }
}

export function showBackendDownModal({ title = "Registration temporarily unavailable" } = {}) {
  Modal.confirm({
    title,
    content:
      "The registration server is busy or unavailable right now. You can submit using the Google Form, and we will process it when the system is back online.",
    okText: "Open Google Form",
    cancelText: "Close",
    onOk() {
      window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    },
  });
}

