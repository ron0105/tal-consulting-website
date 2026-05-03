"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const services = [
  {
    num: "1",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Team & Work Clarity",
    weDo: ["Clear roles", "Simple processes", "Defined work"],
    youGet: ["Less confusion", "Faster work", "Fewer mistakes"],
  },
  {
    num: "2",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "Getting More Customers",
    weDo: ["Improve website", "Set up lead tracking", "Build customer flow"],
    youGet: ["More inquiries", "Better follow-ups", "More conversions"],
  },
  {
    num: "3",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>
    ),
    title: "Clear Business Communication",
    weDo: ["Clear messaging", "Consistent communication", "Better online presence"],
    youGet: ["Customers understand you", "More trust", "Better leads"],
  },
];

export default function FBServices() {
  return (
    <>
      {/* Services */}
      <section className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle">
        <div className="layout-grid px-6 md:px-10">
          <AnimateOnScroll className="mb-14 text-center">
            <span className="label-eyebrow mb-4 block">What we help you fix</span>
            <h2
              className="font-poppins"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Three areas. Real results.
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.num} delay={i * 0.1}>
                <div className="bg-background rounded-2xl border border-border-subtle p-8 h-full flex flex-col card-interactive">

                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-8 pb-8 border-b border-border-subtle">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0,41,96,0.08)", color: "var(--accent)" }}
                    >
                      {s.icon}
                    </div>
                    <h3 className="text-xl font-bold font-poppins text-primary leading-tight pt-1">
                      {s.num}. {s.title}
                    </h3>
                  </div>

                  {/* We do */}
                  <div className="mb-6 flex-1">
                    <p className="text-[11px] font-black uppercase tracking-widest text-muted mb-4">We do:</p>
                    <ul className="flex flex-col gap-2.5">
                      {s.weDo.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base text-body">
                          <span className="text-muted mt-0.5">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* You get */}
                  <div className="pt-6 border-t border-border-subtle">
                    <p className="text-[11px] font-black uppercase tracking-widest text-accent mb-4">You get:</p>
                    <ul className="flex flex-col gap-2.5">
                      {s.youGet.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base font-semibold text-primary">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-0.5 shrink-0">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {item}
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

      {/* Before / After */}
      <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
        <div className="layout-grid px-6 md:px-10">
          <AnimateOnScroll className="mb-14">
            <span className="label-eyebrow mb-4 block text-accent">Real Example</span>
            <h2
              className="font-poppins"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              The difference is in how the business performs.
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <div className="bg-bg-secondary rounded-2xl border border-border-subtle p-10 h-full">
                <p className="text-[11px] font-black uppercase tracking-widest mb-8 text-muted">Where most businesses start</p>
                <ul className="flex flex-col gap-5">
                  {[
                    "Revenue growth depends on the owner working more",
                    "Customers come in inconsistently",
                    "Team waits for direction on most decisions",
                    "Hard to tell what is actually driving profit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base font-medium text-muted">
                      <span className="mt-2 w-4 h-px block shrink-0" style={{ background: "var(--text-muted)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div
                className="bg-background rounded-2xl border p-10 h-full"
                style={{ borderColor: "rgba(0,41,96,0.25)", boxShadow: "0 8px 32px -8px rgba(0,41,96,0.10)" }}
              >
                <p className="text-[11px] font-black uppercase tracking-widest mb-8 text-accent">After working with us</p>
                <ul className="flex flex-col gap-5">
                  {[
                    "Revenue grows through systems, not just effort",
                    "Consistent customer pipeline with clear conversion",
                    "Team owns their work, owner drives direction",
                    "Clear visibility into what drives profit and what to scale",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base font-bold text-body">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-0.5 shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
