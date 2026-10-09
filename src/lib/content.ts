export const nav = [
  { href: "/story", label: "Our story" },
  { href: "/science", label: "The science" },
  { href: "/concerns", label: "Skin concerns" },
  { href: "/contact", label: "Contact" },
] as const;

export const concerns = [
  {
    id: "pigmentation",
    index: "01",
    title: "Pigmentation",
    kicker: "Tone that lingers",
    summary:
      "A mark can outlast the moment that made it. On Indian skin, tone is a long conversation between melanin, inflammation, and daily light.",
    body: "Melanin is a strength. It is also why a small mark can remain visible long after the original trigger has gone. Heat, ultraviolet light, and inflammation all tell pigment cells to stay active. A useful routine looks at the mark, the barrier around it, and the light the skin meets every day. Seravia’s point of view is simple: even tone is built patiently, with ingredients chosen for a reason and protection that is worn, not saved for holidays.",
  },
  {
    id: "acne",
    index: "02",
    title: "Acne",
    kicker: "Congestion in humid air",
    summary:
      "Humidity traps sweat. Pollution adds another layer. Drying the skin out can quiet a spot today and leave a mark that stays.",
    body: "Acne in an Indian climate is rarely only about oil. Humidity traps sweat against the skin. Pollution and long days add another layer. Harsh drying routines can feel decisive in the moment and then leave skin tight, reactive, and more likely to mark. We favour care that respects oil balance, calms inflammation, and does not trade a clear day for a damaged barrier.",
  },
  {
    id: "sensitivity",
    index: "03",
    title: "Sensitivity",
    kicker: "A barrier under weather",
    summary:
      "Cool rooms, hot streets, hard water, and fragrance pull the barrier in different directions. Stinging is information.",
    body: "Sensitive skin is often a barrier that has been asked to do too much. Cool rooms, hot streets, mineral-heavy water, and heavily fragranced products pull in different directions. Stinging, tightness, and sudden redness are signals, not inconveniences. A dermatologist-led formula starts by asking what the skin can tolerate, then adds only what earns its place.",
  },
  {
    id: "tanning",
    index: "04",
    title: "Tanning",
    kicker: "Sun as a daily fact",
    summary:
      "Tanning is the skin answering ordinary daylight. Across India, that answer often deepens the marks already there.",
    body: "Tanning is not a seasonal event for most people in India. Commutes, courtyards, and open afternoons deliver ultraviolet light whether or not a beach is involved. The skin darkens to protect itself, and that same response can deepen existing marks. Daytime defence — shade, clothing, and a sunscreen texture people will actually wear in heat — sits at the centre of care, not at the edge of it.",
  },
  {
    id: "ageing",
    index: "05",
    title: "Premature ageing",
    kicker: "Dullness that arrives early",
    summary:
      "Dullness, fine lines, and tired texture can arrive early when ultraviolet light and city air are part of every week.",
    body: "Ageing skin is not a failure of youth. In India’s light and air, the signs can simply arrive sooner: a loss of bounce, a tired surface, lines that follow expression and sun. The useful work is quiet and daily. Protect the skin you have. Support the barrier. Choose antioxidants and renewal ingredients because they have a job, not because a trend named them.",
  },
] as const;

export const pillars = [
  {
    title: "Doctor-owned",
    text: "A dermatologist holds the standard for what may enter a formula. Skin health outranks a campaign line.",
  },
  {
    title: "Clinically focused",
    text: "Each ingredient is there for a defined job — tone, comfort, barrier, or daylight defence — at a level that makes sense.",
  },
  {
    title: "Carefully selected",
    text: "Familiar botanicals are not automatic. An ingredient earns a place only when it can be explained with a straight face.",
  },
  {
    title: "Made for this climate",
    text: "Heat, humidity, hard water, and long sun hours shape texture, preservation, and how a product feels at 2 p.m.",
  },
] as const;

export const dayMoments = [
  {
    time: "Morning",
    title: "Hard water, first cleanse",
    text: "The day often starts with mineral-heavy water. A cleanse has to lift the night and still leave the barrier able to face the street.",
  },
  {
    time: "Afternoon",
    title: "Sun that is not a holiday",
    text: "The commute is ultraviolet light. Tanning and pigmentation are decided between home and work, not on a weekend away.",
  },
  {
    time: "Evening",
    title: "Two climates, one face",
    text: "Hot air, then a cold room. Skin that managed noon can feel tight by ten. Comfort belongs in the formula.",
  },
] as const;

export const steps = [
  {
    index: "01",
    title: "Begin with the skin",
    text: "Pigmentation, acne, sensitivity, tanning, and early ageing are read the way a dermatologist reads them: as patterns, not as isolated slogans.",
  },
  {
    index: "02",
    title: "Shortlist with intent",
    text: "Ingredients are chosen for a job. If a name is famous but the dose or the texture does not serve Indian skin, it does not stay.",
  },
  {
    index: "03",
    title: "Formulate for the day",
    text: "A serum that pills under sunscreen, or a cream that suffocates in humidity, has already failed. Wearability is part of efficacy.",
  },
  {
    index: "04",
    title: "Hold the claim still",
    text: "Language stays inside what the formula can support. No borrowed percentages. No promises the skin cannot keep.",
  },
] as const;

export const ingredients = [
  {
    name: "Niacinamide",
    role: "Tone and barrier",
    text: "A dermatologist’s everyday tool for uneven look, visible pores, and a barrier that has been asked to cope with weather.",
  },
  {
    name: "Vitamin C",
    role: "Brightness, antioxidant",
    text: "Used to support a fresher surface and to help skin meet pollution and ultraviolet stress. The form and the texture matter as much as the name.",
  },
  {
    name: "Centella asiatica",
    role: "Comfort",
    text: "A calming botanical tradition, kept only when it genuinely soothes reactive or post-blemish skin rather than decorating a label.",
  },
  {
    name: "Ceramides",
    role: "Barrier lipids",
    text: "The skin’s own mortar. Useful when air-conditioning, cleansers, and climate swings have left the surface feeling thin.",
  },
  {
    name: "Azelaic acid",
    role: "Congestion and marks",
    text: "Often considered when bumps and the marks they leave need a gentler path than aggressive exfoliation.",
  },
  {
    name: "Sunscreen filters",
    role: "Daily light defence",
    text: "The least glamorous and most decisive step for tanning and pigmentation. The brief is a texture people will wear in real heat.",
  },
] as const;

export const faqs = [
  {
    q: "Is Seravia a medical clinic?",
    a: "Seravia Lifesciences is a skincare house founded by a dermatologist. This website explains the point of view behind the formulas. It does not diagnose, prescribe, or replace a consultation.",
  },
  {
    q: "Are the formulas only for Indian skin?",
    a: "They are designed around the concerns and climate most common in India: pigmentation, acne, sensitivity, tanning, and early ageing in heat, humidity, and strong sun. Skin is individual. A good formula respects that.",
  },
  {
    q: "Do you use kitchen ingredients because they are familiar?",
    a: "No. Turmeric, rice, and other household names can be part of culture without being part of a jar. An ingredient is included when the form, the dose, and the skin concern justify it.",
  },
  {
    q: "Will a product fade pigmentation in a week?",
    a: "We will not say that. Marks on melanin-rich skin usually need consistent care, sun discipline, and time. Anyone promising an overnight erasure is selling a sentence, not a formula.",
  },
  {
    q: "When should I see a dermatologist in person?",
    a: "If acne is painful or scarring, pigmentation is changing quickly, skin is reacting to everything, or you are pregnant or on medication, please see a dermatologist. A website can explain an approach. It cannot examine your skin.",
  },
] as const;
