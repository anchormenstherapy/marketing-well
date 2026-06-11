/* Inspire Wellness Therapy — Contact page.
   Hero + FAQ accordion + contact details/map + contact form.
   Reuses shared chrome (Header, Footer, Book, SectionHead, LandAck, Footer).
   Load AFTER data.js + icons.js + chrome.jsx. */
const { Accordion, Input, Textarea, PillChoice, Button } = window.MarketingWellCoreDesignSystem_2f2c2c;
const I = window.IWIcons;
const D = window.IW;
const BOOK = window.IW_BOOK;
const OFFICE = D.office;

/* ---- contact-page FAQs ---- */
const FAQS = [
  { q: "Do you accept insurance?", a: "Please check with your insurance company about coverage for mental health services or alternative therapy. We offer direct billing for a variety of providers, based on the practitioner — we direct bill to AB Blue Cross, Desjardins, Green Shield, and Manulife. You'll receive an invoice with a registration number to submit to your insurer." },
  { q: "How are sessions held?", a: "Sessions can be offered by telephone, telehealth (video), or in person. Virtual services (phone or video) are available across Canada, with video sessions on the Jane platform. All instructions are provided during your initial booking." },
  { q: "What are the fees for service?", a: "Our fees are $125 for a 30-minute session, $225 for a 50-minute session, and $300 for a 90-minute session. We also offer a sliding fee scale, which can be discussed with your practitioner during your consultation." },
  { q: "Is there a cancellation policy?", a: "Yes — we ask for 24 hours' notice prior to your appointment. Sessions can be rescheduled using your booking link. Less than 24 hours' notice will result in a full session fee. Still have questions? Get in touch and we'll be happy to answer them as soon as possible." },
  { q: "What can I expect from a session?", a: "Each initial session begins with an overview of the consent form. Depending on the service, your practitioner will then walk you through what to expect for the rest of the session. Every service is adapted to your individual needs." },
];

const FEES = [["30-minute session", "$125"], ["50-minute session", "$225"], ["90-minute session", "$300"]];

function Hero() {
  return (
    <section className="mm-hero ct-hero">
      <img className="mm-hero__bg" src={D.img.teamHero} alt="" />
      <div className="mm-hero__scrim"></div>
      <div className="mm-wrap mm-hero__in">
        <p className="mm-hero__eyebrow">Contact us</p>
        <h1 className="mm-hero__display">Calgary counselling, <em>one message away.</em></h1>
        <p className="mm-hero__sub">Searching for &ldquo;counsellors near me&rdquo;? You&rsquo;re in the right place. Send us a note and take the first step toward healing through holistic therapy.</p>
        <div className="mm-hero__cta">
          <Book>Book a free 15-minute call</Book>
          <span className="mm-hero__note">No pressure, no commitment. Just a calmer first step.</span>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }} id="faqs">
      <div className="mm-wrap ct-faqs">
        <div className="ct-faqs__head">
          <p className="mm-shead__eyebrow">Good to know</p>
          <h2>Questions,<br /><em>answered.</em></h2>
          <p className="ct-faqs__sub">A few of the things people most often ask before their first session. Still wondering about something? Just ask.</p>
          <div className="ct-fees">
            <p className="ct-fees__lab">Session fees</p>
            {FEES.map((f) => (
              <div className="ct-fees__row" key={f[0]}><span>{f[0]}</span><b>{f[1]}</b></div>
            ))}
            <p className="ct-fees__note">Sliding scale available — ask your practitioner.</p>
          </div>
        </div>
        <div className="ct-faqs__list">
          <Accordion items={FAQS} defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }} id="contact">
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="Get in touch"
          title={<>We&rsquo;d love to <em>hear from you</em></>}
          lede="Fill in the form below to connect with our team, or reach us directly using the details here. We typically reply within one business day." />
        <div className="ct-contact">
          <aside className="ct-info">
            <div className="ct-info__row">
              <span className="ct-info__ic"><I.mapPin size={20} /></span>
              <div>
                <p className="ct-info__lab">{OFFICE.name}</p>
                <p className="ct-info__val">{OFFICE.suite}<br />{OFFICE.cityLine}</p>
                <a className="ct-info__link" href={OFFICE.mapLink} target="_blank" rel="noopener">Get directions <I.arrowRight size={14} /></a>
              </div>
            </div>
            <div className="ct-info__row">
              <span className="ct-info__ic"><I.phone size={20} /></span>
              <div>
                <p className="ct-info__lab">Phone</p>
                <a className="ct-info__val ct-info__contact" href={"tel:+1" + D.phone.replace(/\D/g, "")}>{D.phone}</a>
              </div>
            </div>
            <div className="ct-info__row">
              <span className="ct-info__ic"><I.mail size={20} /></span>
              <div>
                <p className="ct-info__lab">Email</p>
                <a className="ct-info__val ct-info__contact" href={"mailto:" + D.email}>{D.email}</a>
              </div>
            </div>
            <div className="ct-map">
              <iframe
                title="Map to Inspire Wellness Therapy — 1333 8 Street SW #315, Calgary"
                src={OFFICE.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen></iframe>
            </div>
            <p className="mm-crisis">If you are in immediate distress, please contact your local distress centre or call <b>911</b>. You can also call or text <b>9-8-8</b> (Suicide Crisis Helpline), available 24/7.</p>
          </aside>

          <div className="ct-form">
            {sent ? (
              <div className="ct-form__sent">
                <span className="ct-form__check"><I.check size={30} /></span>
                <h3>Thank you for reaching out.</h3>
                <p>We&rsquo;ve received your message and will be in touch within one business day. If it&rsquo;s urgent, please book a free discovery call.</p>
                <Book>Book a free 15-minute call</Book>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <p className="ct-form__legend">Your name</p>
                <div className="ct-form__row">
                  <Input label="First name" name="first" placeholder="Your first name" required />
                  <Input label="Last name" name="last" placeholder="Your last name" required />
                </div>
                <Input label="Email" type="email" name="email" placeholder="you@email.com" required />
                <Textarea label="Message" name="message" rows={5} placeholder="Tell us a little about what's bringing you in. No detail required." required />
                <PillChoice label="Are you over 18 years old?" name="adult" columns={2} options={["Yes", "No"]} />
                <Button variant="primary" size="lg" type="submit" arrow style={{ width: "100%", marginTop: 8 }}>Send message</Button>
                <p className="ct-form__fine">By submitting, you agree to be contacted about your enquiry. We never share your information.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  useReveal();
  return (
    <div className="theme-slate mm">
      <Header active="contact" />
      <Hero />
      <Faqs />
      <ContactForm />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
