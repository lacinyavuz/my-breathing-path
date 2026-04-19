import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BreathOrb } from "../components/BreathOrb";
import { services, journeySteps } from "../data/content";
import { images } from "../data/images";

export default function Sessions() {
  return (
    <>
      <Seo
        title="Sessions & Pricing"
        description="1:1, online and small group Transformational Breath® sessions in Teddington and via Zoom. Clear pricing, what to expect, and how to book."
        path="/sessions"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <BreathOrb className="absolute -left-24 top-20 h-[24rem] w-[24rem]" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">Sessions</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-display-lg text-balance">
                Three ways to work with me —
                <span className="italic text-terracotta-400"> all unhurried.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="prose-lede mt-8 max-w-2xl">
                Choose the format that feels right. Every option includes a
                full guided breath session, aftercare, and a follow-up
                conversation — nothing rushed, nothing formulaic.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-8">
        <div className="container-wide space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <article className="grid gap-10 rounded-[2.5rem] border border-ink/10 bg-cream-50 p-6 sm:p-10 lg:grid-cols-12 lg:gap-16 lg:p-14">
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                    <img
                      src={
                        s.slug === "one-to-one"
                          ? images.hands
                          : s.slug === "online"
                            ? images.online
                            : images.group
                      }
                      alt={s.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-sage-200 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sage-600">
                      {s.eyebrow}
                    </span>
                    <span className="font-display text-terracotta-400">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-5 text-display-sm text-balance">
                    {s.title}
                  </h2>
                  <p className="prose-lede mt-5">{s.description}</p>

                  <div className="mt-8 grid gap-3 rounded-2xl border border-ink/10 bg-cream-100 p-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                        Duration
                      </p>
                      <p className="mt-1 font-display text-xl text-ink">
                        {s.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                        Format
                      </p>
                      <p className="mt-1 font-display text-xl text-ink">
                        {s.format}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow">This is for you if you</p>
                      <ul className="mt-4 space-y-2.5">
                        {s.for.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-ink"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-400" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow">What’s included</p>
                      <ul className="mt-4 space-y-2.5">
                        {s.includes.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-ink"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-200 text-sage-600">
                              <Check size={10} />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary">
                      {s.cta} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Recommended series */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <div className="rounded-[2.5rem] bg-sage-500 p-10 text-cream-100 sm:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <span className="eyebrow text-terracotta-200">
                    Recommended series
                  </span>
                  <h2 className="mt-5 text-display-md text-balance">
                    For a lasting shift,
                    <span className="italic text-terracotta-200"> three sessions </span>
                    is where the real work happens.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/85">
                    Most people feel something profound after a single
                    session. For something that holds — a new pattern, a
                    quieter mind, a body that trusts itself — I recommend a
                    gentle series of three, spread two to four weeks apart.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-7 py-3.5 text-sm font-medium text-ink hover:bg-terracotta-200"
                    >
                      Enquire about a series <ArrowRight size={16} />
                    </Link>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5">
                <Reveal delay={0.2}>
                  <div className="overflow-hidden rounded-[2rem]">
                    <img
                      src={images.quiet}
                      alt="Calm meditative scene"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey recap */}
      <section className="pb-24">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow">Booking a session</span>
            <h2 className="mt-5 max-w-3xl text-display-md text-balance">
              From first message to first breath.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-ink/10 bg-cream-50 p-7">
                  <span className="font-display text-4xl text-sand-300">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
