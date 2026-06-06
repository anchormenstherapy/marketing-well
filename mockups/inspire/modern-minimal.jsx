/* Inspire Wellness Therapy — Variation 3: Modern Minimal with Depth */
const DS = window.MarketingWellCoreDesignSystem_2f2c2c;
const { Button, Accordion } = DS;
const I = window.IWIcons;
const D = window.IW;
const BOOK = D.booking;
const PILLAR_SUB = { Mind: "clarity & understanding", Body: "safety & regulation", Soul: "meaning & connection" };
const SPEC_ICON = { flower: I.flower, cloud: I.cloud, shield: I.shield, zap: I.zap, repeat: I.repeat, heart: I.heart, leaf: I.leaf, users: I.users, sprout: I.sprout, child: I.child, home: I.home, sparkle: I.sparkle, compass: I.compass, user: I.user, wind: I.wind, rainbow: I.rainbow };

function Book({ children, variant = "primary", size = "lg" }) {
  return <Button variant={variant} size={size} href={BOOK} target="_blank" rel="noopener" arrow>{children}</Button>;
}

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

const NAV = [
  { id: "approach", label: "Approach" },
  { id: "services", label: "Services" },
  { id: "process", label: "How it works" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [active, setActive] = React.useState("approach");
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="mm-header">
      <div className="mm-wrap mm-header__in">
        <a className="mm-brand" href="#top" aria-label="Inspire Wellness Therapy"><img src={D.img.logoCream} alt="Inspire Wellness Therapy" /></a>
        <nav className="mm-nav">
          {NAV.map((n) => (
            <a key={n.id} href={"#" + n.id} className={active === n.id ? "is-active" : ""}>{n.label}</a>
          ))}
        </nav>
        <Button variant="primary" size="sm" href={BOOK} target="_blank" rel="noopener">Book a free call</Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mm-hero">
      <img className="mm-hero__bg" src={D.img.emdr} alt="" />
      <div className="mm-hero__scrim"></div>
      <div className="mm-wrap mm-hero__in">
        <p className="mm-hero__eyebrow">Counselling &amp; therapy · Calgary, Alberta</p>
        <h1>Healing for the<br /><em>whole</em> you.</h1>
        <p className="mm-hero__sub">Holistic, evidence-based therapy for children, teens, women, men, and couples, plus assessments, coaching, and Reiki. Mind, body, and soul.</p>
        <div className="mm-hero__cta">
          <Book>Book a free 15-minute call</Book>
          <span className="mm-hero__note">No pressure, no commitment · Most clients seen within 1 week</span>
        </div>
        <div className="mm-trust">
          <div className="mm-trust__in">
            <span className="mm-trust__label"><I.shield size={19} />Direct billing to 9+ insurers</span>
            <div className="mm-trust__names">
              {D.insurers.map((n) => <span key={n}>{n}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MindBodySoul() {
  return (
    <section id="approach" className="mm-mbs" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <div className="mm-shead">
          <Flourish />
          <p className="mm-shead__eyebrow">Our approach</p>
          <h2>We don't treat a symptom. We care for <em>a whole person.</em></h2>
          <p className="mm-lede">Your mind, your body, and your sense of self are not separate problems. We work with all three, so the change actually holds.</p>
        </div>
        <div className="mm-mbs__grid">
          {D.pillars.map((p) => (
            <div className="mm-mbs__col" key={p.key}>
              <h3>{p.key}</h3>
              <i>{PILLAR_SUB[p.key]}</i>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <div className="mm-shead center">
          <Flourish />
          <p className="mm-shead__eyebrow">What we offer</p>
          <h2>Six ways we <em>help you forward</em></h2>
        </div>
        <div className="mm-pillars">
          {D.servicePillars.map((s, i) => (
            <article className="mm-pillar" key={s.title}>
              <div className="mm-pillar__n">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mm-assess">
          <b>Assessments for</b>
          {D.assessments.map((a) => <span key={a}>{a}</span>)}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="mm-ctaband">
      <div className="mm-ctaband__glow" aria-hidden="true"></div>
      <div className="mm-wrap mm-ctaband__in">
        <h2>Not sure where to start? <em>That's okay.</em></h2>
        <p>A free 15-minute call is the easiest first step. No pressure, no commitment, just a chance to see if we're the right fit for what you're carrying.</p>
        <a className="mm-ctaband__btn" href={BOOK} target="_blank" rel="noopener">
          Book a free 15-minute call
          <I.arrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <div className="mm-shead">
          <Flourish />
          <p className="mm-shead__eyebrow">How it works</p>
          <h2>From first call to a plan that's <em>yours</em></h2>
        </div>
        <div className="mm-steps">
          {D.steps.map((s) => (
            <div className="mm-step" key={s.n}>
              <div className="mm-step__n">STEP {s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 52 }}><Book>Book your free 15-minute call</Book></div>
      </div>
    </section>
  );
}

function Specializations() {
  return (
    <section id="specializations" className="mm-white" style={{ padding: "var(--section-y) 0 0" }}>
      <div className="mm-wrap">
        <div className="mm-shead center">
          <Flourish />
          <p className="mm-shead__eyebrow">What we help with</p>
          <h2>You don't need the words for it <em>yet</em></h2>
        </div>
        <div className="mm-spec__grid">
          {D.specCards.map((s) => {
            const Ic = SPEC_ICON[s.icon] || I.flower;
            return (
              <article className="mm-spec__card" key={s.title}>
                <div className="mm-spec__med"><Ic size={24} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <a className="mm-spec__link" href="#">{s.link} <I.arrowRight size={14} /></a>
              </article>
            );
          })}
        </div>
        <div className="mm-appr">
          <p className="mm-appr__lab">Evidence-based approaches we draw from</p>
          <div className="mm-appr__row">
            {D.approaches.map((a) => (
              <span key={a.name}><b>{a.name}</b><em>{a.full}</em></span>
            ))}
          </div>
        </div>
      </div>
      <img className="mm-spec-photo" src={D.img.field} alt="A person walking a quiet path through a golden field at sunset" />
    </section>
  );
}

function TeamCard({ p }) {
  const first = p.name.split(" ")[0];
  return (
    <article className="mm-tc">
      <img className="mm-tc__ph" src={p.photo} alt={p.name} />
      <div className="mm-tc__body">
        <h3 className="mm-tc__name">{p.name}</h3>
        {p.tag ? <p className="mm-tc__tag">{p.tag}</p> : null}
        {p.format ? <p className="mm-tc__fmt">{p.format}</p> : null}
        <ul className="mm-tc__creds">
          {p.creds.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <div className="mm-tc__actions">
          <a className="mm-tc__meet" href="#">Meet {first} <I.arrowRight size={14} /></a>
          <a className="mm-tc__book" href={BOOK} target="_blank" rel="noopener">Book with {first}</a>
        </div>
      </div>
    </article>
  );
}

function Team() {
  return (
    <section id="team" className="mm-proc" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <div className="mm-shead center" style={{ maxWidth: 800 }}>
          <Flourish />
          <p className="mm-shead__eyebrow">The team</p>
          <h2>Meet the people behind <em>your care</em></h2>
          <p className="mm-lede">Psychologists, counsellors, social workers, a wellness coach and Reiki practitioners, a multidisciplinary team in Calgary, so you can find genuinely the right fit.</p>
        </div>
        <div className="mm-team__grid">
          {D.team.map((p) => <TeamCard p={p} key={p.name} />)}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const f = D.founder;
  return (
    <section id="founder" className="mm-founder" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-founder__grid">
        <img className="mm-founder__img" src={f.photo} alt="Alysha, Founder of Inspire Wellness Therapy" />
        <div>
          <p className="mm-founder__eyebrow">Meet our founder</p>
          <h2>The heart behind <em>Inspire Wellness</em></h2>
          {f.body.map((para, i) => <p key={i}>{para}</p>)}
          <p className="mm-founder__sig">— Alysha</p>
          <p className="mm-founder__title">{f.title}</p>
          <Book>Book a free 15-minute call</Book>
        </div>
      </div>
    </section>
  );
}

function FaqContact() {
  return (
    <section id="contact" className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <div className="mm-fc__grid">
          <div>
            <div className="mm-shead">
              <Flourish />
              <p className="mm-shead__eyebrow">Good to know</p>
              <h2>Questions, <em>answered</em></h2>
            </div>
            <div style={{ marginTop: 24 }}><Accordion items={D.faqs} defaultOpen={0} /></div>
          </div>
          <div>
            <div className="mm-shead">
              <Flourish />
              <p className="mm-shead__eyebrow">Visit us</p>
              <h2>Calgary &amp; <em>online in AB</em></h2>
            </div>
            <div className="mm-contact__card" style={{ marginTop: 24 }}>
              <div className="mm-cline"><span className="ic"><I.mapPin size={20} /></span><div><b>In person</b><span>{D.address[0]}, {D.address[1]}</span></div></div>
              <div className="mm-cline"><span className="ic"><I.laptop size={20} /></span><div><b>Online</b><span>Secure video across Alberta</span></div></div>
              <div className="mm-cline"><span className="ic"><I.phone size={20} /></span><div><b>Phone</b><span>{D.phone}</span></div></div>
              <div className="mm-cline"><span className="ic"><I.mail size={20} /></span><div><b>Email</b><span>{D.email}</span></div></div>
              <div style={{ marginTop: 22 }}><Book size="md">Book a free 15-minute call</Book></div>
              <p className="mm-crisis">In a crisis, please call <b>911</b>, or call or text <b>9-8-8</b> (Suicide Crisis Helpline), 24/7. Inspire Wellness Therapy does not provide emergency services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mm-final">
      <div className="mm-final__fleuron tl" aria-hidden="true">&#10086;</div>
      <div className="mm-final__fleuron br" aria-hidden="true">&#10086;</div>
      <div className="mm-wrap">
        <p className="mm-hero__eyebrow" style={{ color: "var(--stone)" }}>Begin when you're ready</p>
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
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", marginTop: 14, maxWidth: 320, lineHeight: 1.6 }}>{D.address[0]}, {D.address[1]} · {D.email}</p>
          </div>
          <div className="mm-foot">
            <h4>Explore</h4>
            <ul>
              <li><a href="#approach">Our approach</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#specializations">What we help with</a></li>
              <li><a href="#team">Our team</a></li>
              <li><a href="#contact">Contact</a></li>
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

function App() {
  return (
    <div className="theme-slate mm">
      <Header /><Hero /><MindBodySoul /><Services /><CTABand /><Specializations /><Process />
      <Founder /><Team /><FaqContact /><FinalCta />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
