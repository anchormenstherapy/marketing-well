/* Inspire Wellness Therapy — Therapist Bio page (Alysha Dosanjh, Founder).
   Layout modelled on the Cataraqui "Meet Victoria" page. Reuses shared chrome. */
const { Accordion } = window.MarketingWellCoreDesignSystem_2f2c2c;
const I = window.IWIcons;
const D = window.IW;
const BOOK = window.IW_BOOK;

const PERSON = D.team.find((t) => t.name === "Alysha Dosanjh") || D.team[0];

const TAGLINE = ["Trauma informed", "Culturally responsive", "LGBTQIA2S+ affirmative"];

const HERO_CHIPS = ["Anxiety", "ADHD", "Depression", "Life stressors", "Self-worth", "Body image", "Relationship stressors", "Financial stressors", "Eating disorders", "Addictions"];

const META = [
  { dt: "Session fee", dd: "$125 \u2013 $300" },
  { dt: "Format", dd: "In-person & online" },
  { dt: "Availability", dd: "Daytime & evenings" },
];

const MODALITIES = [
  { name: "EFT", full: "Emotion-Focused Therapy (Tapping)" },
  { name: "Mindfulness", full: "Mindfulness-Based" },
  { name: "ACT", full: "Acceptance & Commitment Therapy" },
  { name: "CBT", full: "Cognitive Behavioural Therapy" },
  { name: "Biopsychosocial", full: "Mind-body connection" },
];

const DEMOGRAPHICS = ["Adolescents", "Individuals", "Couples", "Families"];

const FACT_ICON = { laptop: I.laptop, user: I.user, shield: I.shield };

function Hero() {
  const first = PERSON.name.split(" ")[0];
  return (
    <section className="mm-sand">
      <div className="mm-wrap mm-profile">
        <div className="mm-profile__media">
          <img className="mm-profile__photo" src={PERSON.photo} alt={PERSON.name} />
        </div>
        <div>
          <p className="mm-profile__cred">Hello! I'm</p>
          <h1 className="mm-profile__name">{PERSON.name}</h1>
          <p className="mm-profile__cred" style={{ marginTop: 12, color: "var(--text-soft)", fontWeight: 600, letterSpacing: 0, textTransform: "none", fontSize: 15 }}>
            Founder &middot; Registered Counselling Therapist &middot; Canadian Certified Counsellor &middot; Reiki Practitioner
          </p>
          <div className="mm-profile__tagline">
            {TAGLINE.map((t) => <span key={t}>{t}</span>)}
          </div>
          <div className="mm-profile__chips">
            {HERO_CHIPS.map((c) => <span key={c}>{c}</span>)}
          </div>
          <dl className="mm-profile__meta">
            {META.map((m) => (
              <div key={m.dt}>
                <dt>{m.dt}</dt>
                <dd>{m.dd}</dd>
              </div>
            ))}
          </dl>
          <div className="mm-profile__cta">
            <Book>Book your free 15-minute consult</Book>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow">
        <SectionHead
          eyebrow="About Alysha"
          title={<>Where the healing <em>journey begins</em></>} />
        <div className="mm-prose" style={{ marginTop: 28 }}>
          <p>Are you feeling lost and confused? Seeking clarity? Are you engaged in the same self-sabotaging patterns? Maybe you have difficulty fostering authentic relationships. You are in the right place. Welcome to Inspire Wellness Therapy, where the healing journey begins. I'm Alysha, the founder of Inspire Wellness Therapy, and I am delighted to have the opportunity to introduce myself to you. A significant part of my practice is to foster our best selves by healing the inner child and incorporating aspects of spirituality within my practice.</p>
          <p>I consider myself a highly empathic, compassionate therapist. My mission is to ease confusion, establish clarity and empower individuals like you to embark on a transformative path toward self-discovery and the renewal of relationships. With a heart full of empathy and a mind brimming with therapeutic expertise, I've dedicated my life to helping you unlock your inner potential and create meaningful connections with others.</p>
          <h3>Credentials and experience</h3>
          <p>As a registered counselling therapist and Canadian-certified counsellor, my commitment to your well-being is rooted in a solid foundation of education and experience. I continuously update my skills and knowledge to ensure that you receive the highest-quality care. Your emotional, mental, and relational health is my priority.</p>
          <h3>Your journey with me</h3>
          <p>When you choose to work with me, you are not just embarking on a therapeutic journey but a journey of self-discovery and relationship renewal. We will work collaboratively to:</p>
          <ul>
            <li>Uncover the root causes of your challenges.</li>
            <li>Develop practical strategies to navigate life's complexities.</li>
            <li>Cultivate a deeper understanding of yourself and your relationships.</li>
            <li>Build resilience and embrace positive change.</li>
            <li>Rediscover your inner strength and purpose.</li>
          </ul>
          <h3>Your transformation awaits</h3>
          <p>I invite you to take the first step toward a more fulfilling life, enriched with self-awareness and healthier, more vibrant relationships. We will create a safe and nurturing space for your personal growth.</p>
          <p>Thank you for considering Inspire Wellness Therapy as your partner on this journey. I look forward to getting to know you and supporting you every step of the way. Your transformation begins now.</p>
        </div>
      </div>
    </section>
  );
}

function HowSheWorks() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="Therapeutic approaches"
          title={<>How Alysha <em>works</em></>}
          lede="Alysha draws from a range of evidence-based and holistic modalities, tailored to your specific needs and goals." />
        <div className="mm-appr">
          <div className="mm-appr__row">
            {MODALITIES.map((m) => (
              <span key={m.name}><b>{m.name}</b><em>{m.full}</em></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoAndReiki() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="Who I work with"
          title={<>Care for every <em>kind of relationship</em></>} />
        <div className="mm-demo">
          {DEMOGRAPHICS.map((d) => <span key={d}>{d}</span>)}
        </div>
        <div className="mm-reiki">
          <div className="mm-reiki__ic"><I.sparkle size={26} /></div>
          <div>
            <h3>Alternative services: Reiki</h3>
            <p>Alysha is a certified Master's-level Reiki practitioner. She can incorporate alternative, energy-based forms of healing to support your higher self, whether alongside talk therapy or as a standalone session.</p>
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
      <Header active="team" />
      <Hero />
      <About />
      <HowSheWorks />
      <WhoAndReiki />
      <CTABand
        heading={<>Ready to work with <em>Alysha?</em></>}
        sub="Book a free 15-minute discovery call. No commitment, no pressure, just a conversation about what you're going through and whether Alysha is the right fit." />
      <FinalCta />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
