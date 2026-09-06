import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/forms";
import { formDataToObject, sendLeadEmail, validationErrors } from "@/lib/email";

export async function POST(request: Request) {
  const data = formDataToObject(await request.formData());

  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: validationErrors(parsed.error) }, { status: 400 });
  }

  await sendLeadEmail({
    subject: "CredGrow contact enquiry",
    formName: "Contact enquiry",
    data: parsed.data
  });

  return NextResponse.json({ ok: true });
}
