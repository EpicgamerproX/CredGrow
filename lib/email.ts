import { Resend } from "resend";

type SendLeadEmailArgs = {
  subject: string;
  formName: string;
  data: Record<string, string>;
};

export async function sendLeadEmail({ subject, formName, data }: SendLeadEmailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.info(`[${formName}] lead received without email configuration`, data);
    return { configured: false };
  }

  const resend = new Resend(apiKey);
  const rows = Object.entries(data)
    .filter(([key]) => key !== "company")
    .map(([key, value]) => `<tr><th align="left">${key}</th><td>${value || "-"}</td></tr>`)
    .join("");

  await resend.emails.send({
    from,
    to,
    subject,
    html: `<h1>${formName}</h1><table cellpadding="8" cellspacing="0">${rows}</table>`
  });

  return { configured: true };
}

export function formDataToObject(formData: FormData) {
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
  );
}

export function validationErrors(error: unknown) {
  if (typeof error === "object" && error && "flatten" in error) {
    const flattened = (error as { flatten: () => { fieldErrors: Record<string, string[]> } }).flatten();
    return Object.fromEntries(
      Object.entries(flattened.fieldErrors).map(([key, value]) => [key, value[0] || "Invalid value."])
    );
  }

  return { form: "Unable to submit this form." };
}
