"use client";

import { useState } from "react";
import type { FieldConfig, FormKind } from "@/lib/forms";

type LeadFormProps = {
  kind: FormKind;
  fields: FieldConfig[];
  submitLabel: string;
};

export function LeadForm({ kind, fields, submitLabel }: LeadFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("");
    setErrors({});

    const response = await fetch(`/api/${kind}`, {
      method: "POST",
      body: new FormData(event.currentTarget)
    });
    const result = (await response.json()) as { ok: boolean; errors?: Record<string, string> };

    setPending(false);
    if (!result.ok) {
      setErrors(result.errors || { form: "Please review the form and try again." });
      setStatus("Please review the highlighted fields.");
      return;
    }

    event.currentTarget.reset();
    setStatus("Thank you. Your enquiry has been received.");
  }

  return (
    <div className="form-shell">
      <form className="lead-form" onSubmit={onSubmit} noValidate>
        <input type="text" name="company" tabIndex={-1} autoComplete="off" hidden />
        <div className="form-grid">
          {fields.map((field) => (
            <div className={`field ${field.full ? "full" : ""}`} key={field.name}>
              <label htmlFor={field.name}>
                {field.label}
                {field.required ? " *" : ""}
              </label>
              {field.type === "textarea" ? (
                <textarea 
                  id={field.name} 
                  name={field.name} 
                  aria-invalid={Boolean(errors[field.name])} 
                  required={field.required}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                />
              ) : field.type === "select" ? (
                <select 
                  id={field.name} 
                  name={field.name} 
                  aria-invalid={Boolean(errors[field.name])} 
                  defaultValue=""
                  required={field.required}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                >
                  <option value="">Select</option>
                  {field.options?.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type || "text"}
                  aria-invalid={Boolean(errors[field.name])}
                  required={field.required}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                />
              )}
              {errors[field.name] ? (
                <span id={`${field.name}-error`} className="field-error" role="alert">
                  {errors[field.name]}
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <label className="checkbox-label">
          <input type="checkbox" name="consent" />
          <span>
            I agree to CredGrow using the information provided to respond to my enquiry. I
            have read the Privacy Policy.
          </span>
        </label>
        {errors.consent ? <span className="field-error" role="alert">{errors.consent}</span> : null}
        <label className="checkbox-label">
          <input type="checkbox" name="marketingConsent" />
          <span>I would like to receive updates and relevant communications from CredGrow.</span>
        </label>
        {errors.form ? <span className="field-error" role="alert">{errors.form}</span> : null}
        {status ? (
          <div className="form-status" role="status">
            {status}
          </div>
        ) : null}
        <button className="button" type="submit" disabled={pending}>
          {pending ? "Submitting..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
