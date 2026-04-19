import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import { navigation, site } from "../data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink/10 bg-cream-200 text-ink">
      <div className="container-wide py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-md text-ink-muted">
              Gentle, guided Transformational Breath® sessions in Teddington,
              Richmond and online. Come as you are — your body already knows
              how to breathe.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-all hover:border-ink hover:bg-ink hover:text-cream-50"
              >
                <Instagram size={16} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-all hover:border-ink hover:bg-ink hover:text-cream-50"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-all hover:border-ink hover:bg-ink hover:text-cream-50"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-all hover:border-ink hover:bg-ink hover:text-cream-50"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-5">Explore</h4>
            <ul className="space-y-3 text-ink">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="eyebrow mb-5">Visit & Connect</h4>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li>
                Therapy room in <span className="text-ink">Teddington</span>
                <br />
                {site.location.region}, {site.location.country}
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink link-underline"
                >
                  {site.email}
                </a>
              </li>
              <li>Online sessions worldwide on Zoom</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-ink/10 bg-cream-50 p-5">
              <p className="text-sm text-ink">
                Ready to start? Book your first session or ask a question —
                I’ll personally reply within a day.
              </p>
              <Link to="/contact" className="btn-ghost mt-3">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-8 text-xs text-ink-soft sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} My Breathing Path. All rights reserved.
          </p>
          <p>
            Transformational Breath® is a registered trademark of the
            Transformational Breath Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
}
