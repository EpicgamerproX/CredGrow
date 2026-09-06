"use client";

import { useEffect, useState } from "react";

type Preferences = {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

const defaultPreferences: Preferences = {
  analytics: false,
  marketing: false,
  functional: false
};

const storageKey = "credgrow-cookie-preferences";

function readStoredPreferences() {
  if (typeof window === "undefined") {
    return null;
  }

  const saved = window.localStorage.getItem(storageKey);
  return saved ? (JSON.parse(saved) as Preferences) : null;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);

  useEffect(() => {
    const saved = readStoredPreferences();
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreferences(saved);
    } else {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    function openPreferences() {
      setVisible(true);
      setManaging(true);
    }
    window.addEventListener("credgrow:cookie-preferences", openPreferences);
    return () => window.removeEventListener("credgrow:cookie-preferences", openPreferences);
  }, []);

  function save(next: Preferences) {
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    setPreferences(next);
    setVisible(false);
    setManaging(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <aside role="dialog" className="cookie-banner" aria-labelledby="cookie-banner-title">
      <strong id="cookie-banner-title">Cookie preferences</strong>
      <p>
        We use cookies to improve your experience, understand website usage and provide relevant
        functionality. Non-essential categories remain off until you choose otherwise.
      </p>
      {managing ? (
        <div className="preference-panel">
          <div className="toggle-row">
            <span>Strictly Necessary</span>
            <strong>Always Active</strong>
          </div>
          {(["analytics", "marketing", "functional"] as const).map((key) => (
            <label className="toggle-row" key={key}>
              <span>{key[0].toUpperCase() + key.slice(1)}</span>
              <input
                type="checkbox"
                checked={preferences[key]}
                onChange={(event) =>
                  setPreferences((current) => ({ ...current, [key]: event.target.checked }))
                }
              />
            </label>
          ))}
        </div>
      ) : null}
      <div className="cookie-actions">
        <button
          className="button"
          type="button"
          onClick={() => save({ analytics: true, marketing: true, functional: true })}
        >
          Accept All
        </button>
        <button className="button-secondary" type="button" onClick={() => save(defaultPreferences)}>
          Reject Non-Essential
        </button>
        {managing ? (
          <button className="button-secondary" type="button" onClick={() => save(preferences)}>
            Save Preferences
          </button>
        ) : (
          <button className="button-secondary" type="button" onClick={() => setManaging(true)}>
            Manage Preferences
          </button>
        )}
      </div>
    </aside>
  );
}
