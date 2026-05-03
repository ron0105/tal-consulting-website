import type { Metadata } from "next";
import HWWHero from "@/components/how-we-work/HWWHero";
import HWWSteps from "@/components/how-we-work/HWWSteps";
import HWWIdeas from "@/components/how-we-work/HWWIdeas";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Two paths, one way of thinking. See how we work with running businesses (3-phase process) and how we help founders validate new ideas (6-stage framework).",
};

export default function HowWeWork() {
  return (
    <>
      <HWWHero />
      <HWWSteps />
      <HWWIdeas />
    </>
  );
}
