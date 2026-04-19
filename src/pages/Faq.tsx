import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { faqs } from "../data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to the most common questions about Transformational Breath® sessions, safety, what to expect, and how to book."
        path="/faq"
      />

      <section className="pt-32 pb-12 sm:pt-40">
        <div className="container-narrow">
          <Reveal>
            <span className="eyebrow">FAQ</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-display-lg text-balance">
              Questions,
              <span className="italic text-terracotta-400"> gently answered.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="prose-lede mt-8 max-w-2xl">
              The things most people wonder before booking a first
              session. If you don’t see yours here, just write to me —
              I’m always happy to chat first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-narrow">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-ink"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl text-ink sm:text-2xl">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "rotate-45 border-terracotta-400 bg-terracotta-400 text-cream-50"
                          : "border-ink/20 text-ink"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pr-16 text-lg leading-relaxed text-ink-muted">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-narrow">
          <Reveal>
            <div className="rounded-[2.5rem] border border-ink/10 bg-cream-50 p-10 text-center sm:p-14">
              <h2 className="mx-auto max-w-xl text-display-sm text-balance">
                Still wondering if this is for you?
              </h2>
              <p className="prose-lede mx-auto mt-6 max-w-xl">
                Send me a short message with whatever you’re sitting with.
                No pressure to book — sometimes a conversation is all it
                takes.
              </p>
              <div className="mt-10 flex justify-center">
                <Link to="/contact" className="btn-primary">
                  Get in touch <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
