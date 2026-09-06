"use client";

export function CookiePreferencesButton() {
  return (
    <button
      className="button"
      type="button"
      onClick={() => window.dispatchEvent(new Event("credgrow:cookie-preferences"))}
    >
      Open Cookie Preferences
    </button>
  );
}
