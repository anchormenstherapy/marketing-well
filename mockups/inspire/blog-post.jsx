/* Inspire Wellness Therapy — individual blog post template.
   Reads ?post=<slug>, pulls the card data from D.posts and the long-form body
   from window.IW_POST_BODIES. Reuses shared chrome.
   Load AFTER data.js + posts-content.js + icons.js + chrome.jsx. */
const { Accordion } = window.MarketingWellCoreDesignSystem_2f2c2c;
const I = window.IWIcons;
const D = window.IW;
const BODIES = window.IW_POST_BODIES || {};

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function fmtDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return MONTHS[m - 1] + " " + d + ", " + y;
}

function getSlug() {
  const q = new URLSearchParams(window.location.search).get("post");
  if (q && D.posts.some((p) => p.slug === q)) return q;
  return D.posts[0].slug;
}

const SLUG = getSlug();
const POST = D.posts.find((p) => p.slug === SLUG);
const BODY = BODIES[SLUG] || null;

function Block({ b }) {
  if (b.h2) return <h2>{b.h2}</h2>;
  if (b.quote) {
    return (
      <React.Fragment>
        <p>{b.quote}</p>
        {b.cite ? <p>{b.cite}</p> : null}
      </React.Fragment>
    );
  }
  if (b.items) {
    return (
      <React.Fragment>
        {b.lead ? <p>{b.lead}</p> : null}
        <ul>{b.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
      </React.Fragment>
    );
  }
  if (b.list) return <ul>{b.list.map((it, i) => <li key={i}>{it}</li>)}</ul>;
  if (b.p) return <p>{b.p}</p>;
  return null;
}

function ArticleHead() {
  return (
    <header className="mm-sand bp-head">
      <div className="mm-wrap mm-wrap--narrow">
        <nav className="bp-crumb" aria-label="Breadcrumb">
          <a href="blog.html">Blog</a>
          <span aria-hidden="true">/</span>
          <span className="cur">{POST.category}</span>
        </nav>
        <p className="bp-cat">{POST.category}</p>
        <h1 className="bp-title">{POST.title}</h1>
        <div className="bp-meta">
          {BODY && BODY.author ? <span>By {BODY.author}</span> : null}
          <span className="bp-meta__dot" aria-hidden="true">·</span>
          <time dateTime={POST.date}>{fmtDate(POST.date)}</time>
          {BODY && BODY.readMins ? <React.Fragment><span className="bp-meta__dot" aria-hidden="true">·</span><span>{BODY.readMins} min read</span></React.Fragment> : null}
        </div>
      </div>
    </header>
  );
}

function FeaturedImage() {
  return (
    <div className="bp-figure">
      <div className="mm-wrap">
        <img src={POST.image} alt={POST.title} />
      </div>
    </div>
  );
}

function Body() {
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow bp-body">
        {BODY
          ? BODY.blocks.map((b, i) => <Block key={i} b={b} />)
          : <p className="bp-lead">{POST.excerpt}</p>}
        {!BODY ? <p className="bp-soon">The full article is coming soon. In the meantime, book a free 15-minute call and we'll happily talk it through.</p> : null}
        <div className="bp-inline-cta">
          <Book>Book a free discovery call</Book>
        </div>
        {BODY && BODY.related && BODY.related.length ? (
          <div className="bp-related">
            <p className="bp-related__lab">Further reading</p>
            <ul>
              {BODY.related.map((r) => (
                <li key={r.href}><a href={r.href}>{r.label} <I.arrowRight size={15} /></a></li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Faqs() {
  if (!BODY || !BODY.faqs || !BODY.faqs.length) return null;
  return (
    <section className="mm-white" style={{ padding: "var(--section-y) 0" }}>
      <div className="mm-wrap mm-wrap--narrow">
        <SectionHead center max={620}
          eyebrow="Good to know"
          title={<>Frequently asked <em>questions</em></>} />
        <div style={{ marginTop: 40 }}>
          <Accordion defaultOpen={0} items={BODY.faqs} />
        </div>
      </div>
    </section>
  );
}

function NextPost() {
  if (!BODY || !BODY.next) return null;
  const href = "blog-post.html?post=" + encodeURIComponent(BODY.next.slug);
  return (
    <section className="mm-sand" style={{ padding: "56px 0" }}>
      <div className="mm-wrap mm-wrap--narrow">
        <a className="bp-next" href={href}>
          <span className="bp-next__lab">Previous article</span>
          <span className="bp-next__title">{BODY.next.title}</span>
          <span className="bp-next__arrow"><I.arrowRight size={20} /></span>
        </a>
      </div>
    </section>
  );
}

function App() {
  useReveal();
  React.useEffect(() => { document.title = POST.title + " — Inspire Wellness Therapy"; }, []);
  return (
    <div className="theme-slate mm">
      <Header active="blog" />
      <ArticleHead />
      <FeaturedImage />
      <Body />
      <Faqs />
      <NextPost />
      <CTABand
        heading={<>Ready to take the <em>first step?</em></>}
        sub="Inspire Wellness Therapy offers a free 15-minute discovery call to help you get started. No commitment, no pressure — just a conversation about what's bringing you in." />
      <LandAck />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
