import { NextResponse } from "next/server";
import { investorSchema } from "@/lib/forms";
import { formDataToObject, sendLeadEmail, validationErrors } from "@/lib/email";

export async function POST(request: Request) {
  const data = formDataToObject(await request.formData());

  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const parsed = investorSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: validationErrors(parsed.error) }, { status: 400 });
  }

  await sendLeadEmail({
    subject: "CredGrow investor enquiry",
    formName: "Investor enquiry",
    data: parsed.data
  });

  return NextResponse.json({ ok: true });
}
