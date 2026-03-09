const partners = [
  "Scopus",
  "Google Scholar",
  "DOAJ",
  "CrossRef",
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-xl font-heading font-bold text-foreground mb-2">
          Indexed & Recognized By
        </h2>
        <p className="text-sm text-muted-foreground font-body mb-10">
          Our publications are indexed in leading academic databases
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((p) => (
            <div
              key={p}
              className="px-8 py-4 bg-card border border-border rounded-lg font-heading font-bold text-muted-foreground text-lg tracking-wide hover:text-primary transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
