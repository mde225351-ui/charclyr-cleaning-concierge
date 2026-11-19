import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  ArrowDownRight,
  ArrowLeftRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Heart,
  MapPin,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ImageFanCarousel, type GalleryImage } from "@/components/ui/image-fan-carousel";
import { Testimonials3 } from "@/components/ui/testimonials-3";
import { BUSINESS, COMPARISONS, REELS, SERVICES } from "@/lib/charclyr-content";

import bathroom from "@/assets/charclyr/bathroom.jpg.asset.json";
import bedroom from "@/assets/charclyr/bedroom.jpg.asset.json";
import cleaning from "@/assets/charclyr/cleaning.jpg.asset.json";
import foyer from "@/assets/charclyr/foyer.jpg.asset.json";
import galleryKitchen from "@/assets/charclyr/gallery-kitchen.jpg.asset.json";
import hero from "@/assets/charclyr/hero.png.asset.json";
import kitchenAfter from "@/assets/charclyr/kitchen-after.jpg.asset.json";
import kitchenBefore from "@/assets/charclyr/kitchen-before.jpg.asset.json";
import sunroom from "@/assets/charclyr/sunroom.jpg.asset.json";
import windowsAfter from "@/assets/charclyr/windows-after.jpg.asset.json";
import windowsBefore from "@/assets/charclyr/windows-before.jpg.asset.json";

const comparisonPhotos = {
  "kitchen-before": kitchenBefore.url,
  "kitchen-after": kitchenAfter.url,
  "windows-before": windowsBefore.url,
  "windows-after": windowsAfter.url,
} as const;

const gallery: GalleryImage[] = [
  { src: bedroom.url, alt: "A sunlit Palm Beach bedroom with fresh ivory linens.", title: "A slower morning" },
  { src: bathroom.url, alt: "A bright marble bathroom, finished in soft natural light.", title: "Marble & morning light" },
  { src: galleryKitchen.url, alt: "A refined white kitchen with warm natural wood accents.", title: "The heart of home" },
  { src: foyer.url, alt: "A gracious entryway with clean limestone flooring.", title: "A lovely welcome" },
  { src: cleaning.url, alt: "Freshly folded towels and considered home-care details.", title: "The little details" },
  { src: sunroom.url, alt: "An airy Palm Beach living room surrounded by tropical greenery.", title: "Room to breathe" },
];

const iconStyles = "size-[18px] shrink-0";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charclyr Cleaning | Better Living in Palm Beach County" },
      {
        name: "description",
        content:
          "Discover a calmer kind of clean with Charclyr Cleaning. Thoughtful residential cleaning in Palm Beach County, Florida. Call 561-574-0921.",
      },
      { property: "og:title", content: "Charclyr Cleaning | Better Living." },
      {
        property: "og:description",
        content: "A Cleaner Home Means a Calmer You. Thoughtful residential cleaning in Palm Beach County, Florida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Please use 100 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address.").max(254, "Please use a shorter email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you at.")
    .max(24, "Please enter a shorter phone number.")
    .regex(/^[+()0-9.\s-]+$/, "Please use numbers and standard phone punctuation only."),
  service: z.string().min(1, "Please choose a service.").max(80),
  message: z.string().trim().max(1000, "Please keep your note under 1,000 characters."),
});

type QuoteField = "name" | "email" | "phone" | "service" | "message";
type QuoteValues = Record<QuoteField, string>;

const blankValues: QuoteValues = { name: "", email: "", phone: "", service: "", message: "" };

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="content-wrap header-inner">
          <a aria-label="Charclyr Cleaning home" className="brand-lockup" href="#home">
            <span aria-hidden="true" className="brand-mark">
              C
            </span>
            <span className="brand-name">
              Charclyr
              <span className="brand-subtitle">Cleaning · Better Living.</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className={`desktop-nav${menuOpen ? " is-open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>Our approach</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="header-call" href={`tel:${BUSINESS.phoneLink}`}>
              <Phone aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
            <a className="button header-quote" href="#contact">Request a quote</a>
          </nav>

          <Button
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            size="icon"
            variant="ghost"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero-section" id="home">
          <img alt="A calm, elegantly appointed Palm Beach living room at dusk." className="hero-photo" fetchPriority="high" src={hero.url} />
          <div aria-hidden="true" className="hero-shade" />
          <div aria-hidden="true" className="hero-grain" />
          <div className="content-wrap hero-content">
            <div className="hero-copy">
              <p className="hero-overline hero-entrance">An elevated clean, close to home</p>
              <h1 className="hero-name hero-entrance" id="hero-title">
                Charclyr
                <span>Cleaning.</span>
              </h1>
              <div aria-hidden="true" className="hero-rule gold-glow" />
              <p className="hero-subtitle hero-entrance">A Cleaner Home Means a Calmer You.</p>
              <p className="hero-description hero-entrance">
                A little more ease in your everyday, with thoughtful residential cleaning in Palm Beach County.
              </p>
              <div className="hero-actions hero-entrance">
                <Button asChild className="button-gold">
                  <a href="#contact">Get a Free Quote <ArrowDownRight aria-hidden="true" /></a>
                </Button>
                <Button asChild className="button-clear">
                  <a href={`tel:${BUSINESS.phoneLink}`}><Phone aria-hidden="true" /> Call Now</a>
                </Button>
              </div>
            </div>
            <div className="hero-footline">
              <span><strong>{BUSINESS.signature}</strong> · Residential cleaning</span>
              <a className="hero-scroll" href="#about">Discover the Charclyr feeling</a>
            </div>
          </div>
        </section>

        <section aria-labelledby="about-title" className="introduction" id="about">
          <div className="content-wrap intro-inner">
            <div className="intro-stat reveal-target">
              <strong>561</strong>
              <span>Rooted in<br />Palm Beach County</span>
            </div>
            <div className="intro-content reveal-target">
              <span className="micro-label">A more considered kind of clean</span>
              <h2 id="about-title">Come home to <span className="intro-underline">a little more calm.</span></h2>
              <p>
                Home is where the day settles. Charclyr Cleaning brings a thoughtful touch to residential cleaning, so your space feels as good as it looks—and your time feels like your own.
              </p>
              <p>
                From a regular refresh to a more detailed clean, we’ll help you find a rhythm that feels right for your home.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-title" className="services-section section-pad" id="services">
          <div className="content-wrap">
            <div className="services-topline reveal-target">
              <div>
                <span className="micro-label">Thoughtful from room to room</span>
                <h2 className="section-title" id="services-title">A clean that fits <em>your life.</em></h2>
              </div>
              <p className="section-copy">Whether it’s a regular reset or a fresh beginning, choose the cleaning that feels right for you.</p>
            </div>
            <div className="service-grid">
              {SERVICES.map((service, index) => (
                <a className="service-item" href="#contact" key={service}>
                  <span className="service-index">0{index + 1}</span>
                  <span className="service-name">{service}</span>
                  <ArrowDownRight aria-hidden="true" className="service-arrow size-[17px]" />
                </a>
              ))}
            </div>
            <p className="service-note">Have a question about what fits your space? We’d love to hear from you.</p>
          </div>
        </section>

        <section aria-labelledby="why-title" className="why-section section-pad">
          <div className="content-wrap why-layout">
            <div className="why-aside reveal-target">
              <span className="micro-label">The Charclyr difference</span>
              <h2 className="section-title" id="why-title">Care in every <em>corner.</em></h2>
              <p className="section-copy">A good clean is about more than what you see. It’s the feeling of things being just right.</p>
              <p className="why-signoff"><span aria-hidden="true" />Better Living.</p>
            </div>
            <div className="benefit-list">
              <Benefit number="01" title="Reliable & trustworthy" description="Clear communication and care you can feel comfortable welcoming into your home." icon={ShieldCheck} />
              <Benefit number="02" title="An eye for detail" description="From the surfaces you see to the small finishing touches that make a room feel complete." icon={Sparkles} />
              <Benefit number="03" title="A schedule that suits you" description="Weekly, every other week, monthly, or a one-time refresh—find your own rhythm." icon={Clock3} />
              <Benefit number="04" title="Your satisfaction matters" description="Your home and your preferences deserve thoughtful, personal attention." icon={Heart} />
            </div>
          </div>
        </section>

        <section aria-labelledby="comparison-title" className="comparison-section section-pad" id="before-after">
          <div className="content-wrap">
            <div className="comparison-heading reveal-target">
              <div>
                <span className="micro-label">An easier way to see it</span>
                <h2 className="section-title" id="comparison-title">A fresh perspective, <em>side by side.</em></h2>
              </div>
              <p className="comparison-note">A little extra care can make your favorite spaces feel new again. Explore these two room-by-room transformations.</p>
            </div>
            <div className="comparison-grid">
              {COMPARISONS.map((pair) => (
                <ComparisonSlider
                  afterAlt={pair.after}
                  afterImage={comparisonPhotos[pair.afterImage]}
                  beforeAlt={pair.before}
                  beforeImage={comparisonPhotos[pair.beforeImage]}
                  description={pair.detail}
                  key={pair.name}
                  name={pair.name}
                />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="reels-title" className="reels-section section-pad" id="reels">
          <div className="content-wrap">
            <div className="reels-heading reveal-target">
              <div>
                <span className="micro-label">A few moments of calm</span>
                <h2 className="section-title" id="reels-title">Little moments, <em>beautifully done.</em></h2>
              </div>
              <p className="section-copy">Three quiet spaces, ready for your videos.</p>
            </div>
            <div className="reels-grid">
              {REELS.map((title, index) => (
                <div className="reel-slot" key={title}>
                  <span className="reel-number">0{index + 1}</span>
                  <span aria-hidden="true" className="reel-play"><Play className="size-4" /></span>
                  <div className="reel-content">
                    <h3 className="reel-title">{title}</h3>
                    <span className="reel-placeholder">Video coming soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="gallery-title" className="gallery-section section-pad" id="gallery">
          <div className="content-wrap">
            <div className="gallery-header reveal-target">
              <div>
                <span className="micro-label">A home in its best light</span>
                <h2 className="section-title" id="gallery-title">The beauty is <em>in the details.</em></h2>
              </div>
              <p className="section-copy">Little glimpses of the spaces, details and everyday comforts that make a house feel like home.</p>
            </div>
            <ImageFanCarousel images={gallery} label="Charclyr home and cleaning gallery" />
          </div>
        </section>

        <section aria-labelledby="testimonials-title" className="testimonials-section section-pad" id="testimonials">
          <div className="content-wrap">
            <div className="testimonials-header reveal-target">
              <div>
                <span className="micro-label">Kind words belong to real people</span>
                <h2 className="section-title" id="testimonials-title">Your experience, <em>in your words.</em></h2>
              </div>
              <p className="section-copy">These spaces are reserved for genuine Charclyr customers.</p>
            </div>
            <Testimonials3 />
            <p className="testimonial-note">Genuine reviews will be added as they’re shared—with each customer’s permission.</p>
          </div>
        </section>

        <section aria-labelledby="area-title" className="service-area-section section-pad" id="area">
          <div className="content-wrap area-layout">
            <div className="area-copy reveal-target">
              <span className="micro-label">Here in South Florida</span>
              <h2 className="section-title" id="area-title">A little closer to <em>home.</em></h2>
              <p className="section-copy">Charclyr Cleaning serves homeowners across Palm Beach County, Florida.</p>
              <p className="area-highlight"><MapPin aria-hidden="true" className="size-[17px]" />Palm Beach County, Florida</p>
            </div>
            <div aria-label="Map showing Palm Beach County, Florida" className="map-frame">
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Palm+Beach+County%2C+Florida&output=embed"
                title="Map of Palm Beach County, Florida"
              />
              <div className="map-caption">Proudly serving Palm Beach County, Florida</div>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="contact-section section-pad" id="contact">
          <div className="content-wrap contact-layout">
            <div className="contact-copy reveal-target">
              <span className="micro-label">Your next breath of fresh air</span>
              <h2 className="section-title" id="contact-title">Let’s find your <em>calmer.</em></h2>
              <p className="section-copy">Tell us a little about your home and what you’re looking for. Or give us a call—we’re happy to talk it through.</p>
              <div className="contact-detail-list">
                <div className="contact-detail">
                  <span aria-hidden="true" className="contact-icon"><Phone className="size-[17px]" /></span>
                  <a href={`tel:${BUSINESS.phoneLink}`}>{BUSINESS.phoneDisplay}</a>
                </div>
                <div className="contact-detail">
                  <span aria-hidden="true" className="contact-icon"><MapPin className="size-[17px]" /></span>
                  <span>{BUSINESS.serviceArea}</span>
                </div>
                <div className="contact-detail">
                  <span aria-hidden="true" className="contact-icon"><Sparkles className="size-[17px]" /></span>
                  <span>Residential cleaning, with care.</span>
                </div>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-wrap">
          <div className="footer-main">
            <div className="footer-brand">
              <a aria-label="Charclyr Cleaning home" className="brand-lockup" href="#home">
                <span aria-hidden="true" className="brand-mark">C</span>
                <span className="brand-name">Charclyr<span className="brand-subtitle">Cleaning · Better Living.</span></span>
              </a>
              <p className="footer-brand-copy">{BUSINESS.tagline} Thoughtful residential cleaning across Palm Beach County.</p>
            </div>
            <nav aria-label="Footer navigation" className="footer-links-group">
              <span className="footer-links-heading">Explore</span>
              <a href="#about">Our approach</a>
              <a href="#services">Cleaning services</a>
              <a href="#before-after">Before & after</a>
              <a href="#gallery">Home gallery</a>
            </nav>
            <div className="footer-links-group">
              <span className="footer-links-heading">Say hello</span>
              <a href="#contact">Get a free quote</a>
              <a href={`tel:${BUSINESS.phoneLink}`}>{BUSINESS.phoneDisplay}</a>
              <a href="#area">Palm Beach County, Florida</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Charclyr Cleaning. Better Living.</span>
            <span>Made for the feeling of coming home.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Benefit({ number, title, description, icon: Icon }: {
  number: string;
  title: string;
  description: string;
  icon: typeof ShieldCheck;
}) {
  return (
    <article className="benefit-row reveal-target">
      <span className="benefit-number">{number}</span>
      <div>
        <h3 className="benefit-title">{title}</h3>
        <p className="benefit-description">{description}</p>
      </div>
      <Icon aria-hidden="true" className="benefit-arrow size-[18px]" />
    </article>
  );
}

function ComparisonSlider({
  beforeImage, afterImage, beforeAlt, afterAlt, name, description,
}: {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  name: string;
  description: string;
}) {
  const [position, setPosition] = useState(50);
  const clip = `inset(0 ${100 - position}% 0 0)`;
  const afterClip = `inset(0 0 0 ${position}%)`;

  return (
    <figure className="comparison-item reveal-target">
      <div className="comparison-image-wrap">
        <img alt={beforeAlt} className="comparison-image" src={beforeImage} />
        <img alt={afterAlt} className="comparison-image comparison-after" src={afterImage} style={{ clipPath: afterClip }} />
        <span aria-hidden="true" className="comparison-label comparison-label-before">Before</span>
        <span aria-hidden="true" className="comparison-label comparison-label-after">After</span>
        <div aria-hidden="true" className="comparison-divider" style={{ left: `${position}%` }}>
          <span className="comparison-handle"><ArrowLeftRight className="size-[17px]" /></span>
        </div>
        <input
          aria-label={`Reveal before and after ${name.toLowerCase()} photos`}
          aria-valuetext={`${position}% before, ${100 - position}% after`}
          className="comparison-range"
          max="100"
          min="0"
          onChange={(event) => setPosition(Number(event.currentTarget.value))}
          type="range"
          value={position}
        />
      </div>
      <figcaption className="comparison-caption">
        <strong>{name}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
}

function QuoteForm() {
  const [values, setValues] = useState<QuoteValues>(blankValues);
  const [errors, setErrors] = useState<Partial<Record<QuoteField, string>>>({});
  const [response, setResponse] = useState("");

  const updateField = (field: QuoteField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setResponse("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = quoteSchema.safeParse(values);
    if (!result.success) {
      const nextErrors: Partial<Record<QuoteField, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && field in blankValues) {
          nextErrors[field as QuoteField] = issue.message;
        }
      }
      setErrors(nextErrors);
      setResponse("");
      return;
    }

    setErrors({});
    setResponse(`Your request hasn’t been sent—email delivery isn’t set up yet. Please call ${BUSINESS.phoneDisplay} to request your free quote.`);
  };

  const fieldProps = (field: QuoteField) => ({
    value: values[field],
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      updateField(field, event.currentTarget.value),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field-group">
          <label className="field-label" htmlFor="quote-name">Your name</label>
          <input autoComplete="name" className="field-control" id="quote-name" maxLength={100} name="name" placeholder="First and last name" required type="text" {...fieldProps("name")} />
          {errors.name && <span className="field-message" id="name-error" role="alert">{errors.name}</span>}
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="quote-email">Email address</label>
          <input autoComplete="email" className="field-control" id="quote-email" maxLength={254} name="email" placeholder="you@example.com" required type="email" {...fieldProps("email")} />
          {errors.email && <span className="field-message" id="email-error" role="alert">{errors.email}</span>}
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="quote-phone">Phone number</label>
          <input autoComplete="tel" className="field-control" id="quote-phone" maxLength={24} name="phone" placeholder="(561) 000-0000" required type="tel" {...fieldProps("phone")} />
          {errors.phone && <span className="field-message" id="phone-error" role="alert">{errors.phone}</span>}
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="quote-service">Cleaning you have in mind</label>
          <select className="field-control field-select" id="quote-service" name="service" required {...fieldProps("service")}>
            <option value="">Select a service</option>
            {SERVICES.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
          {errors.service && <span className="field-message" id="service-error" role="alert">{errors.service}</span>}
        </div>
        <div className="field-group field-full">
          <label className="field-label" htmlFor="quote-message">Anything else we should know? <span>(optional)</span></label>
          <textarea className="field-control field-textarea" id="quote-message" maxLength={1000} name="message" placeholder="A little about your home, timing, or what you’re looking for…" {...fieldProps("message")} />
          {errors.message && <span className="field-message" id="message-error" role="alert">{errors.message}</span>}
        </div>
      </div>
      <Button className="button-gold form-submit" type="submit">
        Request my free quote <ArrowDownRight aria-hidden="true" />
      </Button>
      <p className="form-disclaimer">Email delivery isn’t connected yet. Please call {BUSINESS.phoneDisplay} to request a quote.</p>
      {response && (
        <p className="form-response" role="status">
          <CircleCheck aria-hidden="true" className="size-[17px]" />
          <span>{response}</span>
        </p>
      )}
    </form>
  );
}