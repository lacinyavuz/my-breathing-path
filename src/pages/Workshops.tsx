import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin, Banknote } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BreathOrb } from "../components/BreathOrb";
import { workshops } from "../data/content";
import { images } from "../data/images";

export default function Workshops() {
  return (
    <>
      <Seo
        title="Workshops & Retreats"
        description="Monthly breath circles, Saturday workshops, weekend retreats and the Transformational Breath® Essentials seminar — with Muge Zorbozan."
        path="/workshops"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <BreathOrb className="absolute -left-24 top-20 h-[24rem] w-[24rem]" />
        <div className="container-wide relative">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">Workshops &amp; retreats</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-display-lg text-balance">
                  Breathe together —
                  <span className="italic text-terracotta-400"> something about group breath </span>
                  goes deeper than solo practice.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="prose-lede mt-8 max-w-xl">
                  Small, welcoming gatherings in London and the Surrey
                  countryside — from a Thursday evening circle to a weekend
                  reset.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="aspect-[5/3] overflow-hidden rounded-[2.5rem]">
                  <img
                    src={images.workshop}
                    alt="Group breath circle in candlelight"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Upcoming</span>
                <h2 className="mt-5 text-display-md text-balance">
                  Choose your next breath.
                </h2>
              </div>
              <p className="hidden max-w-sm text-sm text-ink-muted sm:block">
                Spaces are kept small on purpose. Reserve early to secure
                your spot.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 space-y-6">
            {workshops.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <article className="grid gap-8 rounded-[2rem] border border-ink/10 bg-cream-50 p-8 sm:p-10 lg:grid-cols-12">
                  <div className="lg:col-span-2">
                    <p className="font-display text-6xl text-terracotta-400 leading-none">
                      0{i + 1}
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <h3 className="font-display text-2xl sm:text-3xl">
                      {w.title}
                    </h3>
                    <p className="mt-4 text-ink-muted">{w.description}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <dl className="grid gap-3 rounded-2xl bg-cream-100 p-5 text-sm">
                      <div className="flex items-center gap-3">
                        <Calendar size={14} className="text-sage-500" />
                        <span className="text-ink">{w.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={14} className="text-sage-500" />
                        <span className="text-ink">{w.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={14} className="text-sage-500" />
                        <span className="text-ink">{w.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Banknote size={14} className="text-sage-500" />
                        <span className="text-ink">{w.price}</span>
                      </div>
                    </dl>
                    <Link
                      to="/contact"
                      className="btn-primary mt-5 w-full"
                    >
                      Reserve a place <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat CTA */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-cream-50">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url(${images.forest})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative grid items-center gap-12 p-10 sm:p-16 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <span className="eyebrow text-terracotta-200">
                    Signature retreat
                  </span>
                  <h2 className="mt-5 text-display-md text-balance text-cream-50">
                    Reclaim Your Breath™ — a weekend reset in the Surrey
                    countryside.
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-50/80">
                    Two days of deep breathwork, slow nature walks,
                    nourishing food and small-group connection. You come
                    home with a quieter mind and a body that remembers how
                    to rest.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 text-sm font-medium text-ink hover:bg-terracotta-200"
                    >
                      Enquire about the retreat <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
                    <img
                      src={images.retreat}
                      alt="Countryside retreat setting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
