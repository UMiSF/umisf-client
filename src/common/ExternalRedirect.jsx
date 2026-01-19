import React, { useEffect } from "react";

export default function ExternalRedirect({ href, title = "Redirecting…" }) {
  useEffect(() => {
    if (!href) return;
    window.location.href = href;
  }, [href]);

  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <h2 style={{ marginBottom: 12 }}>{title}</h2>
      {href ? (
        <a href={href} style={{ color: "var(--admin-accent)" }}>
          Click here if you are not redirected
        </a>
      ) : (
        <div>Missing redirect URL</div>
      )}
    </div>
  );
}

