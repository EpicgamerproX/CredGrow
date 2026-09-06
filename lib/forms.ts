import { z } from "zod";

const email = z.string().trim().email("Enter a valid email address.");
const optionalText = z.string().trim().optional().default("");
const consent = z.literal("on", {
  errorMap: () => ({ message: "Consent is required before submitting." })
});

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  email,
  phone: optionalText,
  organization: optionalText,
  enquiryType: z.string().trim().min(1, "Select an enquiry type."),
  sector: optionalText,
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
  consent,
  marketingConsent: optionalText,
  company: optionalText
});

export const investorSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  organization: z.string().trim().min(2, "Organization is required."),
  designation: optionalText,
  email,
  phone: optionalText,
  investmentInterest: z.string().trim().min(1, "Investment interest is required."),
  investmentRange: optionalText,
  sectorInterest: optionalText,
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
  consent,
  marketingConsent: optionalText,
  company: optionalText
});

export const contractorSchema = z.object({
  companyName: z.string().trim().min(2, "Company name is required."),
  contactPerson: z.string().trim().min(2, "Contact person is required."),
  email,
  phone: z.string().trim().min(7, "Phone is required."),
  website: optionalText,
  industry: z.string().trim().min(1, "Industry is required."),
  capabilities: z.string().trim().min(3, "Capabilities are required."),
  yearsInBusiness: optionalText,
  geographicCoverage: optionalText,
  certifications: optionalText,
  pastProjects: optionalText,
  message: optionalText,
  consent,
  marketingConsent: optionalText,
  company: optionalText
});

export type FormKind = "contact" | "investor" | "contractor";

export type FieldConfig = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "file";
  required?: boolean;
  options?: string[];
  full?: boolean;
};

export const formConfigs: Record<FormKind, FieldConfig[]> = {
  contact: [
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "organization", label: "Organization" },
    {
      name: "enquiryType",
      label: "Enquiry Type",
      type: "select",
      required: true,
      options: ["Investor", "Contractor", "Sector Partnership", "General"]
    },
    {
      name: "sector",
      label: "Sector",
      type: "select",
      options: ["Renewable Energy", "Artificial Intelligence", "Agriculture", "Defence", "Aerospace"]
    },
    { name: "message", label: "Message", type: "textarea", required: true, full: true }
  ],
  investor: [
    { name: "name", label: "Name", required: true },
    { name: "organization", label: "Organization", required: true },
    { name: "designation", label: "Designation" },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "investmentInterest", label: "Investment interest", required: true },
    { name: "investmentRange", label: "Investment range" },
    {
      name: "sectorInterest",
      label: "Sector interest",
      type: "select",
      options: ["Renewable Energy", "Artificial Intelligence", "Agriculture", "Defence", "Aerospace", "Multiple sectors"]
    },
    { name: "message", label: "Message", type: "textarea", required: true, full: true }
  ],
  contractor: [
    { name: "companyName", label: "Company Name", required: true },
    { name: "contactPerson", label: "Contact Person", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "website", label: "Company Website" },
    {
      name: "industry",
      label: "Industry",
      type: "select",
      required: true,
      options: [
        "EPC",
        "Engineering",
        "Civil Infrastructure",
        "Electrical",
        "Mechanical",
        "Technology",
        "Manufacturing",
        "Logistics",
        "Specialised Services"
      ]
    },
    { name: "capabilities", label: "Capabilities", type: "textarea", required: true, full: true },
    { name: "yearsInBusiness", label: "Years in Business" },
    { name: "geographicCoverage", label: "Geographic Coverage" },
    { name: "certifications", label: "Certifications", full: true },
    { name: "pastProjects", label: "Past Projects", type: "textarea", full: true },
    { name: "message", label: "Message", type: "textarea", full: true }
  ]
};
