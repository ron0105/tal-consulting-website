"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const phases = [
  {
    n: "01",
    title: "Understand",
    duration: "Week 1–2",
    description:
      "We spend time with your business, your team, and your customers. We ask the right questions and listen before we recommend anything.",
    outputs: ["Clear picture of how the business runs", "Agreement on what we are solving", "Prioritised starting point"],
  },
  {
    n: "02",
    title: "Structure",
    duration: "Week 2–4",
    description:
      "We design clear, practical systems that fit how your business actually works. Simple enough for anyone to follow.",
    outputs: ["Documented processes your team can own", "Clear roles and responsibilities", "Communication standards across touchpoints"],
  },
  {
    n: "03",
    title: "Guide",
    duration: "Ongoing",
    description:
      "We stay involved while your team adopts the new systems, refining as needed until everything runs smoothly.",
    outputs: ["Team trained and confident", "Systems refined through real use", "You step back knowing things are covered"],
  },
];

const faqs = [
  {
    q: "How long does an engagement take?",
    a: "A one-time project typically takes 4–8 weeks. Ongoing support is month-to-month with no long-term commitment.",
  },
  {
    q: "Do we need to prepare anything?",
    a: "Nothing formal. Come with an honest description of where things are. We take it from there.",
  },
  {
    q: "Remote or in person?",
    a: "Both. Most work is remote. We can work in person for clients in Mumbai or nearby.",
  },
  {
    q: "Do you work with international companies?",
    a: "Yes. We work globally and discuss scope and timelines after a short conversation to understand your situation.",
  },
];

export default function HWWSteps() {
  return (
    <>
      <section id="for-businesses" className="padding-section bg-bg-secondary border-t border-border-subtle">
        <div className="layout-grid">
          <AnimateOnScroll className="mb-16">
            <span className="label-eyebrow mb-8 block text-accent">For Businesses</span>
            <h2 className="text-section-title">
              Three phases.
              <br />
              <span className="text-muted">One clear outcome.</span>
            </h2>
            <p className="text-xl text-body mt-6 max-w-2xl">
              When your business is already running but feels messy or hard to grow, we come in and build the clarity it needs.
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-px bg-border-subtle border border-border-subtle">
            {phases.map((phase, i) => (
              <AnimateOnScroll key={phase.n} delay={i * 0.08}>
                <div className="bg-background p-8 md:p-12 grid md:grid-cols-[200px_1fr_1fr] gap-8">
                  <div>
                    <span className="section-num block mb-2">{phase.n}</span>
                    <h3 className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                      {phase.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {phase.duration}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {phase.description}
                  </p>
                  <div>
                    <p className="label-eyebrow mb-4">You get</p>
                    <ul className="flex flex-col gap-2.5">
                      {phase.outputs.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-sm font-semibold leading-snug" style={{ color: "var(--text-body)" }}>
                          <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--text-primary)" }}>✓</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="padding-section bg-background border-t border-border-subtle">
        <div className="layout-grid">
          <AnimateOnScroll className="mb-16">
            <span className="label-eyebrow mb-8 block">Common questions</span>
            <h2 className="text-section-title">
              Good to know
              <br />
              <span className="text-muted">before we start.</span>
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-px bg-border-subtle border border-border-subtle mb-16">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="bg-background p-8 md:p-10 grid md:grid-cols-2 gap-6">
                  <p className="text-lg font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
                    {faq.q}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {faq.a}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work-with-us" className="btn-primary" style={{ padding: "14px 36px" }}>
                Start the conversation
              </Link>
              <Link href="/for-businesses" className="btn-ghost" style={{ padding: "14px 36px" }}>
                See what we do for businesses
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
