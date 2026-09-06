import { NextResponse } from "next/server";
import { contractorSchema } from "@/lib/forms";
import { formDataToObject, sendLeadEmail, validationErrors } from "@/lib/email";

export async function POST(request: Request) {
  const data = formDataToObject(await request.formData());

  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contractorSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: validationErrors(parsed.error) }, { status: 400 });
  }

  await sendLeadEmail({
    subject: "CredGrow contractor enquiry",
    formName: "Contractor enquiry",
    data: parsed.data
  });

  return NextResponse.json({ ok: true });
}
