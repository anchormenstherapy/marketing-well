/* Inspire Wellness Therapy — About page.
   Rebuilds the client's live About page content in the Modern Minimal style.
   Reuses shared chrome (Header, Footer, Book, Flourish, SectionHead, CTABand,
   FinalCta, LandAck). Load AFTER data.js + icons.js + chrome.jsx. */
const I = window.IWIcons;
const D = window.IW;
const BOOK = window.IW_BOOK;

const FOUNDER = D.founder;
const OFFER = [
  <>Inspire Wellness Therapy is a diverse, inclusive wellness practice in Calgary offering <strong>therapy, life &amp; wellness coaching and Reiki services</strong> through a holistic, person-centred approach. Our team is committed to supporting individuals, relationships, and families in meaningful ways that honour each person&rsquo;s unique journey of growth, healing, and self-discovery.</>,
  <>All of our practitioners work from a holistic framework that focuses on maximizing self-potential while meeting you where you are. Whether you are seeking therapeutic support for mental health concerns or coaching to navigate personal goals, life transitions, or overall well-being, we are here to walk alongside you.</>,
  <>The process of therapy or coaching can hold many uncertainties, and we strive to create a supportive, grounded, and compassionate space throughout your journey.</>,
  <>We proudly offer approaches that extend beyond conventional counselling, including culturally responsive therapy, somatic-based work, neurodivergent-affirming care, and holistic life &amp; wellness coaching. Our Calgary-based psychologists, therapists, and coaches collaborate to ensure you receive the type of support that best aligns with your needs &mdash; whether that is healing, growth, clarity, or direction.</>,
  <>We offer <strong>HIPAA-compliant telehealth services across Alberta and BC</strong>, as well as <strong>in-person holistic therapy in Alberta</strong>, and <strong>life and wellness coaching sessions across Canada</strong>. We embrace a whole-person model of care, recognizing that meaningful change happens when the mind, body, and inner experience are nurtured together. Through therapy or coaching, we work with you to explore the many dimensions of your life, uncover inner strengths, and support lasting, balanced transformation.</>,
];

/* Core values — ordered C · A · L · M so the letter tiles spell CALM */
const VALUES = [
  { letter: "C", name: "Compassion", desc: "Showing kindness, empathy, and understanding toward oneself and others to promote healing and well-being." },
  { letter: "A", name: "Authenticity", desc: "Being genuine, honest, and true to oneself, for greater self-acceptance and fulfillment." },
  { letter: "L", name: "Liberation", desc: "The belief in facilitating freedom, autonomy, and empowerment for all." },
  { letter: "M", name: "Mindfulness", desc: "Focusing on each aspect of self — past, present, and future." },
];

/* Three aspects of self */
const ASPECTS = [
  { k: "Past self", v: "Nurture", d: "We gently tend to the experiences that shaped you, so old wounds finally have room to heal." },
  { k: "Present self", v: "Identify", d: "We notice the patterns running today — the triggers, the habits, the ways the past still shows up." },
  { k: "Future self", v: "Rediscover", d: "We reconnect you with who you're becoming, and the fuller, steadier life you're moving toward." },
];

/* How it works — client copy */
const PROCESS = [
  { n: "01", t: "Book a free 15-minute consultation", b: "Book with the holistic therapist of your choice. Unsure who to book with? Book with our clinical director, Shianne Pearn, and she will match you with an aligned holistic therapist — in person in Calgary or through an online appointment." },
  { n: "02", t: "About the process", b: "The consultation can take place online via secure video using the Jane App, or by phone — whichever feels most comfortable for you." },
  { n: "03", t: "Your first appointment", b: "Your therapist will work with you to create your personalized self-discovery plan. You can choose to have therapy in Calgary in person, or virtually through telehealth." },
];

function Hero() {
  return (
    <section className="mm-hero ab-hero">
      <img className="mm-hero__bg" src={D.img.teamHero} alt="" />
      <div className="mm-hero__scrim"></div>
      <div className="mm-wrap mm-hero__in">
        <p className="mm-hero__eyebrow">About Inspire Wellness Therapy</p>
        <h1 className="mm-hero__display">We want you to get the care you <em>deserve.</em></h1>
        <p className="mm-hero__sub">A diverse, inclusive wellness practice in Calgary — offering therapy, life &amp; wellness coaching, and Reiki through a holistic, person-centred approach.</p>
        <p className="ab-hero__note">No pressure, no commitment · In person &amp; online across Alberta</p>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow">
        <SectionHead center
          eyebrow="What we offer"
          title={<>Therapy, life &amp; wellness coaching <em>&amp; Reiki</em> in Calgary</>} />
        <div className="mm-prose ab-prose" style={{ marginTop: 28 }}>
          {OFFER.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="ab-dirs">
          <span className="ab-dirs__lab">Find us on</span>
          <img className="ab-dirs__logos" src={D.img.findUsOn} alt="Featured on TherapyTribe, Psychology Today, Theravive, and Online Therapy Directory" />
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="What guides us"
          title={<>Four values that spell <em>calm</em></>}
          lede="Everything we do is grounded in four core values — read down their first letters and they spell the feeling we hope you leave with." />
        <div className="ab-values">
          {VALUES.map((v) => (
            <article className="ab-value mm-fade" key={v.name}>
              <div className="ab-value__tile">{v.letter}</div>
              <h3>{v.name}</h3>
              <p>{v.desc}</p>
            </article>
          ))}
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

function Founder() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-imgsplit">
        <div className="mm-imgsplit__media">
          <img className="mm-imgsplit__img" src={FOUNDER.photo} alt="Alysha Dosanjh, Founder of Inspire Wellness Therapy" />
        </div>
        <div>
          <p className="mm-shead__eyebrow">Meet the founder</p>
          <h2>The heart behind <em>Inspire Wellness</em></h2>
          <p>Individual and relationship therapy in Calgary, Alberta is a practice founded by mental health and wellness practitioner <strong>Alysha Dosanjh</strong>. The mission is to provide a nurturing and inclusive space for individuals to embark on their journey toward mental, emotional, and spiritual well-being — taking care of your mind, body &amp; soul. Grounded in empathy and authenticity, we offer a holistic approach to therapy, tailored to each individual&rsquo;s needs. Our commitment is to foster genuine connections, promote self-discovery, and empower our clients to embrace their inner strength and resilience.</p>
          <div className="ab-afterblock">
            <p>The foundation is built on providing mental health services for individuals, relationships, and families through a person-centred lens, using a holistic therapy model. Each of our practitioners is a registered mental health professional, ready to guide and support you in the journey of authenticity and rediscovery.</p>
          </div>
          <div className="ab-founder__cta">
            <Book>Book a discovery call</Book>
            <a className="mm-btn-ghost" href="bio.html">Read Alysha&rsquo;s full story <I.arrowRight size={16} /></a>
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
      <Header active="about" />
      <Hero />
      <Offer />
      <Values />
      <Process />
      <Founder />
      <CTABand
        heading={<>Get started <em>today.</em></>}
        sub="Book a free 15-minute discovery call. No commitment, no pressure — just a conversation about what's bringing you in and how we can help." />
      <FinalCta />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
