import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    date: "March 2026",
    title: "Call for Papers: Sustainable Finance",
    desc: "Submit your research on sustainable finance and green economics.",
  },
  {
    date: "February 2026",
    title: "New Journal Issue Published",
    desc: "Latest issue of the Journal of Applied Business Research is now available.",
  },
  {
    date: "January 2026",
    title: "International Research Collaboration Program",
    desc: "CABM announces new partnerships with leading global research institutions.",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-6">
          News & <span className="text-primary">Updates</span>
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-14 rounded-full" />

        <div className="space-y-6 mb-10">
          {newsItems.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-sm transition-shadow flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CalendarDays className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground font-body">{item.date}</span>
                <h3 className="text-base font-heading font-bold text-foreground mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="font-heading font-semibold text-xs">View All News</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
