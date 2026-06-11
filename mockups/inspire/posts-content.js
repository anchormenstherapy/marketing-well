/* Inspire Wellness Therapy — long-form blog article bodies.
   Plain data (no JSX) keyed by post slug, attached to window.IW_POST_BODIES.
   Block types consumed by blog-post.jsx:
     { p: "…" }              paragraph
     { h2: "…" }             section heading
     { quote: "…", cite }    pull quote
     { lead: "…", items:[] } list with an intro line
     { list: [ "…" ] }       plain list
   Load AFTER data.js, BEFORE blog-post.jsx. */
(function () {
  window.IW_POST_BODIES = {
    "psychologist-psychiatrist-psychotherapist-alberta": {
      author: "Alysha Dosanjh",
      readMins: 8,
      next: { slug: "funny-feeling-in-my-tummy-childrens-book", title: "The Funny Feeling in My Tummy: A Children's Book to Help Kids Understand Big Emotions" },
      blocks: [
        { p: "Feeling unsure about who to contact for mental health support can stall your progress before you even start. In Alberta, psychologists, psychiatrists, and psychotherapists or counsellors each play distinct roles. Knowing who does what helps you get the right care faster." },
        { p: "This guide explains Alberta's training pathways, scope of practice, who can prescribe medication, and how collaborative care typically works. You will also find a simple decision aid to help you choose your next step — including how a complimentary consultation at Inspire Wellness Therapy can point you in the right direction. If getting to an office is tough, we will show you how secure telehealth expands access across Alberta." },
        { p: "You are not expected to know all the answers at the outset. Use the information below to narrow your options, then lean on a short discovery call to confirm your best fit." },
        { quote: "Understanding the mind is not about fixing people, but about helping them find language for what they've always felt.", cite: "Inspire Wellness Therapy" },

        { h2: "How Alberta regulates mental health professionals" },
        { lead: "Alberta's mental health landscape includes several regulated professions. The most common titles you will encounter are:", items: [
          "Psychiatrist — a medical doctor who specializes in mental health, regulated by the College of Physicians and Surgeons of Alberta. Can diagnose mental disorders, order medical tests, and prescribe medication.",
          "Registered Psychologist — a master's or doctoral level clinician registered with the College of Alberta Psychologists. Provides psychological assessment, diagnosis, and evidence-based therapy. Does not prescribe medication.",
          "Registered Provisional Psychologist — a clinician completing supervised practice on the pathway to full registration. Provides therapy and certain assessments under supervision.",
          "Registered Social Worker (RSW) & Certified Canadian Counsellor (CCC) — counsellors or psychotherapists who provide talk therapy and skills-based support. In Alberta, \u201cpsychotherapist\u201d is not a separate protected title as it is in Ontario; many clinicians use counsellor or therapist.",
          "Family physician or nurse practitioner — can diagnose common mental health conditions and prescribe medication, often serving as the first point of contact and referral.",
        ] },
        { p: "In Alberta, psychologists and psychiatrists can both diagnose. Only physicians — including psychiatrists and family doctors — can prescribe medication." },

        { h2: "Training and roles at a glance" },
        { p: "Understanding core differences helps you match your needs to the right professional." },
        { p: "Psychiatrists complete medical school and a residency in psychiatry. Their care often focuses on diagnosis, medical investigations, and medication optimization. Some provide psychotherapy, though wait lists may be long and sessions briefer due to system demands." },
        { p: "Psychologists complete graduate training in psychology and supervised clinical hours. They specialize in psychological assessment, diagnosis, and therapy using approaches like CBT, ACT, DBT strategies, EMDR, and somatic methods." },
        { p: "Psychotherapists or counsellors in Alberta commonly hold master's-level training in counselling or social work. They focus on talk therapy, skills, coping strategies, and support for life challenges, trauma, and relationships. They do not diagnose in every case and do not prescribe." },
        { p: "The key difference between a psychologist and a psychiatrist is medication: psychiatrists are MDs who prescribe; psychologists are therapy and assessment specialists who do not. The difference between a psychiatrist and a psychotherapist is similar — a psychiatrist is a medical doctor who can prescribe and manage medications, while a psychotherapist or counsellor provides talk therapy and skills training without prescribing." },

        { h2: "Who to see, based on your goals" },
        { lead: "Use these common scenarios to guide your choice.", items: [
          "You want therapy for anxiety, depression, grief, trauma, burnout, or relationship stress: start with a psychologist or counsellor. You'll receive structured therapy, coping skills, and a clear plan. If medication could help, your therapist can coordinate with your family physician or a psychiatrist.",
          "You want a diagnostic assessment plus therapy: a psychologist can complete psychological assessments for concerns like ADHD, mood, or trauma-related symptoms, then provide therapy or recommendations.",
          "You want to explore medication, or haven't improved with therapy alone: ask your family physician for a referral to a psychiatrist, or discuss options with your therapist who can help coordinate care.",
          "You or your child need comprehensive testing for ADHD or learning concerns: choose a psychologist who offers formal assessment, a written report, and practical supports.",
        ] },
        { p: "If you are unsure, start with a complimentary 15-minute consultation at Inspire Wellness Therapy. We'll ask about your goals, clarify whether therapy, assessment, or a medication consult is the best next step, and outline how to proceed." },

        { h2: "How collaborative care works" },
        { lead: "Most clients benefit from a combined approach. A typical pathway in Alberta looks like this:", items: [
          "Initial therapy with a psychologist or counsellor to understand your concerns, set goals, and begin evidence-based strategies.",
          "If assessment is needed, your psychologist completes standardized testing, behavioural questionnaires, and clinical interviews, followed by a feedback session and recommendations.",
          "If medication might help, your therapist shares a summary (with your consent) with your family physician or psychiatrist to coordinate care.",
          "Therapy continues to build skills, address patterns, and support behaviour change while medication is monitored separately by your physician or psychiatrist.",
        ] },
        { p: "At Inspire Wellness Therapy, we routinely collaborate with family doctors and psychiatrists to ensure your plan is cohesive and practical." },

        { h2: "Alberta-specific notes, not Ontario" },
        { p: "If you've read articles from Ontario, you may have noticed \u201cRegistered Psychotherapist\u201d is a protected title there. In Alberta, that exact title is not a separate, regulated category. You'll more often see Registered Psychologist, Registered Provisional Psychologist, Registered Social Worker, or Certified Canadian Counsellor. This distinction matters when you check insurance coverage and when you select your provider." },

        { h2: "A practical decision aid" },
        { lead: "Ask yourself three quick questions:", items: [
          "Do I want talk therapy, coping tools, and a safe space to process? A psychologist or counsellor is a solid first step.",
          "Do I need a formal diagnosis or written assessment for ADHD, autism, or learning concerns? A psychologist provides psychological assessment and a report with recommendations.",
          "Am I considering medication, have complex medical factors, or have tried therapy without enough relief? Discuss a psychiatry referral with your family physician and continue therapy alongside medication care.",
        ] },
        { p: "If you're choosing between a psychologist or psychotherapist, consider complexity and goals. For structured assessment plus therapy, choose a psychologist. For counselling focused on coping, relationships, or life transitions, a counsellor or psychotherapist can be an excellent fit." },

        { h2: "How Inspire Wellness Therapy helps you choose" },
        { lead: "Getting started should feel simple and compassionate. We offer:", items: [
          "Complimentary 15-minute consultations to clarify goals and match you with a clinician.",
          "Therapy in person in Calgary and secure telehealth across Alberta for flexible scheduling.",
          "A holistic, person-centred approach that integrates evidence-based methods with mind-body practices.",
          "Collaboration with your family doctor or psychiatrist if medication or medical testing is part of your plan.",
        ] },

        { h2: "Telehealth expands across Alberta" },
        { p: "Quality care should not hinge on your postal code. With secure telehealth, you can begin or continue therapy from home, work, or school anywhere in Alberta. Sessions are confidential and follow the same evidence-based structure as in-person care." },
        { p: "Telehealth is especially helpful for busy professionals, caregivers, rural residents, and clients who prefer the privacy and comfort of home." },

        { h2: "Gentle next steps" },
        { p: "You do not need to map this out alone. A short discovery call can save you weeks of uncertainty and point you toward the right support now. If therapy aligns with your needs, we can help you start in Calgary or anywhere in Alberta through secure telehealth. If medication or assessment is indicated, we'll outline a coordinated plan with your physician or psychiatrist so you feel informed and supported from the very first step." },
      ],
      faqs: [
        { q: "What is the difference between a psychiatrist and a psychotherapist?", a: "A psychiatrist is a medical doctor who diagnoses and prescribes medication. A psychotherapist or counsellor provides talk therapy and skills-based support but does not prescribe." },
        { q: "What is a key difference between a psychologist and a psychiatrist?", a: "Psychologists provide assessment, diagnosis, and therapy; psychiatrists are physicians who can prescribe and manage medications." },
        { q: "Which is a major difference between clinical psychologists and psychiatrists?", a: "Training. Clinical psychologists complete graduate training in psychology; psychiatrists complete medical school and a residency in psychiatry. Only psychiatrists prescribe medication." },
        { q: "Should I see a psychologist or a psychotherapist?", a: "If you need a formal assessment plus therapy or want a diagnosis, see a psychologist. If you primarily want ongoing counselling and coping strategies, a psychotherapist or counsellor can be a great fit. If you're unsure, start with a brief consultation to decide together." },
        { q: "How do I get counselling in Calgary?", a: "Book a complimentary consultation, choose in-person or telehealth sessions, confirm insurance coverage, and begin with a therapist matched to your needs." },
      ],
      related: [
        { label: "EMDR therapy in Calgary", href: "emdr.html" },
        { label: "Anxiety therapy", href: "therapy.html" },
      ],
    },
  };
})();
