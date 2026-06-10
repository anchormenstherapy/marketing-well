/* Inspire Wellness Therapy — EMDR modality page. Client-supplied copy.
   Reuses shared chrome (Header, Footer, Book, SectionHead, CTABand, FinalCta, LandAck). */
const { Accordion } = window.MarketingWellCoreDesignSystem_2f2c2c;
const I = window.IWIcons;
const D = window.IW;
const BOOK = window.IW_BOOK;

const HELPS = [
  { icon: "shield", title: "Trauma that won't stay in the past", body: "Flashbacks, nightmares, hypervigilance, that constant feeling of bracing for what might come next. The event happened, but your nervous system doesn't seem to know it's over." },
  { icon: "wind", title: "Anxiety and phobias that limit your life", body: "Public speaking. Driving. Crowded spaces. Small situations that have become unmanageable. You've tried to push through, but the fear keeps winning." },
  { icon: "repeat", title: "Patterns you can't seem to break", body: "Addiction, compulsive behaviour, or coping mechanisms that started as a way to survive something hard. You know they're not working anymore, but stopping feels impossible." },
  { icon: "heart", title: "Grief that hasn't found its place", body: "A loss you've never fully processed. A relationship that ended in a way that didn't feel resolved. A wound that's still open years later because there was never space to actually heal it." },
  { icon: "cloud", title: "Negative beliefs that feel like truth", body: "\u201CI'm not enough.\u201D \u201CI don't deserve good things.\u201D \u201CIt's always going to be like this.\u201D Beliefs that started somewhere, took root, and now feel like just the way things are. They're not." },
  { icon: "compass", title: "Therapy that helped, but didn't quite get there", body: "You've done the talking. You understand your patterns, your history, your triggers. But knowing isn't healing, and you're still carrying it. EMDR works at the level talk therapy often can't reach." },
];

const PHASES = [
  { n: "01", title: "We start with history and stabilization", body: "Before any reprocessing begins, we get to know your story, identify what we're working with, and make sure you have the tools you need to feel grounded. Safety comes first, always." },
  { n: "02", title: "We identify the memories that need attention", body: "Together, we pinpoint the specific memories, beliefs, or experiences that are still affecting your present. Not every painful moment needs reprocessing, just the ones still running the show." },
  { n: "03", title: "We use bilateral stimulation to reprocess", body: "This is the part that makes EMDR unique. While you focus on a memory, your therapist guides you through bilateral stimulation, side-to-side eye movements, gentle taps, or auditory cues, which engages both hemispheres of your brain. This helps your nervous system reprocess the memory in a less distressing way." },
  { n: "04", title: "We integrate and move forward", body: "Once a memory is fully reprocessed, it no longer triggers the same response. We close each session safely, check in on your progress, and continue working through what's still alive. Many clients begin noticing real shifts within the first few sessions." },
];

const AFTER = [
  { title: "Your trauma loses its grip", body: "The memories are still there, but they no longer control your reactions, your relationships, or your sense of self. You can think about what happened without being pulled back into it. You start to feel like the present is actually yours to live in." },
  { title: "Anxiety and triggers settle", body: "The hypervigilance softens. The fears that once limited you become manageable. Situations that used to feel impossible become approachable, sometimes even easy. Your nervous system learns it's safe to relax." },
  { title: "You believe new things about yourself", body: "The old beliefs (\u201CI'm broken,\u201D \u201CI'm not enough,\u201D \u201CIt's my fault\u201D) begin to give way to truer ones. You see yourself with more clarity, more kindness, more honesty. You stop carrying weight that was never yours to begin with." },
];

const EMDR_THERAPISTS = ["Khanjan Pandya", "Shaambhavi Sharma"];

const FEES = [
  { title: "Individual Therapy", fmt: "Telehealth or in person", rows: [["30 minutes", "$125"], ["50 minutes", "$225"], ["90 minutes", "$300"]] },
  { title: "Relationship Therapy", fmt: "Telehealth or in person", rows: [["50 minutes", "$225"], ["90 minutes", "$300"]] },
  { title: "Family Therapy", fmt: "Telehealth or in person", rows: [["50 minutes", "$225"], ["90 minutes", "$300"]] },
];

const RELATED = [
  { icon: "shield", title: "Trauma", body: "When the past keeps showing up in the present, uninvited." },
  { icon: "wind", title: "Anxiety", body: "When worry won't switch off, even when you want it to." },
  { icon: "heart", title: "Grief", body: "When you're learning to carry something you never wanted to." },
  { icon: "sprout", title: "Inner child", body: "When old hurts still shape the way you move through today." },
  { icon: "sparkle", title: "Self worth", body: "When the hardest voice to quiet is the one in your own head." },
  { icon: "cloud", title: "Depression", body: "When everything feels heavier than it should, and lighter feels far away." },
];

const ALONGSIDE = [
  { name: "Somatic Focused Therapy", desc: "Helps your body process what your mind is reaching for." },
  { name: "Internal Family Systems", desc: "Works with the different parts of you that hold old pain and protection." },
  { name: "Cognitive Behavioural Therapy", desc: "Supports the thinking patterns that grow around old wounds." },
  { name: "Acceptance and Commitment Therapy", desc: "Helps you carry what's true while still moving toward what matters." },
];

const FAQS = [
  { q: "Is EMDR really backed by science?", a: "Yes. EMDR is one of the most extensively researched therapy methods in the world, and it's recommended by the World Health Organization, the American Psychiatric Association, and the Department of Veterans Affairs for the treatment of trauma and PTSD. Decades of clinical studies support its effectiveness, particularly for trauma, anxiety, and phobias." },
  { q: "Will I have to talk about my trauma in detail?", a: "No. One of the things people are often surprised by is that EMDR doesn't require detailed retelling of what happened. You don't have to narrate the story to reprocess it. Your therapist will guide you through what to focus on, and you stay in control of how much you share out loud." },
  { q: "How many sessions will I need?", a: "It depends on what you're working through and how long it's been with you. Some single-incident traumas can shift in a handful of sessions. More complex or longstanding patterns take longer. Your therapist will give you a realistic sense of what to expect after the initial assessment phase." },
  { q: "Is EMDR safe for everyone?", a: "EMDR is well-tolerated by most people, but it isn't the right starting point for every situation. Your therapist will do a careful assessment first to make sure you have the stability and support in place before reprocessing begins. If EMDR isn't the best fit right now, they'll be honest about that and suggest a path that is." },
  { q: "Can EMDR be done online?", a: "Yes. EMDR can be delivered effectively online, and many of our clients across Alberta work with us virtually. Your therapist will adapt the bilateral stimulation methods for the online format. In-person sessions are also available at our Calgary office." },
  { q: "Do you accept insurance?", a: "Our sessions are covered by most extended health plans. Coverage depends on your specific plan, so it's worth checking what your provider includes for your therapist's designation. We also offer direct billing to 9 major insurers." },
  { q: "What's the difference between EMDR and talk therapy?", a: "Talk therapy helps you understand your patterns, your history, and your triggers. EMDR works at a different level, helping your nervous system actually reprocess the experiences that talk therapy can illuminate but not always resolve. The two often complement each other, and many of our clients find that combining approaches gives them the most lasting change." },
  { q: "What is a discovery call?", a: "It's a free, no-pressure conversation where we learn a little about what you're going through and help you find the right therapist for it. There's no commitment and nothing to prepare. Just a chance to ask questions and see if it feels like a fit." },
];

const CARD_ICON = { shield: I.shield, wind: I.wind, repeat: I.repeat, heart: I.heart, cloud: I.cloud, compass: I.compass, sprout: I.sprout, sparkle: I.sparkle };

function Hero() {
  return (
    <section className="mm-hero">
      <img className="mm-hero__bg" src={D.img.emdr} alt="" />
      <div className="mm-hero__scrim"></div>
      <div className="mm-wrap mm-hero__in">
        <h1 className="mm-hero__eyebrow">EMDR Therapy In Calgary</h1>
        <p className="mm-hero__display">When the past <em>won't let go.</em></p>
        <p className="mm-hero__sub">If old memories still surface with the same force they had years ago, you are not stuck and you are not alone. EMDR is one of the most researched approaches for trauma, and it works at the level talk therapy often can't reach.</p>
        <div className="mm-hero__cta">
          <Book>Book a free 15-minute call</Book>
          <span className="mm-hero__note">No pressure, no commitment. Just a steadier first step.</span>
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

function Helps() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={760}
          eyebrow="What EMDR helps with"
          title={<>Your mind has moved on. <em>Your body still remembers.</em></>}
          lede="Trauma doesn't follow a logical timeline. Years after the event, something can still trigger a full-body reaction. A smell, a sound, a moment that catches you off guard, and suddenly you're right back there. EMDR was built specifically for this. It works with the brain's natural ability to heal, helping your nervous system finally process what it couldn't at the time." />
        <div className="mm-spec__grid">
          {HELPS.map((s) => {
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

function WhyDifferent() {
  return (
    <section className="mm-banddark" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow" style={{ textAlign: "center" }}>
        <SectionHead center
          eyebrow="Why EMDR is different"
          title={<>Healing doesn't have to <em>take years.</em></>} />
        <div className="mm-prose" style={{ margin: "26px auto 0", textAlign: "left" }}>
          <p>EMDR is one of the most extensively researched therapy methods in the world. It's recommended by the World Health Organization, the American Psychiatric Association, and the Department of Veterans Affairs for the treatment of trauma and PTSD. What sets it apart is the speed: where traditional talk therapy can take years to address deep-rooted trauma, EMDR often produces meaningful relief in a fraction of the time.</p>
          <p>This isn't about forgetting what happened. It's about your brain finally being able to file the memory away properly, so it stops triggering the same emotional and physical response every time it surfaces. The memory stays. The wound starts to close.</p>
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
          eyebrow="How EMDR works"
          title={<>A structured, <em>proven path</em></>}
          lede="EMDR follows a structured, evidence-based eight-phase approach. Your therapist guides you through it at a pace that feels safe and manageable, which is why so many people who've struggled with traditional therapy find real relief with EMDR." />
        <div className="mm-phases">
          {PHASES.map((p) => (
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

function LifeDuring() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-imgsplit">
        <div>
          <p className="mm-shead__eyebrow">Life during EMDR</p>
          <h2>The memory stays. <em>The way you feel about it changes.</em></h2>
          <p>People often expect EMDR to be intense, and parts of it can be emotionally significant. But what surprises most clients is how quickly things start to shift in their daily lives, often after just a few sessions.</p>
          <p>You might notice you sleep more soundly. A trigger that used to ruin your day now passes through. You think about a hard memory and realize the charge has lessened. The thought of an upcoming situation no longer fills you with dread. Your body, which has been bracing for years, starts to soften.</p>
          <p>EMDR doesn't erase what happened. It helps your brain finally store the memory where it belongs: as something that occurred, rather than something that's still occurring. The relief, for many clients, is profound.</p>
        </div>
        <div className="mm-imgsplit__media">
          <img className="mm-imgsplit__img" src={D.img.office5} alt="A warm, naturally lit therapy room with a comfortable chair and soft greenery" />
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
          <img className="mm-imgsplit__img" src={D.img.field} alt="A person walking peacefully outdoors in soft evening light, present and at ease" />
        </div>
        <div>
          <p className="mm-shead__eyebrow">Life after EMDR</p>
          <h2>A life that's no longer organized around <em>what happened to you.</em></h2>
          {AFTER.map((a) => (
            <div className="mm-afterblock" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, color: "var(--brand-strong)", margin: "30px 0 22px" }}>You don't have to keep living around what happened to you.</p>
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
  const people = EMDR_THERAPISTS.map((n) => D.team.find((t) => t.name === n)).filter(Boolean);
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={760}
          eyebrow="Meet your EMDR therapists"
          title={<>Trauma-informed care, <em>from people who get it</em></>}
          lede="At Inspire Wellness Therapy, EMDR is delivered by experienced, fully credentialed practitioners trained in trauma-informed care. You're not just booking a service, you're choosing a therapist you'll work with closely." />
        <div className="mm-team__grid mm-team__grid--center">
          {people.map((p) => <TeamCard p={p} key={p.name} />)}
        </div>
        <p style={{ textAlign: "center", marginTop: 36, color: "var(--text-soft)", fontSize: 16 }}>Not sure which therapist is the right fit? A free discovery call is the easiest way to find out.</p>
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
          title={<>A room that meets you <em>halfway</em></>}
          lede="You're already doing the hard part by showing up. Our Calgary office is designed to do the rest, with quiet rooms, soft light, and a sense of privacy that lets you settle in before the session even begins." />
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
          eyebrow="Our services & fees"
          title={<>Clear, upfront <em>pricing</em></>}
          lede="Direct billing available to 9 insurers, so most clients pay little or nothing out of pocket." />
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

function OftenHelps() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <SectionHead center max={720}
          eyebrow="EMDR often helps with"
          title={<>Where EMDR <em>finds its way in</em></>}
          lede="If you're carrying any of these, EMDR may be part of how you find your way through. Each page goes deeper into what we work on together." />
        <div className="mm-spec__grid">
          {RELATED.map((s) => {
            const Ic = CARD_ICON[s.icon] || I.flower;
            return (
              <article className="mm-spec__card mm-fade" key={s.title}>
                <div className="mm-spec__med"><Ic size={24} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <a className="mm-spec__link" href="therapy.html">Explore more <I.arrowRight size={14} /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Alongside() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow">
        <SectionHead center
          eyebrow="Works alongside EMDR"
          title={<>Approaches that often work <em>alongside EMDR</em></>}
          lede="EMDR rarely works in isolation. Depending on what you're working through, your therapist may weave in other approaches to support the work." />
        <div className="mm-along">
          {ALONGSIDE.map((a) => (
            <div className="mm-along__item mm-fade" key={a.name}>
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
            </div>
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
          title={<>Questions about <em>EMDR therapy</em></>} />
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
      <Header active="approaches" />
      <Hero />
      <Helps />
      <WhyDifferent />
      <HowItWorks />
      <LifeDuring />
      <LifeAfter />
      <Therapists />
      <Gallery />
      <Fees />
      <CTABand
        heading={<>You don't have to carry this <em>alone.</em></>}
        sub="A free 15-minute call is the easiest first step. We'll listen first, then help you find the right support for what you're going through." />
      <OftenHelps />
      <Alongside />
      <Faq />
      <FinalCta />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
