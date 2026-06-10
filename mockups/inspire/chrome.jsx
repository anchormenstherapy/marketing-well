/* ============================================================
   Inspire Wellness Therapy — shared chrome components.
   Exposes Header, Footer, Book, Flourish, CTABand, FinalCta,
   SectionHead, useReveal on window for every interior page.
   Load AFTER data.js + icons.js, BEFORE the page's own script.
   ============================================================ */
const DS = window.MarketingWellCoreDesignSystem_2f2c2c;
const { Button } = DS;
const I = window.IWIcons;
const D = window.IW;
const BOOK = D.booking;

/* primary pill CTA → always the discovery call */
function Book({ children, variant = "primary", size = "lg" }) {
  return <Button variant={variant} size={size} href={BOOK} target="_blank" rel="noopener" arrow>{children}</Button>;
}

/* line–dot–line divider */
function Flourish() {
  return (
    <svg className="mm-flourish" viewBox="0 0 100 20" aria-hidden="true">
      <line x1="0" y1="10" x2="38" y2="10" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="10" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="10" r="1.3" fill="currentColor" />
      <line x1="62" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/* eyebrow + serif title (title takes JSX so a phrase can be italic) */
function SectionHead({ eyebrow, title, lede, center, max }) {
  return (
    <div className={"mm-shead" + (center ? " center" : "")} style={max ? { maxWidth: max } : null}>
      <Flourish />
      <p className="mm-shead__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lede ? <p className="mm-lede">{lede}</p> : null}
    </div>
  );
}

/* top-level site nav (multi-page) */
const SITE_NAV = [
  { href: "therapy.html", label: "Therapy", key: "therapy" },
  { href: "modalities.html", label: "Approaches", key: "modalities" },
  { href: "team.html", label: "Our Team", key: "team" },
  { href: "about.html", label: "About", key: "about" },
  { href: "blog.html", label: "Blog", key: "blog" },
  { href: "contact.html", label: "Contact", key: "contact" },
];

function Header({ active }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="mm-header">
      <div className="mm-wrap mm-header__in">
        <a className="mm-brand" href="index.html" aria-label="Inspire Wellness Therapy home">
          <img src={D.img.logoCream} alt="Inspire Wellness Therapy" />
        </a>
        <nav className="mm-nav">
          {SITE_NAV.map((n) => (
            <a key={n.key} href={n.href} className={active === n.key ? "is-active" : ""}>{n.label}</a>
          ))}
        </nav>
        <div className="mm-header__cta">
          <Button variant="primary" size="sm" href={BOOK} target="_blank" rel="noopener">Book a free call</Button>
          <button className="mm-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <I.x size={26} /> : <I.menu size={26} />}
          </button>
        </div>
      </div>
      <div className={"mm-drawer" + (open ? " is-open" : "")}>
        <nav className="mm-drawer__nav">
          <a href="index.html">Home</a>
          {SITE_NAV.map((n) => (
            <a key={n.key} href={n.href} className={active === n.key ? "is-active" : ""}>{n.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* plum CTA band */
function CTABand({ heading, sub }) {
  return (
    <section className="mm-ctaband">
      <div className="mm-ctaband__glow" aria-hidden="true"></div>
      <div className="mm-ctaband__in">
        <h2>{heading}</h2>
        <p>{sub}</p>
        <a className="mm-ctaband__btn" href={BOOK} target="_blank" rel="noopener">
          Book a free 15-minute call <I.arrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

/* radial-slate final CTA */
function FinalCta() {
  return (
    <section className="mm-final">
      <div className="mm-final__fleuron tl" aria-hidden="true">&#10086;</div>
      <div className="mm-final__fleuron br" aria-hidden="true">&#10086;</div>
      <div className="mm-wrap">
        <p className="mm-final__eyebrow">Begin when you're ready</p>
        <h2>Your healing can start <em>now.</em></h2>
        <p>Book a free 15-minute discovery call and take one decisive step toward feeling like yourself again.</p>
        <Book>Book a free 15-minute call</Book>
        <small>No pressure, no commitment · Inspire Wellness Therapy, Calgary AB</small>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mm-footer">
      <div className="mm-wrap">
        <div className="mm-foot__grid">
          <div>
            <p className="mm-foot__brand"><img src={D.img.logoCream} alt="Inspire Wellness Therapy" /></p>
            <p className="mm-foot__tag">{D.tagline}</p>
            <div className="mm-foot__contact" style={{ marginTop: 16, color: "rgba(255,255,255,.7)" }}>
              <span>{D.address[0]}, {D.address[1]}</span>
              <span>{D.phone} · {D.email}</span>
            </div>
          </div>
          <div className="mm-foot">
            <h4>Therapy</h4>
            <ul>
              <li><a href="therapy.html">All specialties</a></li>
              <li><a href="modalities.html">Our approaches</a></li>
              <li><a href="team.html">Our team</a></li>
              <li><a href="about.html">About us</a></li>
            </ul>
          </div>
          <div className="mm-foot">
            <h4>Visit</h4>
            <ul>
              <li><a href="location.html">Location</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href={BOOK} target="_blank" rel="noopener">Book a free call</a></li>
            </ul>
          </div>
          <div className="mm-foot">
            <h4>Registered &amp; member of</h4>
            <div className="mm-badges">
              {D.associations.map((a) => <span key={a}>{a}</span>)}
            </div>
          </div>
        </div>
        <div className="mm-foot__base">
          <span>© {new Date().getFullYear()} Inspire Wellness Therapy. All rights reserved.</span>
          <span>Holistic counselling for the mind, body &amp; soul.</span>
        </div>
      </div>
    </footer>
  );
}

/* scroll reveal: adds .is-in to .mm-fade when in view.
   Robust: hidden state is gated by the `js-reveal` class on <html>
   (so no-JS keeps content visible), above-the-fold elements reveal
   immediately, and a failsafe timer guarantees nothing stays hidden. */
function useReveal() {
  React.useEffect(() => {
    const els = Array.prototype.slice.call(document.querySelectorAll(".mm-fade"));
    if (!els.length) return;
    const reveal = (el) => el.classList.add("is-in");
    if (!("IntersectionObserver" in window)) { els.forEach(reveal); return; }
    const vh = window.innerHeight || 800;
    const armed = [];
    els.forEach((el) => {
      // reveal anything already at/above the fold right away; observe the rest
      if (el.getBoundingClientRect().top < vh * 0.92) reveal(el);
      else armed.push(el);
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); obs.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    armed.forEach((el) => obs.observe(el));
    // failsafe: never let content stay hidden if the observer misfires
    const failsafe = setTimeout(() => armed.forEach(reveal), 2500);
    return () => { obs.disconnect(); clearTimeout(failsafe); };
  }, []);
}

/* land acknowledgment + inclusion band (sits just above the footer) */
function LandAck() {
  return (
    <section className="mm-land">
      <div className="mm-wrap">
        <p className="mm-land__title"><I.leaf size={16} />Land acknowledgment &amp; inclusion</p>
        <p className="mm-land__body">Inspire Wellness Therapy respectfully acknowledges that what we call Alberta is the traditional and ancestral territory of many peoples, presently subject to Treaties 6, 7, and 8. We acknowledge the many First Nations, Métis and Inuit who have lived in and cared for these lands for generations.</p>
        <p className="mm-land__body">We are all-inclusive, striving to create safe, affirming, and anti-oppressive spaces to welcome and provide equal care for all members of 2SLGBTQIA+ communities.</p>
      </div>
    </section>
  );
}

Object.assign(window, { Book, Flourish, SectionHead, Header, CTABand, FinalCta, LandAck, Footer, useReveal, IW_BOOK: BOOK });
