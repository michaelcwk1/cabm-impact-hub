import { Shield, Eye, Zap, Network } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Rigorous Peer Review",
    desc: "Our double-blind peer review process ensures academic integrity and research quality.",
  },
  {
    icon: Eye,
    title: "Open Access Publication",
    desc: "Research is accessible globally, increasing visibility and citation impact.",
  },
  {
    icon: Zap,
    title: "Fast Review Process",
    desc: "Efficient editorial workflow ensures timely publication.",
  },
  {
    icon: Network,
    title: "Global Academic Network",
    desc: "Collaborate with researchers, institutions, and scholars worldwide.",
  },
];

const WhyPublishSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-6">
          Why Publish With <span className="text-primary">CABM</span>?
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-14 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-heading font-bold text-foreground mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPublishSection;
