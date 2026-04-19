import { Link } from "react-router-dom";
import { ArrowRight, Award, Leaf, Heart, Users } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BreathOrb } from "../components/BreathOrb";
import { images } from "../data/images";

const credentials = [
  {
    icon: Award,
    title: "Certified Transformational Breath® Facilitator",
    body: "Trained and certified since 2014, following the Dr. Judith Kravitz methodology.",
  },
  {
    icon: Leaf,
    title: "Basic DNA Theta Healing Practitioner",
    body: "Complementary energy work integrated gently into my sessions where appropriate.",
  },
  {
    icon: Heart,
    title: "Reiki II Certified",
    body: "For hands-on, heart-led support during one-to-one sessions.",
  },
  {
    icon: Users,
    title: "400+ clients supported",
    body: "Working with individuals, couples and small groups across London and online.",
  },
];

const values = [
  {
    title: "Grounded",
    body: "No jargon, no pressure, no mystic performance. Just honest, steady support for your body and breath.",
  },
  {
    title: "Gentle",
    body: "You set the pace. Nothing is forced. The breath reveals what it’s ready to reveal, and nothing more.",
  },
  {
    title: "Safe",
    body: "A warm, private space where emotion is welcome, and where your boundaries are always respected.",
  },
  {
    title: "Trauma-aware",
    body: "I hold the space carefully, with ongoing training in working with the nervous system and emotional release.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Muge Zorbozan"
        description="Meet Muge Zorbozan — certified Transformational Breath® facilitator based in Teddington. Her approach, her training, and her story."
        path="/about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <BreathOrb className="absolute -right-24 top-20 h-[24rem] w-[24rem]" />
        <div className="container-wide relative">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow">About</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-display-lg text-balance">
                  Hi, I’m Muge. I help people come back to
                  <span className="italic text-terracotta-400"> their own breath.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="prose-lede mt-8 max-w-xl text-pretty">
                  Certified Transformational Breath® facilitator based in
                  Teddington, working with clients across Richmond Upon
                  Thames, London and online since 2014.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Work with me <ArrowRight size={16} />
                  </Link>
                  <Link to="/sessions" className="btn-secondary">
                    See sessions
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-sand-200">
                    <img
                      src={images.mugePortrait}
                      alt="Portrait of Muge Zorbozan"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-ink/10 bg-cream-50 p-5 shadow-xl shadow-ink/5 sm:block">
                    <p className="font-display text-xl text-ink">Muge Zorbozan</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft">
                      Transformational Breath® · Since 2014
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow">My story</span>
                <h2 className="mt-5 text-display-md text-balance">
                  From finance in Istanbul, to breathwork in London.
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-ink-muted lg:col-span-8">
              <Reveal delay={0.1}>
                <p>
                  I was born and raised in Istanbul, Turkey, and spent more
                  than a decade working in the Turkish finance sector. On
                  the outside it looked successful. On the inside, I was
                  running on perfectionism, carrying a cervical hernia,
                  and quietly holding more tension than my body could
                  manage.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  In 2010, a friend took me to my first breathwork workshop.
                  I didn’t expect much — and then I didn’t expect the way
                  my body responded. Something that had been locked for
                  years softened. I cried, I laughed, and for the first
                  time in a long time, I felt like myself again.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  That session led me to train with the Transformational
                  Breath Foundation, and to certify as a facilitator in
                  2014. I moved to the UK in 2018, and today I work
                  primarily from a warm therapy room in Teddington, with
                  clients also joining online from around the world.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p>
                  My work today is gentle, practical and a little spiritual
                  — in the way that anything that touches the body and the
                  heart at the same time has to be. I don’t promise
                  miracles. I promise presence, a safe space, and a
                  breath that is willing to do the quiet work.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Approach / Values */}
      <section className="bg-sand-100 py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">My approach</span>
                <h2 className="mt-5 text-display-md text-balance">
                  Four things I promise every
                  <span className="italic text-terracotta-400"> person I breathe with.</span>
                </h2>
                <p className="prose-lede mt-8">
                  Every session is different, because every person is
                  different. But these are the things that don’t change.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-cream-50 p-7">
                    <p className="font-display text-terracotta-400">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-2xl">{v.title}</h3>
                    <p className="mt-3 text-ink-muted">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training & credentials */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow">Training &amp; credentials</span>
            <h2 className="mt-5 max-w-3xl text-display-md text-balance">
              Formally trained, continually learning, always led by what
              actually helps people.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-ink/10 bg-cream-50 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-200 text-sage-600">
                    <c.icon size={18} />
                  </div>
                  <h3 className="mt-5 font-display text-xl leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A gentle note */}
      <section className="pb-24">
        <div className="container-narrow">
          <Reveal>
            <div className="rounded-3xl border border-ink/10 bg-cream-50 p-8 sm:p-12">
              <span className="eyebrow">A gentle note</span>
              <p className="mt-6 text-lg leading-relaxed text-ink">
                Breathwork can be powerful, but it is not a replacement for
                medical or psychological treatment. If you have any
                concerns — about breathing, about your health, or about
                whether this is right for you — please get in touch before
                your first session and we’ll talk it through, unhurried.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-narrow">
          <Reveal>
            <div className="rounded-[2.5rem] bg-ink p-10 text-center text-cream-50 sm:p-16">
              <span className="eyebrow text-terracotta-200">Next step</span>
              <h2 className="mt-6 text-display-md text-cream-50">
                Curious? Let’s talk.
              </h2>
              <p className="prose-lede mx-auto mt-6 max-w-xl text-cream-50/80">
                I’m happy to answer questions before you book — no
                commitment, no pressure.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 text-sm font-medium text-ink transition-all hover:bg-terracotta-200"
                >
                  Get in touch <ArrowRight size={16} />
                </Link>
                <Link
                  to="/sessions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/30 px-7 py-3.5 text-sm font-medium text-cream-50 transition-all hover:bg-cream-50 hover:text-ink"
                >
                  Browse sessions
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
