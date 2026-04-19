import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, MapPin, MessageCircle } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BreathOrb } from "../components/BreathOrb";
import { site } from "../data/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  sessionType: string;
  location: string;
  preferredDate: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  sessionType: "one-to-one",
  location: "in-person",
  preferredDate: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(
      `Session enquiry from ${form.name || "a new visitor"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Session type: ${form.sessionType}`,
        `Location: ${form.location}`,
        `Preferred date: ${form.preferredDate}`,
        ``,
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Seo
        title="Contact & Book a Session"
        description="Book a Transformational Breath® session in Teddington or online. Send a message, and Muge will personally reply within a day."
        path="/contact"
      />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <BreathOrb className="absolute -right-24 top-20 h-[26rem] w-[26rem]" />
        <div className="container-wide relative">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Contact</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-display-lg text-balance">
                  Let’s find a
                  <span className="italic text-terracotta-400"> time to breathe.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="prose-lede mt-8 max-w-md">
                  Fill in the short form and I’ll personally reply within
                  a day, often sooner. Prefer email, WhatsApp or phone?
                  All of those work too.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <ul className="mt-12 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-200 text-sage-600">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                        Email
                      </p>
                      <a
                        href={`mailto:${site.email}`}
                        className="font-display text-xl text-ink link-underline"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-200 text-sage-600">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                        WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                        className="font-display text-xl text-ink link-underline"
                      >
                        {site.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-200 text-sage-600">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                        Therapy room
                      </p>
                      <p className="font-display text-xl text-ink">
                        Teddington, {site.location.region}
                      </p>
                      <p className="text-sm text-ink-muted">
                        Exact address shared on booking.
                      </p>
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="rounded-[2rem] border border-ink/10 bg-cream-50 p-7 sm:p-10">
                  {submitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-200 text-sage-600">
                        <Check size={22} />
                      </div>
                      <h2 className="mt-6 font-display text-3xl">Thank you.</h2>
                      <p className="prose-lede mx-auto mt-4 max-w-md">
                        Your email client should now be open with a
                        pre-filled message. Press send — and I’ll reply
                        personally within a day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field
                          label="Your name"
                          required
                          value={form.name}
                          onChange={update("name")}
                        />
                        <Field
                          label="Email"
                          type="email"
                          required
                          value={form.email}
                          onChange={update("email")}
                        />
                      </div>
                      <Field
                        label="Phone (optional)"
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                      />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Select
                          label="Session type"
                          value={form.sessionType}
                          onChange={update("sessionType")}
                          options={[
                            { v: "one-to-one", l: "1:1 Breathwork Session" },
                            { v: "online", l: "Online Breathwork Session" },
                            { v: "group", l: "Private Group Session" },
                            { v: "workshop", l: "Workshop / Retreat" },
                            { v: "unsure", l: "I’m not sure yet" },
                          ]}
                        />
                        <Select
                          label="Preference"
                          value={form.location}
                          onChange={update("location")}
                          options={[
                            { v: "in-person", l: "In-person (Teddington)" },
                            { v: "online", l: "Online (Zoom)" },
                            { v: "either", l: "Either works" },
                          ]}
                        />
                      </div>
                      <Field
                        label="Preferred date or time window"
                        placeholder="e.g. Weekend mornings, or the week of…"
                        value={form.preferredDate}
                        onChange={update("preferredDate")}
                      />
                      <div>
                        <label className="block text-xs uppercase tracking-[0.18em] text-ink-soft">
                          A short message
                        </label>
                        <textarea
                          value={form.message}
                          onChange={update("message")}
                          rows={5}
                          placeholder="What’s bringing you to breathwork? Anything I should know?"
                          className="mt-2 w-full rounded-2xl border border-ink/15 bg-cream-100 p-4 text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none focus:ring-0"
                        />
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <p className="text-xs text-ink-soft">
                          I reply personally — not from a template.
                        </p>
                        <button type="submit" className="btn-primary">
                          Send enquiry <ArrowRight size={16} />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-ink-soft">
        {label} {required && <span className="text-terracotta-400">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-full border border-ink/15 bg-cream-100 px-4 py-3 text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none focus:ring-0"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  options: { v: string; l: string }[];
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-ink-soft">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="mt-2 w-full appearance-none rounded-full border border-ink/15 bg-cream-100 px-4 py-3 text-ink focus:border-ink focus:outline-none focus:ring-0"
      >
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.l}
          </option>
        ))}
      </select>
    </div>
  );
}
