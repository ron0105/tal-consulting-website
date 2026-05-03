import type { Metadata } from "next";
import WWUHero from "@/components/work-with-us/WWUHero";
import WWUCallCTA from "@/components/work-with-us/WWUCallCTA";
import WWUForm from "@/components/work-with-us/WWUForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with TAL Consulting. Tell us about your business or idea and we'll get back to you within 48 hours.",
};

export default function WorkWithUs() {
  return (
    <>
      <WWUHero />
      <WWUCallCTA />
      <WWUForm />
    </>
  );
}
