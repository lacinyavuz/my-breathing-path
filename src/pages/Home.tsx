import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Quote } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BreathOrb } from "../components/BreathOrb";
import { Marquee } from "../components/Marquee";
import { benefits, services, testimonials, journeySteps } from "../data/content";
import { images } from "../data/images";

export default function Home() {
  return (
    <>
      <Seo />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <BreathOrb className="absolute -left-24 top-20 h-[30rem] w-[30rem]" />
        <BreathOrb className="absolute -right-24 bottom-0 h-[26rem] w-[26rem]" />

        <div className="container-wide relative">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">
                  Transformational Breath® · London · Online
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-display-xl text-balance">
                  Come back to your
                  <span className="italic text-terracotta-400"> breath</span>,
                  come back to yourself.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="prose-lede mt-8 max-w-xl text-pretty">
                  Gentle, guided breathwork sessions in London, Richmond
                  Upon Thames and online — to help you release stress,
                  reconnect with your body and create lasting emotional
                  balance.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link to="/contact" className="btn-primary">
                    Book a session <ArrowRight size={16} />
                  </Link>
                  <Link to="/workshops" className="btn-secondary">
                    View upcoming events
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-12 flex items-center gap-5 text-sm text-ink-muted">
                  <div className="flex -space-x-2">
                    <img
                      src={images.woman1}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-cream-100 object-cover"
                    />
                    <img
                      src={images.woman2}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-cream-100 object-cover"
                    />
                    <img
                      src={images.peacefulFace}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-cream-100 object-cover"
                    />
                  </div>
                  <p>
                    Trusted by 400+ clients across London
                    <br />
                    and online since 2014.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="relative lg:col-span-5">
              <Reveal delay={0.3}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-sand-200">
                  <img
                    src={images.hero}
                    alt="Woman in quiet meditation, eyes closed, warm natural light"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cream-50/90 p-5 backdrop-blur-md"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-14 w-14 items-center justify-center">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-terracotta-400/30"
                          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 6, repeat: Infinity }}
                        />
                        <div className="h-4 w-4 rounded-full bg-terracotta-400" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                          Breathe in · breathe out
                        </p>
                        <p className="font-display text-lg text-ink">
                          One session is a reset.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee
        items={[
          "Transformational Breath®",
          "Conscious Breathing",
          "Nervous System Reset",
          "Embodied Presence",
          "Somatic Release",
        ]}
      />

      {/* WHO THIS IS FOR */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Who this is for</span>
                <h2 className="mt-5 text-display-md text-balance">
                  You don’t need to fix yourself.
                  <span className="italic text-terracotta-400"> Just breathe.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="prose-lede mt-6">
                  Breathwork is a simple, natural way to support body and
                  mind. You might come to a session because you:
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    "Feel stressed, overwhelmed or anxious",
                    "Want to feel more grounded and present",
                    "Hold tension or emotion in your body",
                    "Feel stuck and want a safe way forward",
                    "Struggle with sleep, rest or restoration",
                    "Are curious, but don’t know where to start",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-ink/10 pb-4 text-ink"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-200 text-sage-600">
                        <Check size={12} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative bg-sand-100 py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow">What changes</span>
                <h2 className="mt-5 text-display-md text-balance">
                  The quiet, lasting work of a fuller breath.
                </h2>
              </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.1}>
                  <div className="group h-full rounded-3xl border border-ink/10 bg-cream-50 p-8 transition-all hover:-translate-y-1 hover:border-ink/20">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl text-terracotta-400">
                        0{i + 1}
                      </span>
                      <div className="h-px flex-1 bg-ink/10" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-ink">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-ink-muted">{b.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / WAYS TO WORK */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="eyebrow">Ways to work with me</span>
              <h2 className="mt-5 text-display-md text-balance">
                Three gentle doorways
                <br /> into the practice.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/sessions" className="btn-ghost">
                See all sessions <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream-50 transition-all hover:-translate-y-1">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={
                        s.slug === "one-to-one"
                          ? images.hands
                          : s.slug === "online"
                            ? images.online
                            : images.group
                      }
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-cream-50/95 px-3 py-1 text-xs uppercase tracking-[0.18em] text-ink">
                        {s.eyebrow}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-2xl text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-ink-muted">{s.tagline}</p>

                    <dl className="mt-6 space-y-2 border-t border-ink/10 pt-5 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-ink-soft">Duration</dt>
                        <dd className="text-ink">{s.duration}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-ink-soft">Format</dt>
                        <dd className="text-ink">{s.format}</dd>
                      </div>
                    </dl>

                    <Link
                      to="/sessions"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 hover:underline"
                    >
                      Learn more <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="relative overflow-hidden bg-sage-500 py-24 text-cream-100 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${images.forest})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(95,110,80,0.7) 0%, rgba(58,68,52,0.95) 100%)",
          }}
        />

        <div className="container-wide relative">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                  <img
                    src={images.mugePortrait}
                    alt="Muge Zorbozan, Transformational Breath facilitator"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <span className="eyebrow text-terracotta-200">
                  Meet your facilitator
                </span>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="mt-5 text-display-md text-balance text-cream-100">
                  Hi, I’m Muge. I create a
                  <span className="italic text-terracotta-200"> safe, grounded space </span>
                  where your breath can do its quiet, powerful work.
                </h2>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-100/85">
                  I’ve been facilitating Transformational Breath® since 2014,
                  originally from Istanbul and now based in Teddington.
                  My approach is gentle and unhurried — there is nothing
                  to perform, nowhere to get to. Your body leads, I follow,
                  and together we let the breath do its work.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-100 px-7 py-3.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-terracotta-200"
                  >
                    Read my story <ArrowRight size={16} />
                  </Link>
                  <div className="flex gap-8 text-sm text-cream-100/70">
                    <div>
                      <p className="font-display text-3xl text-cream-100">10+</p>
                      <p>Years facilitating</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl text-cream-100">400+</p>
                      <p>Clients supported</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow">How to begin</span>
            <h2 className="mt-5 max-w-3xl text-display-md text-balance">
              Starting is simple — no experience, no perfect breathing
              required.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-ink/10 bg-cream-50 p-8">
                  <span className="font-display text-5xl text-sand-300">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 text-ink-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream-200 py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow">In their words</span>
                <h2 className="mt-5 text-display-md text-balance">
                  Small shifts, deep changes.
                </h2>
                <p className="prose-lede mt-6">
                  A few reflections from the people I’ve had the privilege
                  of breathing with.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              {testimonials.slice(0, 4).map((t, i) => (
                <Reveal key={t.author} delay={i * 0.08}>
                  <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream-50 p-7">
                    <Quote className="h-5 w-5 text-terracotta-400" />
                    <blockquote className="mt-4 text-lg italic leading-relaxed text-ink">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-ink/10 pt-4 text-sm">
                      <span className="font-medium text-ink">{t.author}</span>
                      <span className="text-ink-soft"> · {t.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="container-narrow">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-cream-50 p-10 text-center sm:p-16">
              <BreathOrb className="absolute -right-24 -top-24 h-96 w-96" />
              <span className="eyebrow">Begin your practice</span>
              <h2 className="mx-auto mt-6 max-w-2xl text-display-md text-balance">
                Ready to feel
                <span className="italic text-terracotta-400"> calmer, clearer </span>
                and more at ease in yourself?
              </h2>
              <p className="prose-lede mx-auto mt-6 max-w-xl">
                Book a first session or send me a message with any questions.
                I’ll personally reply within a day.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-primary">
                  Book your first session <ArrowRight size={16} />
                </Link>
                <Link to="/faq" className="btn-secondary">
                  Read the FAQ
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
