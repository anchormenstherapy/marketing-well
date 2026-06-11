/* Inspire Wellness Therapy — Blog index.
   3-up grid of post cards, content from D.posts. Reuses shared chrome.
   Load AFTER data.js + icons.js + chrome.jsx. */
const I = window.IWIcons;
const D = window.IW;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmtDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return MONTHS[m - 1] + " " + d + ", " + y;
}

function Intro() {
  return (
    <section className="mm-sand" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow" style={{ textAlign: "center" }}>
        <SectionHead center max={760}
          eyebrow="The Inspire Wellness blog"
          title={<>Our mental health &amp; <em>wellness</em> blog</>}
          lede={D.blogIntro} />
        <p className="bl-intro__more">A safe, compassionate space to explore your mental health needs — written by our certified counsellors, therapists, and psychologists in Calgary.</p>
      </div>
    </section>
  );
}

function PostCard({ post }) {
  const href = "blog-post.html?post=" + encodeURIComponent(post.slug);
  return (
    <article className="bl-card mm-fade">
      <a className="bl-card__media" href={href} aria-label={post.title}>
        <img src={post.image} alt={post.title} loading="lazy" />
      </a>
      <div className="bl-card__body">
        <div className="bl-card__meta">
          <span className="bl-card__cat">{post.category}</span>
          <span className="bl-card__dot" aria-hidden="true">·</span>
          <time dateTime={post.date}>{fmtDate(post.date)}</time>
        </div>
        <h3 className="bl-card__title"><a href={href}>{post.title}</a></h3>
        <p className="bl-card__excerpt">{post.excerpt}</p>
        <a className="bl-card__more" href={href}>Read more <I.arrowRight size={15} /></a>
      </div>
    </article>
  );
}

function PostGrid() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap">
        <div className="bl-grid">
          {D.posts.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  );
}

function App() {
  useReveal();
  return (
    <div className="theme-slate mm">
      <Header active="blog" />
      <Intro />
      <PostGrid />
      <CTABand
        heading={<>Questions about where to <em>start?</em></>}
        sub="Book a free 15-minute discovery call. No commitment, no pressure — just a conversation about what's bringing you in and how we can help." />
      <FinalCta />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
