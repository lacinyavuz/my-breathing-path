import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BreathOrb } from "../components/BreathOrb";
import { images } from "../data/images";

const phases = [
  {
    n: "01",
    title: "The opening",
    body: "We sit and talk quietly — about what’s bringing you here, your health, and what would feel supportive today. You settle into the space, shoes off, layers around you.",
  },
  {
    n: "02",
    title: "The connected breath",
    body: "Lying down, I guide you into a gentle, full, connected breathing pattern. There is no pause between the in-breath and out-breath — breath moves in a smooth circle, through the mouth.",
  },
  {
    n: "03",
    title: "Body mapping & tone",
    body: "With your permission, I use light hands-on touch to help the breath move into tight areas. Sometimes we add sound, sometimes gentle movement — whatever your body is asking for.",
  },
  {
    n: "04",
    title: "The integration",
    body: "The breath slows and softens. You rest in stillness for 10–15 minutes as everything that just moved settles. Often this is where the deepest insight arrives.",
  },
  {
    n: "05",
    title: "The close",
    body: "We come back to words. You share what you noticed, I share what I observed, and together we agree on a simple home practice to carry the work forward.",
  },
];

const science = [
  {
    title: "Parasympathetic activation",
    body: "Full, slow, connected breathing gently shifts the nervous system from fight-or-flight into rest-and-repair.",
  },
  {
    title: "Improved CO₂ tolerance",
    body: "Healthier breathing patterns help the body use oxygen better — supporting energy, mood and sleep.",
  },
  {
    title: "Somatic release",
    body: "Breath brings awareness into held areas of the body, creating space for old emotion and tension to move.",
  },
  {
    title: "Interoception",
    body: "Regular practice strengthens your felt sense of the body — the foundation for emotional regulation.",
  },
];

export default function Breathwork() {
  return (
    <>
      <Seo
        title="What is Transformational Breath®?"
        description="An honest, grounded explanation of what Transformational Breath® is, what happens in a session, and why it works. For the curious."
        path="/breathwork"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <BreathOrb className="absolute -right-24 top-20 h-[28rem] w-[28rem]" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">The practice</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-display-lg text-balance">
                Transformational Breath® —
                <span className="italic text-terracotta-400"> the simple, ancient thing </span>
                your body already knows how to do.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="prose-lede mt-8 max-w-2xl">
                A self-healing modality that uses a full, connected breathing
                pattern — with gentle body mapping, sound and movement — to
                help you breathe more fully, release held tension and come
                back into your body.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Split */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                <img
                  src={images.breathing}
                  alt="Person breathing with eyes closed"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
              <Reveal delay={0.1}>
                <span className="eyebrow">Why breath?</span>
                <h2 className="mt-5 text-display-md text-balance text-ink">
                  The one thing that bridges body and mind.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Most of us live at the top of our breath — shallow,
                  tight, half-held. It’s not a flaw. It’s an adaptation,
                  often made in childhood, to get through the life we
                  found ourselves in.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Breathwork offers a simple way to gently rebuild a
                  fuller, more natural breathing pattern. When that
                  happens, everything downstream shifts — nervous system,
                  mood, sleep, the quiet conversation between body and
                  mind.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p>
                  You do not need to believe anything, force anything or
                  perform anything. You just need a space safe enough to
                  breathe a little deeper than usual — and a guide who
                  knows the territory.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-sand-100 py-24 sm:py-32">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow">Inside a session</span>
            <h2 className="mt-5 max-w-3xl text-display-md text-balance">
              Five unhurried phases, woven gently together.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.07}>
                <div className="h-full rounded-3xl border border-ink/10 bg-cream-50 p-7">
                  <p className="font-display text-3xl text-terracotta-400">
                    {p.n}
                  </p>
                  <h3 className="mt-3 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">The science, gently</span>
                <h2 className="mt-5 text-display-md text-balance">
                  It feels mystical, but the mechanics are grounded.
                </h2>
                <p className="prose-lede mt-6">
                  Breathwork works with the body’s own physiology. Here’s
                  a little of what’s happening, in plain language.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {science.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-cream-50 p-6">
                    <h3 className="font-display text-xl">{s.title}</h3>
                    <p className="mt-3 text-sm text-ink-muted">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-narrow">
          <Reveal>
            <div className="rounded-[2.5rem] border border-ink/10 bg-cream-50 p-10 text-center sm:p-16">
              <span className="eyebrow">Curious?</span>
              <h2 className="mx-auto mt-6 max-w-2xl text-display-md text-balance">
                The best way to understand breathwork is to
                <span className="italic text-terracotta-400"> experience it.</span>
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-primary">
                  Book a first session <ArrowRight size={16} />
                </Link>
                <Link to="/workshops" className="btn-secondary">
                  Try a group workshop
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
