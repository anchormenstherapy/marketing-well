/* Inspire Wellness Therapy — Psychological Assessments page.
   Merged content from Google Ads ADHD page + broader assessment types.
   Reuses shared chrome (Header, Footer, Book, SectionHead, CTABand, FinalCta, LandAck). */
const { Accordion } = window.MarketingWellCoreDesignSystem_2f2c2c;
const I = window.IWIcons;
const D = window.IW;
const BOOK = window.IW_BOOK;

const ASSESSMENTS = [
  { icon: "zap", title: "ADHD Assessments", body: "Comprehensive evaluations for children and adults. Difficulty focusing, missed deadlines, restlessness, emotional dysregulation — if you've been wondering, a formal assessment gives you a clear answer and a real plan.", link: "ADHD" },
  { icon: "wind", title: "Anxiety Assessments", body: "Structured evaluation to identify the severity of symptoms, determine specific anxiety disorders such as generalized anxiety, social anxiety, or panic disorder, and develop a personalized treatment plan.", link: "Anxiety" },
  { icon: "cloud", title: "Depression Assessments", body: "A thorough evaluation of mood, energy, motivation, and daily functioning — helping to distinguish between different types of depression and determine the best course of treatment.", link: "Depression" },
  { icon: "repeat", title: "OCD Assessments", body: "Clarity on the presence and severity of obsessive thoughts and compulsive behaviors, distinguishing OCD from other anxiety-related conditions so you can access the right support.", link: "OCD" },
  { icon: "shield", title: "PTSD Assessments", body: "Identifying the impact of trauma on daily life, clarifying symptom severity, and providing guidance on effective treatment options — whether the trauma is recent or long-standing.", link: "PTSD" },
];

const ADULT_SIGNS = [
  { ic: "clock", t: "Forgotten appointments, missed deadlines, and the constant feeling that everyone else got an instruction manual you never received" },
  { ic: "repeat", t: "You've adapted, masked, and pushed through — but something has always felt harder than it should be" },
  { ic: "wind", t: "You've taken the online quizzes and read the articles, but you need someone qualified to actually tell you" },
  { ic: "star", t: "You want access to medication, workplace accommodations, school support, or a clearer therapy plan" },
];

const PARENT_SIGNS = [
  { ic: "heart", t: "Your child is bright and capable, but something is making everyday tasks harder than it should be" },
  { ic: "cloud", t: "The school says one thing, the pediatrician says another — the conflicting input is exhausting" },
  { ic: "sprout", t: "You want clear recommendations that actually help, not just a label" },
  { ic: "home", t: "You need accommodations that match your child's needs, and a roadmap for next steps" },
];

const STEPS = [
  { n: "01", title: "Intake and clinical interview", body: "We start with a detailed conversation about what's bringing you in — your history, your current challenges, and what you're hoping to learn. For child assessments, we meet with parents first to gather background and developmental history." },
  { n: "02", title: "Standardized testing and questionnaires", body: "You or your child complete validated psychological measures designed to assess attention, executive function, mood, and related areas. For children, we also gather input from teachers and other adults who see them in different settings." },
  { n: "03", title: "Clinical analysis and interpretation", body: "Your clinician reviews all the information gathered, looks for patterns, and considers other conditions that may be at play. ADHD often overlaps with anxiety, depression, or learning differences — and a good assessment accounts for that." },
  { n: "04", title: "Feedback session and written report", body: "You receive a detailed feedback session where we walk through findings, answer your questions, and discuss next steps. You also receive a comprehensive written report for your physician, school, employer, or post-secondary institution." },
];

const OUTCOMES = [
  { title: "You finally have a clear answer", body: "The years of wondering, second-guessing, and explaining yourself are over. You know what's actually going on, which means you can stop guessing and start acting on real information." },
  { title: "You can access the right support", body: "The written report opens doors. Medication consultations, school IEPs and accommodations, post-secondary disability services, workplace adjustments — whatever the right next step is, you have what you need to take it." },
  { title: "You see yourself (or your child) differently", body: "The labels you've been carrying — \"lazy,\" \"difficult,\" \"not living up to potential\" — give way to a more accurate, more compassionate understanding. Both for yourself and from the people around you." },
];

const ASSESS_THERAPISTS = ["Lyndsay Mckerracher"];

const FEES = [
  { title: "ADHD Assessment", fmt: "Children & adults", rows: [["Comprehensive assessment", "Contact us"], ["Written report included", "✓"], ["Feedback session included", "✓"]] },
  { title: "Anxiety / Depression", fmt: "Clinical evaluation", rows: [["Comprehensive assessment", "Contact us"], ["Written report included", "✓"], ["Feedback session included", "✓"]] },
  { title: "OCD / PTSD", fmt: "Clinical evaluation", rows: [["Comprehensive assessment", "Contact us"], ["Written report included", "✓"], ["Feedback session included", "✓"]] },
];

const FAQS = [
  { q: "How much does an assessment cost?", a: "Assessment fees vary depending on the type and complexity of the evaluation. Contact us for current pricing. Many extended health plans cover some or all of the cost — it's worth checking with your provider." },
  { q: "How long does the assessment process take?", a: "A comprehensive assessment typically involves multiple appointments over a few weeks. The initial intake, testing sessions, analysis, and feedback session each have their own timeline. Your clinician will walk you through what to expect at your first appointment." },
  { q: "Can I get medication after the assessment?", a: "An assessment can support a medication conversation, but our clinicians do not prescribe medication directly. If medication is recommended, we'll include that in your report and can refer you to a physician or psychiatrist who can prescribe." },
  { q: "Will the report be accepted by schools and workplaces?", a: "Yes. Our assessment reports are comprehensive, professionally formatted documents that are widely accepted by schools, post-secondary institutions, employers, and government programs for accommodations and support." },
  { q: "Can the assessment be done online?", a: "Some components of an assessment can be completed virtually, while others are best done in person. Your clinician will let you know what the process looks like for your specific assessment. In-person appointments are available at our Calgary office." },
  { q: "At what age can children be assessed?", a: "Children can typically be assessed for ADHD starting around age 6, though this depends on the child and the concerns being evaluated. Our clinicians are experienced in working with children across a range of ages and developmental stages." },
  { q: "What if the assessment shows it isn't ADHD (or the condition I suspected)?", a: "That's still a valuable outcome. A comprehensive assessment doesn't just rule things in — it rules things out and often identifies what is going on, even if it's not what you expected. You still walk away with a clear understanding and recommendations." },
  { q: "Do you offer assessments for autism?", a: "Yes. In addition to ADHD, anxiety, depression, OCD, and PTSD, we offer autism assessments. Contact us or book a discovery call to discuss what type of assessment would be most helpful for your situation." },
  { q: "What is a discovery call?", a: "It's a free, no-pressure conversation where we learn a little about what you're going through and help you understand whether an assessment is the right next step. There's no commitment and nothing to prepare — just a chance to ask questions and see if it feels like a fit." },
];

const CARD_ICON = { zap: I.zap, wind: I.wind, cloud: I.cloud, repeat: I.repeat, shield: I.shield, clock: I.clock, heart: I.heart, sprout: I.sprout, home: I.home, star: I.star };

function Hero() {
  return (
    <section className="mm-hero">
      <img className="mm-hero__bg" src={D.img.office} alt="" />
      <div className="mm-hero__scrim"></div>
      <div className="mm-wrap mm-hero__in">
        <h1 className="mm-hero__eyebrow">Psychological Assessments In Calgary &amp; Across Alberta</h1>
        <p className="mm-hero__display">You've wondered <em>long enough.</em></p>
        <p className="mm-hero__sub">Comprehensive psychological assessments for ADHD, anxiety, depression, OCD, and PTSD — for children and adults. A formal assessment is how you finally get a clear answer and a real plan.</p>
        <div className="mm-hero__cta">
          <Book>Book your free discovery call</Book>
          <span className="mm-hero__note">No pressure, no commitment · In-person in Calgary · Written report included</span>
        </div>
        <div className="mm-hero__trust">
          <div className="mm-hero__trust-in">
            <span className="mm-hero__trust-label"><I.shield size={19} />Direct billing available to 9 insurers</span>
            <div className="mm-hero__trust-names">
              {D.insurers.map((n) => <span key={n}>{n}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeAssess() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={760}
          eyebrow="What we assess"
          title={<>Clarity, validation, and <em>a path forward</em></>}
          lede="We provide comprehensive psychological assessments to help individuals gain clarity, validation, and direction in managing their mental health. Our assessments are thorough, evidence-based, and personalized — you walk away with a clear diagnosis and concrete recommendations for next steps." />
        <div className="mm-spec__grid">
          {ASSESSMENTS.map((s) => {
            const Ic = CARD_ICON[s.icon] || I.flower;
            return (
              <article className="mm-spec__card mm-fade" key={s.title}>
                <div className="mm-spec__med"><Ic size={24} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SoundsLike() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={760}
          eyebrow="If any of this sounds familiar"
          title={<>You've been looking for answers <em>for a long time</em></>}
          lede="Whether you're seeking clarity for yourself or your child, the path to a diagnosis is rarely simple. You've likely been doing your own research for months, maybe years. A formal assessment is how you finally get a clear answer and a real plan." />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 60 }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, color: "var(--brand-strong)", marginBottom: 24 }}>For adults</h3>
            <div className="mm-signs__grid" style={{ gridTemplateColumns: "1fr" }}>
              {ADULT_SIGNS.map((s) => {
                const Ic = CARD_ICON[s.ic];
                return (
                  <div className="mm-sign mm-fade" key={s.t}>
                    <span className="mm-sign__ic"><Ic size={19} /></span>
                    <p>{s.t}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, color: "var(--brand-strong)", marginBottom: 24 }}>For parents</h3>
            <div className="mm-signs__grid" style={{ gridTemplateColumns: "1fr" }}>
              {PARENT_SIGNS.map((s) => {
                const Ic = CARD_ICON[s.ic];
                return (
                  <div className="mm-sign mm-fade" key={s.t}>
                    <span className="mm-sign__ic"><Ic size={19} /></span>
                    <p>{s.t}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="mm-signs__note">Self-quizzes and articles can point you in a direction. They can't give you a diagnosis, a treatment plan, or the documentation you need for accommodations.</p>
      </div>
    </section>
  );
}

function WhyAssess() {
  return (
    <section className="mm-banddark" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow" style={{ textAlign: "center" }}>
        <SectionHead center
          eyebrow="Why a formal assessment matters"
          title={<>Real answers, <em>not more guesswork</em></>} />
        <div className="mm-prose" style={{ margin: "26px auto 0", textAlign: "left" }}>
          <p>ADHD, anxiety, depression, OCD, and PTSD can look different in everyone. Symptoms often overlap, coexist, or mask each other entirely — which is why getting a comprehensive assessment from an experienced clinician matters so much.</p>
          <p>At Inspire Wellness Therapy, our assessments are thorough, evidence-based, and personalized. You walk away with a clear diagnosis (or clarity that it isn't what you suspected), a detailed written report, and concrete recommendations for next steps — whether that means therapy, medication referral, school accommodations, or workplace support.</p>
          <p>Our approach is rooted in evidence-based practices, using clinical interviews, standardized assessment tools, and tailored interventions to help you understand your symptoms and develop effective strategies moving forward.</p>
        </div>
        <div style={{ marginTop: 32 }}><Book>Book your free discovery call</Book></div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={760}
          eyebrow="How our assessments work"
          title={<>A structured, <em>comprehensive process</em></>}
          lede="A comprehensive assessment is more than a single appointment. It's a structured, multi-step process that gives your clinician the complete picture they need to make an accurate diagnosis and develop meaningful recommendations." />
        <div className="mm-phases">
          {STEPS.map((p) => (
            <div className="mm-phase mm-fade" key={p.n}>
              <div className="mm-phase__n">{p.n}</div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-imgsplit">
        <div>
          <p className="mm-shead__eyebrow">What you walk away with</p>
          <h2>Clarity in your hands — <em>actionable, not just informational.</em></h2>
          <p>The goal of an assessment isn't a label. It's actionable information that helps you, or your child, move forward with confidence and the right support.</p>
          <p>You receive a clear diagnostic answer, whether or not the condition you suspected is the right framework for what you're experiencing. Your detailed written report documents the assessment process, findings, and recommendations — and for many clients, that report becomes the key that unlocks medication, school accommodations, post-secondary support, workplace adjustments, or a clearer therapy plan.</p>
          <p>Beyond the formal documentation, you also walk away with a much deeper understanding of how your brain (or your child's brain) actually works — the strengths, the challenges, the patterns. That self-knowledge alone can be transformative.</p>
        </div>
        <div className="mm-imgsplit__media">
          <img className="mm-imgsplit__img" src={D.img.office5} alt="A warm, naturally lit therapy room at Inspire Wellness Therapy" />
        </div>
      </div>
    </section>
  );
}

function LifeAfter() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-imgsplit">
        <div className="mm-imgsplit__media">
          <img className="mm-imgsplit__img" src={D.img.field} alt="A person walking outdoors at golden hour, present and at ease" />
        </div>
        <div>
          <p className="mm-shead__eyebrow">Life after your assessment</p>
          <h2>A path forward that starts to <em>make sense.</em></h2>
          {OUTCOMES.map((a) => (
            <div className="mm-afterblock" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, color: "var(--brand-strong)", margin: "30px 0 22px" }}>The first step is a clear answer. Let's get you one.</p>
          <Book>Book your free discovery call</Book>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ p }) {
  const first = p.name.split(" ")[0];
  return (
    <article className="mm-tc mm-fade">
      {p.photo
        ? <img className="mm-tc__ph" src={p.photo} alt={p.name} />
        : <div className="mm-tc__ph" style={{ display: "grid", placeItems: "center" }}><span style={{ fontFamily: "var(--font-display)", fontSize: 44, color: "var(--brand)" }}>{p.initials || first[0]}</span></div>}
      <div className="mm-tc__body">
        <h3 className="mm-tc__name">{p.name}</h3>
        {p.tag ? <p className="mm-tc__tag">{p.tag}</p> : null}
        {p.format ? <p className="mm-tc__fmt">{p.format}</p> : null}
        <ul className="mm-tc__creds">{p.creds.map((c) => <li key={c}>{c}</li>)}</ul>
        <div className="mm-tc__actions">
          <a className="mm-tc__meet" href="bio.html">Meet {first} <I.arrowRight size={14} /></a>
          <a className="mm-tc__book" href={BOOK} target="_blank" rel="noopener">Book with {first}</a>
        </div>
      </div>
    </article>
  );
}

function Therapists() {
  const people = ASSESS_THERAPISTS.map((n) => D.team.find((t) => t.name === n)).filter(Boolean);
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={760}
          eyebrow="Meet your assessment clinician"
          title={<>Experienced clinicians who understand <em>the full picture</em></>}
          lede="Assessments are conducted by experienced Registered Psychologists with specific training in psychological assessment and neurodivergent populations. You're working with someone who understands not just the testing, but the human being on the other side of it." />
        <div className="mm-team__grid mm-team__grid--center">
          {people.map((p) => <TeamCard p={p} key={p.name} />)}
        </div>
        <p style={{ textAlign: "center", marginTop: 36, color: "var(--text-soft)", fontSize: 16 }}>Not sure who's the right fit, or what type of assessment you need? A free discovery call is the easiest way to find out.</p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={700}
          eyebrow="Our space"
          title={<>A calm, focused setting <em>for clarity</em></>}
          lede="Our Calgary office is designed to help you feel settled and at ease — quiet rooms, soft light, and a sense of privacy that lets you focus on what matters." />
        <div className="mm-gallery">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img className="mm-gallery__img mm-fade" key={n} src={D.img["office" + n]} alt={"Inspire Wellness Calgary office, photo " + n} loading="lazy" />
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 32, color: "var(--text-muted)", fontSize: 15, fontWeight: 600 }}>Dorchester Square &middot; 1333 8 Street SW, Calgary</p>
      </div>
    </section>
  );
}

function Fees() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={680}
          eyebrow="Assessment services"
          title={<>Comprehensive assessments with <em>clear reporting</em></>}
          lede="Every assessment includes a detailed written report and a feedback session. Contact us for current pricing — many extended health plans cover some or all of the cost." />
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
          title={<>Questions about <em>assessments</em></>} />
        <div style={{ marginTop: 34 }}><Accordion items={FAQS} defaultOpen={0} /></div>
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
      <WhatWeAssess />
      <SoundsLike />
      <WhyAssess />
      <HowItWorks />
      <WhatYouGet />
      <LifeAfter />
      <Therapists />
      <Gallery />
      <Fees />
      <CTABand
        heading={<>Your answer can <em>start now.</em></>}
        sub="Book a free discovery call and we'll walk you through the assessment process, answer your questions, and help you take the first step toward clarity. No commitment, no pressure." />
      <Faq />
      <FinalCta />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
