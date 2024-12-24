import { Metadata } from "next";

import { ContactInfo } from "./_components/contact-info";
import { ContactMain } from "./_components/contact-main";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us page",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactMain />
      <ContactInfo />
    </>
  );
}
