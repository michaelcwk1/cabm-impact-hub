import { BookOpen, Globe, Search, Users } from "lucide-react";

const features = [
  { icon: BookOpen, label: "Academic Publishing" },
  { icon: Globe, label: "International Collaboration" },
  { icon: Search, label: "Research Dissemination" },
  { icon: Users, label: "Peer-Reviewed Journals" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-6">
          About <span className="text-primary">CABM</span>
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-10 rounded-full" />
        <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed text-center max-w-3xl mx-auto mb-6">
          CABM (Center for Applied Business and Management) is a research and publication center at UHW Perbanas University dedicated to advancing knowledge in business, management, finance, and related disciplines.
        </p>
        <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed text-center max-w-3xl mx-auto mb-14">
          CABM provides a platform for researchers, academics, and practitioners to publish high-quality research through peer-reviewed journals and scholarly book chapters.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-heading font-semibold text-foreground text-center">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
