/* Inspire Wellness Therapy — shared content for all 3 homepage variations.
   Plain data (no JSX) attached to window.IW. Names/credentials for the team
   are PLACEHOLDERS to be replaced with the real roster. */
(function () {
  var BOOKING = "https://inspirewellnesstherapy.janeapp.com/?_gl=1*1ndc3xo*_gcl_au*MjA0MTM3Njk4Ny4xNzgwMzM0ODY2*_ga*MTk1MzQwNTg1OS4xNzgwMzM0ODY3*_ga_2R0VD84NT1*czE3ODA2OTQ5NjYkbzkkZzAkdDE3ODA2OTQ5NjYkajYwJGwwJGgw#/discipline/6/treatment/225";
  var IMG = "assets/images/";

  window.IW = {
    booking: BOOKING,
    practice: "Inspire Wellness Therapy",
    tagline: "A holistic approach to healing.",
    phone: "(587) 600-0000",
    email: "hello@inspirewellnesstherapy.ca",
    address: ["Dorchester Square", "1333 8 Street SW, Calgary, AB"],
    img: {
      heroNature: IMG + "hero-office.jpeg",
      emdr: IMG + "emdr-hero.jpeg",
      window: IMG + "counselling-session.jpeg",
      office: IMG + "location.jpeg",
      group: IMG + "team-group.webp",
      field: IMG + "field-sunset.jpeg",
    },

    // ---- Mind / Body / Soul centrepiece ----
    pillars: [
      { key: "Mind", desc: "Evidence-based talk therapy and assessment to quiet anxious thoughts, lift low mood, and help you understand yourself with compassion." },
      { key: "Body", desc: "Somatic and body-based work that helps a braced nervous system feel safe again — because healing isn't only in your head." },
      { key: "Soul", desc: "Reiki, coaching, and meaning-centred care that reconnect you to what matters and to a steadier sense of yourself." },
    ],

    // ---- Services overview (7) ----
    services: [
      { title: "Individual therapy", desc: "One-on-one counselling for adults navigating anxiety, depression, stress, and life transitions.", icon: "user" },
      { title: "Couples & relationships", desc: "A grounded space to reconnect, repair, and communicate — together.", icon: "heart" },
      { title: "Family therapy", desc: "Support for families finding their way through conflict, change, and big feelings.", icon: "users" },
      { title: "Children & adolescents", desc: "Play therapy and gentle, age-appropriate care for kids, teens, and the parents who love them.", icon: "child" },
      { title: "Psychological assessments", desc: "Thorough assessment for ADHD, autism, anxiety, depression, OCD, and PTSD.", icon: "clipboard" },
      { title: "Life & wellness coaching", desc: "Forward-focused coaching to clarify goals, build habits, and move through burnout.", icon: "compass" },
      { title: "Reiki & energy work", desc: "Calming, restorative energy sessions that complement your therapeutic care.", icon: "sparkle" },
    ],

    // ---- Condensed pillars for the modern-minimal variation (5) ----
    servicePillars: [
      { title: "Therapy for individuals", desc: "Anxiety, depression, stress, trauma, and life transitions — for adults, couples, and families.", tags: "Individual · Couples · Family" },
      { title: "Children & adolescents", desc: "Play therapy and warm, developmentally-attuned support for kids, teens, and parents.", tags: "Play therapy · Teens · Parenting" },
      { title: "Psychological assessments", desc: "Clear, thorough assessment for ADHD, autism, anxiety, depression, OCD, and PTSD.", tags: "ADHD · Autism · PTSD" },
      { title: "Coaching & Reiki", desc: "Forward-focused life and wellness coaching, plus restorative Reiki energy work.", tags: "Coaching · Reiki · Burnout" },
    ],

    assessments: ["ADHD", "Autism", "Anxiety", "Depression", "OCD", "PTSD"],

    // ---- How it works (3 steps) ----
    steps: [
      { n: "01", title: "Book your free discovery call", body: "Start with a relaxed, no-pressure 15-minute call. We'll listen to what's bringing you in and help you find the right fit." },
      { n: "02", title: "Meet for a consultation", body: "Connect with your matched therapist through our JaneApp portal — in person in Calgary or securely online across Alberta." },
      { n: "03", title: "Begin with a plan that's yours", body: "Your first full appointment ends with a personalized care plan, paced entirely around what you're ready for." },
    ],

    // ---- Specializations (typographic grid) ----
    specializations: [
      "Anxiety", "ADHD", "Burnout", "Depression", "Grief & loss", "Trauma & PTSD",
      "OCD", "Perinatal & postpartum", "2SLGBTQIA+ affirming", "Autism", "Self-esteem",
      "Life transitions", "Stress & overwhelm", "Relationship issues",
    ],

    // ---- Therapy approaches ----
    approaches: [
      { name: "CBT", full: "Cognitive Behavioural Therapy" },
      { name: "EMDR", full: "Eye Movement Desensitization & Reprocessing" },
      { name: "ACT", full: "Acceptance & Commitment Therapy" },
      { name: "Somatic", full: "Body-based, nervous-system care" },
      { name: "IFS", full: "Internal Family Systems" },
      { name: "Play therapy", full: "For children & adolescents" },
    ],

    // ---- Direct billing insurers ----
    insurers: [
      "Manulife", "Canada Life", "Industrial Alliance",
      "Johnston Group", "Alberta Blue Cross", "ClaimSecure",
      "NIHB", "Green Shield", "Desjardins",
    ],

    // ---- What we help with — card treatment (title + 2 sentences + explore link) ----
    specCards: [
      { title: "Anxiety Therapy", icon: "flower", body: "When worry takes over your day and \u201Cjust relax\u201D stopped being helpful a long time ago. Learn to quiet the noise and feel steady again.", link: "Explore anxiety therapy" },
      { title: "Depression Therapy", icon: "cloud", body: "Low energy, lost motivation, going through the motions. Therapy helps you reconnect with yourself and find a way back to feeling like you again.", link: "Explore depression therapy" },
      { title: "Trauma & PTSD Therapy", icon: "shield", body: "Past experiences don't have to run the show. Trauma-informed therapy helps you process what happened so it stops controlling how you feel today.", link: "Explore trauma therapy" },
      { title: "ADHD Therapy", icon: "zap", body: "Struggling with focus, follow-through, or emotional regulation isn't a character flaw. Therapy helps you work with your brain instead of against it.", link: "Explore ADHD therapy" },
      { title: "OCD Therapy", icon: "repeat", body: "Intrusive thoughts, rituals, and the exhausting need for certainty. Specialized therapy can help you break the cycle and take back your time.", link: "Explore OCD therapy" },
      { title: "Grief & Loss Therapy", icon: "heart", body: "There's no right way to grieve and no timeline that makes it easier. Therapy gives you space to process loss at your own pace, without judgment.", link: "Explore grief therapy" },
      { title: "Burnout Therapy", icon: "leaf", body: "Running on empty with nothing left to give. Rebuild your energy, reset your boundaries, and find a pace that's actually sustainable.", link: "Explore burnout therapy" },
      { title: "Relationship Therapy", icon: "users", body: "Same arguments, growing distance, feeling like roommates instead of partners. Couples therapy helps you break the pattern and rebuild connection.", link: "Explore relationship therapy" },
      { title: "Perinatal Support", icon: "sprout", body: "The journey into parenthood can feel overwhelming and isolating. Compassionate support through pregnancy, postpartum, and everything in between.", link: "Explore perinatal support" },
      { title: "Child & Teen Therapy", icon: "child", body: "Big feelings, school stress, or behaviour that has everyone worried. Play-based, age-appropriate care for kids, teens, and their parents.", link: "Explore child & teen therapy" },
      { title: "Family Therapy", icon: "home", body: "When family dynamics feel strained, therapy creates a space where everyone can be heard. Work through conflict and rebuild trust together.", link: "Explore family therapy" },
      { title: "2SLGBTQIA+ Affirming Care", icon: "sparkle", body: "Affirming, identity-celebrating therapy in a space that's genuinely yours. Support for coming out, transitions, identity, and belonging.", link: "Explore affirming care" },
    ],
    associations: [
      "College of Alberta Psychologists (CAP)",
      "Canadian Counselling & Psychotherapy Association (CCPA)",
      "Alberta College of Social Workers (ACSW)",
      "Psychologists' Association of Alberta (PAA)",
    ],

    // ---- Team (real roster). Each: name, tag, format, creds[], photo. ----
    team: [
      { name: "Alysha Dosanjh", tag: "Founder", format: null, creds: ["Canadian Certified Counsellor", "Registered Counselling Therapist", "Usui Reiki Practitioner"], photo: IMG + "team/alysha.jpeg" },
      { name: "Shianne Pearn", tag: "Clinical Director", format: null, creds: ["Operations & Communications Assistant"], photo: IMG + "team/shianne.jpeg" },
      { name: "Helena Morris", tag: null, format: "Online", creds: ["Registered Psychologist"], photo: IMG + "team/helena.jpeg" },
      { name: "Jennifer Seniuk", tag: null, format: "Online & In Person", creds: ["Canadian Certified Counsellor", "Registered Counselling Therapist", "Angelic Reiki Practitioner"], photo: IMG + "team/jennifer.jpeg" },
      { name: "Khanjan Pandya", tag: null, format: "Online & In Person", creds: ["Registered Psychologist"], photo: IMG + "team/khanjan.jpeg" },
      { name: "Lyndsay Mckerracher", tag: null, format: "Online & In Person", creds: ["Registered Provisional Psychologist"], photo: IMG + "team/lyndsay.jpeg" },
      { name: "Brittni Marshall", tag: null, format: "Online & In Person", creds: ["Registered Social Worker"], photo: IMG + "team/brittni.jpeg" },
      { name: "Shaambhavi Sharma", tag: null, format: "Online & In Person", creds: ["Registered Social Worker"], photo: IMG + "team/shaambhavi.jpeg" },
      { name: "Sara Dosanjh Evans", tag: null, format: "Online & In Person", creds: ["Life & Wellness Coach"], photo: IMG + "team/sara.jpeg" },
    ],

    // ---- Founder / about block ----
    founder: {
      name: "Alysha",
      photo: IMG + "team/alysha.jpeg",
      title: "Founder · Canadian Certified Counsellor & Registered Counselling Therapist",
      body: [
        "Hi, I'm Alysha, the founder of Inspire Wellness Therapy. I created Inspire Wellness Therapy to offer holistic, compassionate mental health support for individuals, couples, families, and adolescents across Calgary and Alberta. Our practice integrates counselling, therapy, life and wellness coaching and Reiki — with services available both in person and online — to support meaningful healing, personal growth, and long-term wellbeing.",
        "Welcome to Inspire Wellness Therapy, Alberta's trusted mental health support for holistic counselling and therapy services in Calgary, along with life and wellness coaching services. Whether you prefer in-person sessions or the convenience of telehealth, our dedicated team is here to support you. We provide therapy and counselling support for adolescents, individuals, relationships and families.",
        "At Inspire Wellness, we specialize in ADHD, anxiety, depression, grief, relationship therapy, self-worth and trauma — providing tailored solutions for your unique needs. Our experienced and compassionate therapists offer a holistic approach to healing, addressing the symptoms and the root causes of your challenges. We offer a variety of modalities such as CBT, DBT, EFT and EMDR, personalized for you.",
        "Start your path to wellness today by booking a complimentary discovery call.",
      ],
    },

    // ---- FAQ (kept short, no walls) ----
    faqs: [
      { q: "Do you offer a free consultation?", a: "Yes. Every new client starts with a free, no-pressure 15-minute discovery call so you can ask questions and feel out the fit before booking." },
      { q: "Do you direct bill my insurance?", a: "We offer direct billing to 9+ major insurers including Alberta Blue Cross, Sun Life, Canada Life, Manulife, and Green Shield Canada — so most clients pay little or nothing out of pocket." },
      { q: "Do you offer online sessions?", a: "Yes. We see clients in person at our Calgary office and securely online across Alberta — whichever helps you feel most comfortable." },
      { q: "What's the difference between a psychologist and a counsellor?", a: "Both provide skilled, regulated talk therapy. Psychologists can also complete formal assessments and diagnoses. We'll help match you to the right professional on your discovery call." },
      { q: "Do you see children and teens?", a: "Yes. We offer play therapy and developmentally-attuned counselling for children and adolescents, with support for parents along the way." },
      { q: "How do I get started?", a: "Book a free 15-minute discovery call. From there we'll arrange a consultation through JaneApp and, at your first appointment, build a personalized plan together." },
    ],
  };
})();
