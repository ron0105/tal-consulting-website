"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LineReveal } from "@/components/shared/LineReveal";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Two paths merging — visual metaphor for HWW */
function TwoPathsDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease, delay: 0.3 }}
      className="relative w-full"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 860 340" className="w-full h-auto" aria-hidden="true">

          {/* Path A — For Businesses (top) */}
          <motion.path
            d="M 140 80 C 280 80, 380 170, 430 170"
            style={{ fill: "none", stroke: "var(--accent)" }}
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Path B — For New Ideas (bottom) */}
          <motion.path
            d="M 140 260 C 280 260, 380 170, 430 170"
            style={{ fill: "none", stroke: "var(--border-color)" }}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="10 7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 1.0, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Output path */}
          <motion.path
            d="M 430 170 C 530 170, 680 170, 740 170"
            style={{ fill: "none", stroke: "var(--accent)" }}
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Label A — For Businesses */}
          <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <rect x="0" y="52" width="138" height="56" rx="12"
              style={{ fill: "var(--bg-secondary)", stroke: "var(--accent)" }}
              strokeWidth="2"
            />
            <text x="69" y="76" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="13"
              style={{ fill: "var(--accent)" }}>
              For Businesses
            </text>
            <text x="69" y="96" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="500" fontSize="11"
              style={{ fill: "var(--text-muted)" }}>
              3-phase process
            </text>
          </motion.g>

          {/* Label B — For New Ideas */}
          <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.55 }}>
            <rect x="0" y="232" width="138" height="56" rx="12"
              style={{ fill: "var(--bg-secondary)", stroke: "var(--border-color)" }}
              strokeWidth="2"
            />
            <text x="69" y="256" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="13"
              style={{ fill: "var(--text-muted)" }}>
              For New Ideas
            </text>
            <text x="69" y="276" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="500" fontSize="11"
              style={{ fill: "var(--text-muted)" }}>
              6-stage framework
            </text>
          </motion.g>

          {/* Merge dot */}
          <motion.circle cx={430} cy={170} r={14}
            style={{ fill: "var(--accent)" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.5, ease }}
          />
          <motion.circle cx={430} cy={170} r={6}
            style={{ fill: "var(--bg)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.65 }}
          />
          <motion.circle cx={430} cy={170} r={14}
            style={{ fill: "none", stroke: "var(--accent)" }}
            strokeWidth="2"
            animate={{ r: [14, 32, 14], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Mid label */}
          <motion.text x="430" y="210"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="12"
            style={{ fill: "var(--text-muted)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.7 }}
            transition={{ delay: 1.8 }}
          >
            Same thinking. Same discipline.
          </motion.text>

          {/* Clarity endpoint */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>
            <rect x="740" y="138" width="120" height="64" rx="14"
              style={{ fill: "var(--accent)" }}
            />
            <text x="800" y="163" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="15"
              style={{ fill: "var(--bg)" }}>
              Clarity
            </text>
            <text x="800" y="183" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="11"
              style={{ fill: "var(--bg)", opacity: 0.7 }}>
              + direction
            </text>
          </motion.g>

        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function HWWHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="hww-hero relative bg-background overflow-hidden"
      style={{
        paddingTop: "clamp(10rem, 20vh, 16rem)",
        paddingBottom: "clamp(7rem, 14vh, 12rem)",
      }}
    >
      <style>{`
        .hww-hero h1 span.block > span.block {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--text-primary);
        }
        .hww-hero h1 span.block:last-child > span.block {
          color: var(--accent);
        }
      `}</style>

      {/* Gradient blob */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle at 55% 35%, var(--accent), transparent 65%)" }}
        />
      </motion.div>

      {/* Decorative corner lines */}
      <div className="absolute top-28 right-0 w-px h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--border-subtle), transparent)" }} aria-hidden="true" />
      <div className="absolute top-28 right-14 w-px h-28 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--border-subtle), transparent)", opacity: 0.4 }} aria-hidden="true" />

      <motion.div style={{ y: textY }} className="layout-grid px-6 md:px-10 relative z-10">

        {/* Copy — full width, centered */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
            <span className="label-eyebrow text-accent">How We Work</span>
          </motion.div>

          <LineReveal
            lines={["Two paths.", "One way of", "thinking."]}
            delay={0.1}
            stagger={0.12}
            className="font-poppins mb-10"
            as="h1"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
          >
            <p className="text-xl leading-relaxed font-medium text-body mb-8" style={{ maxWidth: "560px" }}>
              Whether you run a business or are testing a new idea, the thinking behind our work is the same: understand first, structure clearly, validate before acting.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#for-businesses"
                className="flex items-center gap-3 px-5 py-3 border border-border-subtle rounded-lg text-sm font-semibold text-body hover:border-accent hover:text-accent transition-colors"
              >
                <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: "var(--accent)" }} />
                For Businesses: 3-phase process
              </a>
              <a
                href="#for-new-ideas"
                className="flex items-center gap-3 px-5 py-3 border border-border-subtle rounded-lg text-sm font-semibold text-body hover:border-accent hover:text-accent transition-colors"
              >
                <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: "var(--border-color)" }} />
                For New Ideas: 6-stage framework
              </a>
            </div>
          </motion.div>
        </div>

        {/* Diagram — full width, large */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.6 }}
          className="w-full"
          style={{ maxWidth: "860px" }}
        >
          <TwoPathsDiagram />
        </motion.div>

      </motion.div>
    </section>
  );
}
