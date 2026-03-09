import { FileText, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForAuthorsSection = () => {
  return (
    <section id="authors" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-6">
          Ready to <span className="text-primary">Publish</span>?
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-3">Submit to a Journal</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
              Submit your manuscript to our peer-reviewed journals in business, finance, and management.
            </p>
            <Button className="font-heading font-semibold text-xs">Submit Manuscript</Button>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <BookMarked className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-3">Propose a Book Chapter</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
              Contribute your research as part of collaborative academic book projects.
            </p>
            <Button variant="outline" className="font-heading font-semibold text-xs border-accent text-accent hover:bg-accent/10">
              Submit Chapter Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForAuthorsSection;
