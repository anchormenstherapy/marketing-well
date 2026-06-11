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
    phone: "(825) 901-0100",
    email: "Inquiries@inspirewellnesstherapy.ca",
    address: ["Dorchester Square", "1333 8 Street SW, Calgary, AB"],
    // ---- Single downtown Calgary office (Dorchester Square) ----
    office: {
      name: "Dorchester Square",
      suite: "1333 8 Street SW #315",
      cityLine: "Calgary, AB T2R 1M6",
      near: ["Beltline", "Mission", "Kensington"],
      mapEmbed: "https://www.google.com/maps?q=1333%208%20Street%20SW%20%23315%2C%20Calgary%2C%20AB%20T2R%201M6&output=embed",
      mapLink: "https://www.google.com/maps/search/?api=1&query=1333+8+Street+SW+%23315%2C+Calgary%2C+AB+T2R+1M6",
      hours: [
        ["Monday", "9:00 – 7:00"],
        ["Tuesday", "9:00 – 7:00"],
        ["Wednesday", "9:00 – 7:00"],
        ["Thursday", "9:00 – 7:00"],
        ["Friday", "9:00 – 5:00"],
        ["Saturday", "10:00 – 4:00"],
        ["Sunday", "Closed"],
      ],
    },
    img: {
      heroNature: IMG + "hero-office.jpeg",
      emdr: IMG + "emdr-hero.jpeg",
      window: IMG + "counselling-session.jpeg",
      office: IMG + "location.jpeg",
      locationHero: IMG + "location-hero.jpeg",
      teamHero: IMG + "team-hero.jpeg",
      group: IMG + "team-group.webp",
      field: IMG + "field-sunset.jpeg",
      anxietyHero: IMG + "anxiety-hero.jpeg",
      office1: IMG + "office/office-1.jpeg",
      office2: IMG + "office/office-2.jpeg",
      office3: IMG + "office/office-3.jpeg",
      office4: IMG + "office/office-4.jpeg",
      office5: IMG + "office/office-5.jpeg",
      office6: IMG + "office/office-6.jpeg",
      logoCream: IMG + "logo-cream.png",
      logoSlate: IMG + "logo-slate.png",
      findUsOn: IMG + "find-us-on.jpeg",
    },

    // ---- Mind / Body / Soul centrepiece ----
    pillars: [
      { key: "Mind", desc: "Evidence-based talk therapy and assessment to quiet anxious thoughts, lift low mood, and help you understand yourself with compassion." },
      { key: "Body", desc: "Somatic and body-based work that helps a braced nervous system feel safe again, because healing isn't only in your head." },
      { key: "Soul", desc: "Reiki, coaching, and meaning-centred care that reconnect you to what matters and to a steadier sense of yourself." },
    ],

    // ---- Services overview (7) ----
    services: [
      { title: "Individual therapy", desc: "One-on-one counselling for adults navigating anxiety, depression, stress, and life transitions.", icon: "user" },
      { title: "Couples & relationships", desc: "A grounded space to reconnect, repair, and communicate, together.", icon: "heart" },
      { title: "Family therapy", desc: "Support for families finding their way through conflict, change, and big feelings.", icon: "users" },
      { title: "Children & adolescents", desc: "Play therapy and gentle, age-appropriate care for kids, teens, and the parents who love them.", icon: "child" },
      { title: "Psychological assessments", desc: "Thorough assessment for ADHD, autism, anxiety, depression, OCD, and PTSD.", icon: "clipboard" },
      { title: "Life & wellness coaching", desc: "Forward-focused coaching to clarify goals, build habits, and move through burnout.", icon: "compass" },
      { title: "Reiki & energy work", desc: "Calming, restorative energy sessions that complement your therapeutic care.", icon: "sparkle" },
    ],

    // ---- Condensed pillars for the modern-minimal variation (5) ----
    servicePillars: [
      { title: "Individual Therapy", desc: "Anxiety, depression, stress, trauma, and life transitions, with one-on-one support tailored to you." },
      { title: "Child & Adolescents", desc: "Compassionate, age-appropriate care that helps younger clients feel safe, seen, and supported." },
      { title: "Family & Relationship Therapy", desc: "Support for couples and families working to reconnect, communicate, and move forward together." },
      { title: "Psychological Assessments", desc: "Thorough assessments for ADHD, autism, anxiety, depression, and more, with clear next steps." },
      { title: "Coaching", desc: "Practical life and wellness coaching to help you set goals and build momentum beyond the therapy room." },
      { title: "Reiki", desc: "Gentle energy work that supports relaxation, balance, and the body's natural capacity to heal." },
    ],

    assessments: ["ADHD", "Autism", "Anxiety", "Depression", "OCD", "PTSD"],

    // ---- How it works (3 steps) ----
    steps: [
      { n: "01", title: "Book your free discovery call", body: "Start with a relaxed, no-pressure 15-minute call. We'll listen to what's bringing you in and help you find the right fit." },
      { n: "02", title: "Meet for a consultation", body: "Connect with your matched therapist through our JaneApp portal, in person in Calgary or securely online across Alberta." },
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
      { name: "ACT", full: "Acceptance & Commitment Therapy" },
      { name: "CBT", full: "Cognitive Behavioural Therapy" },
      { name: "DBT", full: "Dialectical Behavioural Therapy" },
      { name: "EFT", full: "Emotion Freedom Technique" },
      { name: "EMDR", full: "Eye Movement Desensitization & Reprocessing" },
      { name: "IFS", full: "Internal Family Systems Therapy" },
      { name: "Spiritual", full: "Spiritually Integrated Therapy" },
      { name: "Somatic", full: "Somatic Based Therapy" },
      { name: "Solution", full: "Solution Focused Therapy" },
    ],

    // ---- Direct billing insurers ----
    insurers: [
      "Manulife", "Canada Life", "Industrial Alliance",
      "Johnston Group", "Alberta Blue Cross", "ClaimSecure",
      "NIHB", "Green Shield", "Desjardins",
    ],

    // ---- What we help with — card treatment (title + 2 sentences + explore link) ----
    specCards: [
      { title: "Anxiety", icon: "wind", body: "When worry won't switch off, even when you want it to.", link: "Explore more" },
      { title: "ADHD", icon: "zap", body: "When your mind moves fast but the world keeps asking you to slow down.", link: "Explore more" },
      { title: "Burnout", icon: "leaf", body: "When you've been strong for so long that empty crept up on you.", link: "Explore more" },
      { title: "Child & Adolescent", icon: "child", body: "When your child is struggling and you want them to feel understood.", link: "Explore more" },
      { title: "Depression", icon: "cloud", body: "When everything feels heavier than it should, and lighter feels far away.", link: "Explore more" },
      { title: "Grief", icon: "heart", body: "When you're learning to carry something you never wanted to.", link: "Explore more" },
      { title: "Identity and Life Transitions", icon: "compass", body: "When the ground shifts and you're figuring out who you are now.", link: "Explore more" },
      { title: "Inner Child", icon: "sprout", body: "When old hurts still shape the way you move through today.", link: "Explore more" },
      { title: "Men's Mental Health", icon: "user", body: "When you've been told to push through, but you're ready to be heard.", link: "Explore more" },
      { title: "OCD", icon: "repeat", body: "When the thoughts and rituals start running the day instead of you.", link: "Explore more" },
      { title: "Self Worth", icon: "sparkle", body: "When the hardest voice to quiet is the one in your own head.", link: "Explore more" },
      { title: "Relationships", icon: "users", body: "When you love each other but keep missing each other.", link: "Explore more" },
      { title: "Trauma", icon: "shield", body: "When the past keeps showing up in the present, uninvited.", link: "Explore more" },
      { title: "Women's Health", icon: "flower", body: "When your wellbeing deserves care that actually listens.", link: "Explore more" },
      { title: "2SLGBTQIA+", icon: "rainbow", body: "When you want a space where all of you is welcome, no explaining required.", link: "Explore more" },
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
        "Hi, I'm Alysha, the founder of Inspire Wellness Therapy. I created Inspire Wellness Therapy to offer holistic, compassionate mental health support for individuals, couples, families, and adolescents across Calgary and Alberta. Our practice integrates counselling, therapy, life and wellness coaching and Reiki, with services available both in person and online, to support meaningful healing, personal growth, and long-term wellbeing.",
        "Welcome to Inspire Wellness Therapy, Alberta's trusted mental health support for holistic counselling and therapy services in Calgary, along with life and wellness coaching services. Whether you prefer in-person sessions or the convenience of telehealth, our dedicated team is here to support you. We provide therapy and counselling support for adolescents, individuals, relationships and families.",
        "At Inspire Wellness, we specialize in ADHD, anxiety, depression, grief, relationship therapy, self-worth and trauma, providing tailored solutions for your unique needs. Our experienced and compassionate therapists offer a holistic approach to healing, addressing the symptoms and the root causes of your challenges. We offer a variety of modalities such as CBT, DBT, EFT and EMDR, personalized for you.",
        "Start your path to wellness today by booking a complimentary discovery call.",
      ],
    },

    // ---- FAQ (kept short, no walls) ----
    faqs: [
      { q: "Do you offer a free consultation?", a: "Yes. Every new client starts with a free, no-pressure 15-minute discovery call so you can ask questions and feel out the fit before booking." },
      { q: "Do you direct bill my insurance?", a: "We offer direct billing to 9+ major insurers including Alberta Blue Cross, Sun Life, Canada Life, Manulife, and Green Shield Canada, so most clients pay little or nothing out of pocket." },
      { q: "Do you offer online sessions?", a: "Yes. We see clients in person at our Calgary office and securely online across Alberta, whichever helps you feel most comfortable." },
      { q: "What's the difference between a psychologist and a counsellor?", a: "Both provide skilled, regulated talk therapy. Psychologists can also complete formal assessments and diagnoses. We'll help match you to the right professional on your discovery call." },
      { q: "Do you see children and teens?", a: "Yes. We offer play therapy and developmentally-attuned counselling for children and adolescents, with support for parents along the way." },
      { q: "How do I get started?", a: "Book a free 15-minute discovery call. From there we'll arrange a consultation through JaneApp and, at your first appointment, build a personalized plan together." },
    ],

    // ---- Blog ----
    blogIntro: "Welcome to our blog, where you can explore a wide range of topics including the benefits of therapy, practical wellness advice, valuable mental health tips, and inspiring stories of trauma recovery. At Inspire Wellness Therapy, we are committed to providing comprehensive holistic healing and therapy services in the beautiful city of Calgary, Alberta. Whether you prefer the warmth of in-person sessions or the convenience of virtual telehealth appointments, our dedicated team of certified counsellors, professional therapists, and experienced psychologists in Calgary is here to support and guide you through your healing journey.",
    posts: [
      {
        slug: "psychologist-psychiatrist-psychotherapist-alberta",
        title: "Psychologist, Psychiatrist, or Psychotherapist? Choosing the Right Fit in Alberta",
        date: "2026-05-28",
        category: "Getting started",
        image: IMG + "blog/psychologist.jpeg",
        excerpt: "This guide explains the differences between psychologists, psychiatrists and psychotherapists or counsellors in Alberta so you can choose the right fit. You'll learn who can diagnose, who prescribes medication, how training and roles differ, and how collaborative care works — plus a practical decision aid and in-person and telehealth options across Alberta.",
      },
      {
        slug: "funny-feeling-in-my-tummy-childrens-book",
        title: "The Funny Feeling in My Tummy: A Children's Book to Help Kids Understand Big Emotions",
        date: "2026-04-07",
        category: "Children & families",
        image: IMG + "blog/funny-feeling.jpeg",
        excerpt: "The Funny Feeling in My Tummy is a therapist-written children's book about anxiety that helps kids understand big emotions through body awareness and gentle storytelling. Designed to support early emotional regulation, it helps children recognize physical sensations, feel validated, and build confidence in navigating their feelings.",
      },
      {
        slug: "reiki-healing-calgary",
        title: "Reiki Healing in Calgary: Restore Balance, Reduce Stress, and Reconnect With Yourself",
        date: "2026-03-24",
        category: "Holistic care",
        image: IMG + "blog/reiki.jpeg",
        excerpt: "Discover Reiki healing in Calgary at Inspire Wellness Therapy. Our Master-level Usui and Angelic Reiki practitioners offer a gentle, holistic approach to stress relief, emotional balance, and nervous-system healing in a safe, supportive space.",
      },
      {
        slug: "adhd-assessments-alberta-guide",
        title: "ADHD Assessments in Alberta: A Step-by-Step Guide for Adults and Youth",
        date: "2026-03-17",
        category: "Assessments",
        image: IMG + "blog/adhd.jpeg",
        excerpt: "If you've ever wondered whether you or your child might have ADHD, a proper assessment is the first step. In Alberta, ADHD assessments are conducted by qualified professionals who look at behaviour, attention, and executive functioning — helping identify strengths and challenges, guide treatment, and support accommodations at school or work.",
      },
      {
        slug: "couples-counselling-calgary",
        title: "Couples Counselling in Calgary: What to Expect and How It Strengthens Connection",
        date: "2026-03-02",
        category: "Relationships",
        image: IMG + "blog/couples.jpeg",
        excerpt: "Couples counselling isn't about assigning blame. It's a supportive, neutral space where partners can slow down, step out of reactive patterns, and understand what's happening beneath the surface — building emotional safety and tools that support a stronger, more resilient relationship over time.",
      },
      {
        slug: "reclaiming-yourself-after-motherhood",
        title: "Reclaiming Yourself After Motherhood: Identity, Health, and Balance",
        date: "2026-01-24",
        category: "Motherhood",
        image: IMG + "blog/motherhood.jpeg",
        excerpt: "Many mothers in Calgary describe motherhood as meaningful and transformative — yet also overwhelming and identity-shifting. This article explores how motherhood affects identity and well-being, and offers practical ways to reclaim balance, confidence, and emotional health after becoming a mom.",
      },
    ],
  };
})();
