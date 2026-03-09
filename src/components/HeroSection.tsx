import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <p className="text-secondary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
          UHW Perbanas University
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          CABM – Center for Applied Business and Management
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed mb-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          A research and academic publication platform supporting journals, scholarly book chapters, and applied research in business, management, and finance.
        </p>
        <p className="text-accent font-heading font-semibold text-base tracking-wide mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Advancing Knowledge Through Research
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" variant="secondary" className="font-heading font-bold text-sm px-8">
            Submit Your Manuscript
          </Button>
          <Button size="lg" variant="outline" className="font-heading font-semibold text-sm px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            Explore Our Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
