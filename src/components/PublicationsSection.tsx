import { BookOpen, Library } from "lucide-react";
import { Button } from "@/components/ui/button";

const journals = [
  "Journal of Applied Business Research",
  "International Journal of Financial Innovation",
  "Management and Entrepreneurship Review",
];

const books = [
  "Business Transformation in the Digital Era",
  "Financial Innovation in Emerging Markets",
  "Strategic Management Perspectives",
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-6">
          Our <span className="text-primary">Publications</span>
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Journals */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">Journals</h3>
            </div>
            <div className="space-y-4 mb-6">
              {journals.map((j) => (
                <div key={j} className="bg-card border border-border rounded-lg p-5 hover:shadow-sm transition-shadow">
                  <h4 className="text-sm font-heading font-semibold text-foreground">{j}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Peer-reviewed · Open Access</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="font-heading font-semibold text-xs">
              View All Journals
            </Button>
          </div>

          {/* Book Chapters */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Library className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">Book Chapters</h3>
            </div>
            <div className="space-y-4 mb-6">
              {books.map((b) => (
                <div key={b} className="bg-card border border-border rounded-lg p-5 hover:shadow-sm transition-shadow">
                  <h4 className="text-sm font-heading font-semibold text-foreground">{b}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Scholarly Publication</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="font-heading font-semibold text-xs">
              Explore Books & Chapters
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
