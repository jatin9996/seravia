const items = [
  "Pigmentation",
  "Acne",
  "Sensitivity",
  "Tanning",
  "Premature ageing",
  "Doctor-owned",
  "Indian skin",
  "Indian climate",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden border-y border-ink/10 bg-cream py-5">
      <div className="marquee-track flex w-max gap-10">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="font-serif text-xl italic text-leaf">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
