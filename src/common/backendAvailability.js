import { Modal } from "antd";
import { api } from "./api";

const DEFAULT_GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfd-x3NrpXL-w0yw7Fatxi9gGgNF6WBSncI-FybkAPdQo4b6w/viewform?usp=header";

const GOOGLE_FORM_URL =
  process.env.REACT_APP_REG_FALLBACK_GOOGLE_FORM || DEFAULT_GOOGLE_FORM_URL;

function isLikelyNetworkError(error) {
  // Axios: when the browser blocks the request (CORS) or network is down,
  // `error.response` is undefined.
  if (!error) return false;
  if (!error.response) return true;
  return false;
}

// Non-blocking preflight health check:
// - `true`: backend explicitly healthy
// - `false`: backend responded but is unhealthy (or returned non-200)
// - `null`: unknown (network/CORS error) -> don't block submit; let submit try once
export async function preflightBackendHealth({ timeoutMs = 4000 } = {}) {
  try {
    const res = await api.get("/health", {
      timeout: timeoutMs,
      validateStatus: () => true,
    });

    return Boolean(res?.status === 200 && res?.data?.ok === true);
  } catch (error) {
    // Unknown: might be temporary network/CORS issue, don't block submit up-front.
    if (isLikelyNetworkError(error)) return null;
    return null;
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
