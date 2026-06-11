/* Inspire Wellness Therapy — Location & Contact page.
   Single downtown Calgary office (Dorchester Square). Reuses shared chrome
   (Header, Footer, Book, Flourish, SectionHead, FinalCta, LandAck).
   Load AFTER data.js + icons.js + chrome.jsx. */
const { Input, Textarea, PillChoice, Button } = window.MarketingWellCoreDesignSystem_2f2c2c;
const I = window.IWIcons;
const D = window.IW;
const BOOK = window.IW_BOOK;
const OFFICE = D.office;

/* ---- counselling services we offer ---- */
const SERVICES = [
  { ic: "user", t: "Professional counselling", b: "Personalized therapy for individuals, couples, and families." },
  { ic: "laptop", t: "Telepsychology", b: "Convenient, secure online therapy for flexible access to care." },
  { ic: "clipboard", t: "Psychological assessments", b: "Comprehensive evaluations for educational, career, or diagnostic needs." },
  { ic: "child", t: "Play therapy", b: "Play-based, age-appropriate care that helps children process big feelings." },
];
const SVC_ICON = { user: I.user, laptop: I.laptop, clipboard: I.clipboard, child: I.child };

const REASONS = ["Booking an appointment", "A free consultation", "A psychological assessment", "Direct billing", "Something else"];

function Hero() {
  return (
    <section className="mm-hero lc-hero">
      <img className="mm-hero__bg" src={D.img.locationHero} alt="" />
      <div className="mm-hero__scrim"></div>
      <div className="mm-wrap mm-hero__in">
        <p className="mm-hero__eyebrow">Visit &amp; contact</p>
        <h1 className="mm-hero__display">Compassionate therapy in <em>downtown Calgary.</em></h1>
        <p className="mm-hero__sub">Our new office at Dorchester Square offers warm, welcoming care for children, teens, adults, couples, and families — in person and online across Alberta.</p>
        <div className="mm-hero__cta">
          <Book>Book a free 15-minute call</Book>
          <span className="mm-hero__note">No pressure, no commitment. Just a calmer first step.</span>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow">
        <SectionHead center
          eyebrow="Welcome"
          title={<>Welcome to our downtown <em>Calgary office</em></>} />
        <div className="mm-prose lc-welcome" style={{ marginTop: 28 }}>
          <p>Thank you for considering <strong>Inspire Wellness Therapy</strong> as your trusted partner in mental health and well-being. We are proud to support individuals and families in Calgary and beyond as they navigate life&rsquo;s challenges.</p>
          <p>Our dedicated team of psychologists, counsellors, and mental health practitioners provides compassionate, professional care tailored to meet your unique needs. If you have any questions or are ready to take the next step, please don&rsquo;t hesitate to reach out — we&rsquo;re here to help.</p>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }} id="visit">
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="Find us"
          title={<>Conveniently located <em>at Dorchester Square</em></>}
          lede="Steps from Beltline, Mission, and Kensington — with in-person and virtual therapy to fit your schedule." />
        <div className="lc-visit">
          <div className="lc-map mm-fade">
            <iframe
              title="Map to Inspire Wellness Therapy — 1333 8 Street SW #315, Calgary"
              src={OFFICE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen></iframe>
          </div>
          <aside className="lc-details mm-fade">
            <div className="lc-detail">
              <span className="lc-detail__ic"><I.mapPin size={20} /></span>
              <div>
                <p className="lc-detail__lab">Our office</p>
                <p className="lc-detail__val">{OFFICE.name}</p>
                <p className="lc-detail__sub">{OFFICE.suite}<br />{OFFICE.cityLine}</p>
                <a className="lc-detail__link" href={OFFICE.mapLink} target="_blank" rel="noopener">Get directions <I.arrowRight size={14} /></a>
              </div>
            </div>
            <div className="lc-detail">
              <span className="lc-detail__ic"><I.clock size={20} /></span>
              <div style={{ flex: 1 }}>
                <p className="lc-detail__lab">Hours</p>
                <dl className="lc-hours">
                  {OFFICE.hours.map((h) => (
                    <div className={"lc-hours__row" + (h[1] === "Closed" ? " is-closed" : "")} key={h[0]}>
                      <dt>{h[0]}</dt>
                      <dd>{h[1]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="lc-detail">
              <span className="lc-detail__ic"><I.mail size={20} /></span>
              <div>
                <p className="lc-detail__lab">Email</p>
                <a className="lc-detail__val lc-detail__email" href={"mailto:" + D.email}>{D.email}</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="How we help"
          title={<>Counselling services <em>we offer</em></>}
          lede="We support your mental health journey with a range of services, in person in Calgary and securely online across Alberta." />
        <div className="lc-services">
          {SERVICES.map((s) => {
            const Ic = SVC_ICON[s.ic];
            return (
              <article className="lc-svc mm-fade" key={s.t}>
                <span className="lc-svc__ic"><Ic size={22} /></span>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Serving() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-imgsplit">
        <div className="mm-imgsplit__media">
          <img className="mm-imgsplit__img" src={D.img.window} alt="A calm, naturally lit therapy room at Inspire Wellness Therapy" />
        </div>
        <div>
          <p className="mm-shead__eyebrow">Serving Calgary &amp; beyond</p>
          <h2>A warm space for the <em>whole community</em></h2>
          <p>We&rsquo;re thrilled to welcome clients to our new office in downtown Calgary at 1333 8 Street SW. Inspire Wellness Therapy continues to provide compassionate, professional mental health support in a warm and welcoming environment for children, teens, adults, couples, and families.</p>
          <p>Conveniently located near Beltline, Mission, Kensington, and surrounding communities, our space offers both in-person and virtual therapy options to support your needs and your schedule.</p>
          <div className="lc-near">
            {OFFICE.near.map((n) => <span key={n}>{n}</span>)}
          </div>
          <div style={{ marginTop: 30 }}>
            <Book>Book an appointment</Book>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }} id="contact">
      <div className="mm-wrap lc-contact">
        <div className="lc-contact__intro">
          <p className="mm-shead__eyebrow">Get in touch</p>
          <h2 className="lc-contact__h">We&rsquo;d love to <em>hear from you</em></h2>
          <p className="lc-contact__lede">Have a question, or ready to book? Send us a note and our team will get back to you. Prefer to start with a real conversation? Book a free 15-minute discovery call instead.</p>
          <ul className="lc-contact__list">
            <li><span><I.mail size={18} /></span><a href={"mailto:" + D.email}>{D.email}</a></li>
            <li><span><I.mapPin size={18} /></span>{OFFICE.name} · {OFFICE.suite}</li>
            <li><span><I.calendar size={18} /></span>Most new clients seen within one week</li>
          </ul>
          <p className="mm-crisis">In a crisis, please call <b>911</b>, or call or text <b>9-8-8</b> (Suicide Crisis Helpline), available 24/7. Inspire Wellness Therapy does not provide emergency services.</p>
        </div>
        <div className="lc-form">
          {sent ? (
            <div className="lc-form__sent">
              <span className="lc-form__check"><I.check size={30} /></span>
              <h3>Thank you for reaching out.</h3>
              <p>We&rsquo;ve received your message and will be in touch soon. If it&rsquo;s urgent, please book a free discovery call.</p>
              <Book>Book a free 15-minute call</Book>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="lc-form__row">
                <Input label="First name" name="first" placeholder="Your first name" required />
                <Input label="Last name" name="last" placeholder="Your last name" required />
              </div>
              <div className="lc-form__row">
                <Input label="Email" type="email" name="email" placeholder="you@email.com" required />
                <Input label="Phone (optional)" type="tel" name="phone" placeholder="(587) 000-0000" />
              </div>
              <PillChoice label="I'm reaching out about" name="reason" columns={2} options={REASONS} />
              <Textarea label="How can we help?" name="message" rows={4} placeholder="Share a little about what's bringing you in. No detail required." />
              <Button variant="primary" size="lg" type="submit" arrow style={{ width: "100%", marginTop: 8 }}>Send message</Button>
              <p className="lc-form__fine">By submitting, you agree to be contacted about your enquiry. We never share your information.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function App() {
  useReveal();
  return (
    <div className="theme-slate mm">
      <Header active="location" />
      <Hero />
      <Welcome />
      <Visit />
      <Services />
      <Serving />
      <FinalCta />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
