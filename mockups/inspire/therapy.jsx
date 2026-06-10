/* Inspire Wellness Therapy — Therapy / Specialty page template (Anxiety).
   Representative content; real copy lands later. Reuses shared chrome
   (Header, Footer, Book, Flourish, SectionHead, CTABand, FinalCta). */
const { Accordion } = window.MarketingWellCoreDesignSystem_2f2c2c;
const I = window.IWIcons;
const D = window.IW;
const BOOK = window.IW_BOOK;

/* ---- page content (Anxiety) ---- */
const SIGNS = [
  { ic: "wind", t: "Racing thoughts that won't slow down, even when you're exhausted" },
  { ic: "cloud", t: "A constant sense that something bad is about to happen" },
  { ic: "clock", t: "Trouble falling asleep, or waking with your mind already spinning" },
  { ic: "shield", t: "Avoiding people, places, or tasks that feel like too much" },
  { ic: "heart", t: "A racing heart, tight chest, or stomach in knots" },
  { ic: "leaf", t: "Feeling on edge, irritable, or like you can never fully rest" },
];

const MODALITIES = [
  { name: "CBT", full: "Cognitive Behavioural Therapy" },
  { name: "ACT", full: "Acceptance & Commitment Therapy" },
  { name: "EMDR", full: "Eye Movement Desensitization & Reprocessing" },
  { name: "Somatic", full: "Body-based nervous-system care" },
  { name: "DBT", full: "Dialectical Behavioural Therapy" },
];

const EXPECT = [
  { n: "01", t: "We start where you are", b: "Your first session is about understanding your anxiety, what triggers it, how it shows up in your body, and what you most want to feel instead." },
  { n: "02", t: "We build real tools", b: "Together we practise skills to calm a spiralling mind and a braced body, so you can use them in the moments that actually matter." },
  { n: "03", t: "We go to the root", b: "When you're ready, we gently explore what's underneath the worry, so relief lasts beyond the symptoms." },
];

/* The Inspire Wellness Therapy Process */
const ASPECTS = [
  { k: "Past self", v: "Nurture", d: "We gently tend to the experiences that shaped you, so old wounds finally have room to heal." },
  { k: "Present self", v: "Identify", d: "We notice the patterns running today, the triggers, the habits, the way anxiety shows up right now." },
  { k: "Future self", v: "Rediscover", d: "We reconnect you with who you're becoming, and the calmer, fuller life you're moving toward." },
];

const PROCESS = [
  { n: "01", t: "Book a free 15-minute discovery call", b: "Book with the therapist of your choice. Not sure who's the right fit? Book with our clinical director, Shianne Pearn, and she'll match you with an aligned therapist, in person in Calgary or online across Alberta." },
  { n: "02", t: "Meet for your consultation", b: "Your consultation happens online via secure video on the Jane App, or by phone, whichever feels most comfortable for you." },
  { n: "03", t: "Your first appointment", b: "Your therapist works with you to create your personalized self-discovery plan. Continue in person in Calgary or virtually through telehealth." },
];

/* Services & fees (per page; anxiety = individual-led) */
const FEES = [
  { title: "Individual Therapy", fmt: "Telehealth or in person", rows: [["30 minutes", "$125"], ["50 minutes", "$225"], ["90 minutes", "$300"]] },
  { title: "Relationship Therapy", fmt: "Telehealth or in person", rows: [["50 minutes", "$225"], ["90 minutes", "$300"]] },
  { title: "Family Therapy", fmt: "Telehealth or in person", rows: [["50 minutes", "$225"], ["90 minutes", "$300"]] },
];

const ANX_FAQS = [
  { q: "Is what I'm feeling really anxiety, or am I overreacting?", a: "If worry is getting in the way of your sleep, relationships, work, or peace of mind, it's worth support, full stop. You don't need a diagnosis or a 'good enough' reason to reach out. Anxiety is one of the most common and most treatable reasons people start therapy." },
  { q: "How long until I feel better?", a: "Everyone is different, but many people notice a shift in the first few sessions as they build tools to manage the day-to-day. Deeper, lasting change takes a little longer, and we move entirely at your pace." },
  { q: "Will I have to talk about everything right away?", a: "No. You are always in control of what you share and when. We build safety first, and we never push you past what feels manageable." },
  { q: "Do you offer anxiety therapy online?", a: "Yes. We see clients in person at our Calgary office and securely online across Alberta, whichever helps you feel most comfortable." },
];

const ANX_THERAPISTS = ["Helena Morris", "Khanjan Pandya", "Jennifer Seniuk"];
const RELATED = ["Depression", "Burnout", "OCD", "Trauma", "Self Worth", "Women's Health"];

const SIGN_ICON = { wind: I.wind, cloud: I.cloud, clock: I.clock, shield: I.shield, heart: I.heart, leaf: I.leaf };

function Hero() {
  return (
    <section className="mm-ihero">
      <div className="mm-wrap mm-ihero__grid">
        <div>
          <nav className="mm-crumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="therapy.html">What we help with</a>
            <span className="sep">/</span>
            <span className="cur">Anxiety</span>
          </nav>
          <p className="mm-ihero__eyebrow">Anxiety therapy</p>
          <h1>When worry won't <em>switch off.</em></h1>
          <p className="mm-ihero__sub">If your mind races, your chest tightens, and rest feels impossible, you are not broken and you are not alone. Anxiety is one of the most common, and most treatable, reasons people reach out.</p>
          <div className="mm-ihero__cta">
            <Book>Book a free 15-minute call</Book>
            <span className="mm-ihero__note">No pressure, no commitment. Just a calmer first step.</span>
          </div>
        </div>
        <div className="mm-ihero__media">
          <img className="mm-ihero__img" src={D.img.window} alt="A person sitting calmly by a window with a warm drink" />
          <div className="mm-ihero__badge">
            <span className="ic"><I.shield size={22} /></span>
            <div><b>Direct billing available</b><small>Covered by most extended health plans</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signs() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="Does this sound familiar?"
          title={<>Anxiety wears <em>many faces</em></>}
          lede="It rarely looks like one thing. You might recognise yourself in a few of these, or in something that isn't here at all." />
        <div className="mm-signs__grid">
          {SIGNS.map((s) => {
            const Ic = SIGN_ICON[s.ic];
            return (
              <div className="mm-sign mm-fade" key={s.t}>
                <span className="mm-sign__ic"><Ic size={19} /></span>
                <p>{s.t}</p>
              </div>
            );
          })}
        </div>
        <p className="mm-signs__note">You don't need every one of these to deserve support.</p>
      </div>
    </section>
  );
}

function HowWeHelp() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead
          eyebrow="Our approach"
          title={<>A calmer mind is a skill <em>you can build</em></>} />
        <div className="mm-split">
          <div className="mm-prose">
            <p>Anxiety isn't a personal failing or something you should be able to think your way out of. It's your nervous system trying to keep you safe, working overtime. The goal of therapy isn't to switch off every feeling. It's to help your body and mind feel safe enough to settle.</p>
            <p>We start by understanding <strong>your</strong> anxiety, the triggers, the spirals, the way it shows up in your body, then build practical tools you can actually use when the worry hits. From there, when you're ready, we gently explore what's underneath, so relief lasts beyond the symptoms.</p>
            <p>Most importantly, you set the pace. Nothing here is rushed, and nothing is forced.</p>
          </div>
          <aside className="mm-aside">
            <h3>Approaches we draw from</h3>
            <p className="sub">Evidence-based, blended for you</p>
            <div className="mm-chips">
              {MODALITIES.map((m) => <a key={m.name} href="modalities.html" title={m.full}>{m.name}</a>)}
            </div>
            <div style={{ marginTop: 24, paddingTop: 22, borderTop: "1px solid var(--line)" }}>
              <h3 style={{ fontSize: 19 }}>Sessions your way</h3>
              <p className="sub" style={{ marginBottom: 0 }}>In person in Calgary, or securely online across Alberta.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={760}
          eyebrow="Our process"
          title={<>The Inspire Wellness Therapy <em>Process</em></>}
          lede="We believe every person holds three aspects of self. Lasting healing means caring for all three." />
        <div className="mm-aspects">
          {ASPECTS.map((a, i) => (
            <div className="mm-aspect mm-fade" key={a.k}>
              <span className="mm-aspect__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{a.k}</h3>
              <p className="mm-aspect__v">{a.v}</p>
              <p>{a.d}</p>
            </div>
          ))}
        </div>
        <div className="mm-proc-steps">
          <p className="mm-proc-steps__lab">How it works</p>
          <div className="mm-steps">
            {PROCESS.map((s) => (
              <div className="mm-step" key={s.n}>
                <div className="mm-step__n">STEP {s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ p }) {
  const first = p.name.split(" ")[0];
  return (
    <article className="mm-tc mm-fade">
      <img className="mm-tc__ph" src={p.photo} alt={p.name} />
      <div className="mm-tc__body">
        <h3 className="mm-tc__name">{p.name}</h3>
        {p.tag ? <p className="mm-tc__tag">{p.tag}</p> : null}
        {p.format ? <p className="mm-tc__fmt">{p.format}</p> : null}
        <ul className="mm-tc__creds">{p.creds.map((c) => <li key={c}>{c}</li>)}</ul>
        <div className="mm-tc__actions">
          <a className="mm-tc__meet" href="team.html">Meet {first} <I.arrowRight size={14} /></a>
          <a className="mm-tc__book" href={BOOK} target="_blank" rel="noopener">Book with {first}</a>
        </div>
      </div>
    </article>
  );
}

function Therapists() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={760}
          eyebrow="Who you'll work with"
          title={<>Meet your Calgary <em>anxiety team</em></>}
          lede="Psychologists, counsellors, social workers and a wellness coach, all here to help you feel steadier. Not sure who's the right fit? Your free call will match you." />
        <div className="mm-team__grid">
          {D.team.map((p) => <TeamCard p={p} key={p.name} />)}
        </div>
      </div>
    </section>
  );
}

function Fees() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="Our services & fees"
          title={<>Clear, upfront <em>pricing</em></>}
          lede="Direct billing available to 9+ insurers, so most clients pay little or nothing out of pocket." />
        <div className="mm-fees__grid">
          {FEES.map((f) => (
            <article className="mm-fee mm-fade" key={f.title}>
              <h3>{f.title}</h3>
              <p className="mm-fee__fmt">{f.fmt}</p>
              {f.rows.map((r) => (
                <div className="mm-fee__row" key={r[0]}>
                  <span>{r[0]}</span>
                  <b>{r[1]}</b>
                </div>
              ))}
            </article>
          ))}
        </div>
        <p className="mm-fees__note">Every journey starts with a free 15-minute discovery call.</p>
      </div>
    </section>
  );
}

function Related() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="You might also be carrying"
          title={<>Anxiety rarely <em>travels alone</em></>}
          lede="If more than one of these feels true, that's okay. We treat the whole person, not a single label." />
        <div className="mm-related__grid">
          {RELATED.map((r) => (
            <a className="mm-related__cell" href="therapy.html" key={r}>
              <span>{r}</span>
              <I.arrowRight size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow">
        <SectionHead center
          eyebrow="Good to know"
          title={<>Questions about <em>anxiety therapy</em></>} />
        <div style={{ marginTop: 34 }}><Accordion items={ANX_FAQS} defaultOpen={0} /></div>
        <p className="mm-crisis" style={{ maxWidth: 620, margin: "32px auto 0" }}>In a crisis, please call <b>911</b>, or call or text <b>9-8-8</b> (Suicide Crisis Helpline), available 24/7. Inspire Wellness Therapy does not provide emergency services.</p>
      </div>
    </section>
  );
}

function App() {
  useReveal();
  return (
    <div className="theme-slate mm">
      <Header active="therapy" />
      <Hero />
      <Signs />
      <HowWeHelp />
      <Process />
      <Therapists />
      <Fees />
      <CTABand
        heading={<>You don't have to carry this <em>alone.</em></>}
        sub="A free 15-minute call is the easiest first step. We'll listen first, then help you find the right support for what you're going through." />
      <Related />
      <Faq />
      <FinalCta />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
