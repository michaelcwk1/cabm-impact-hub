const footerLinks = [
  { label: "About CABM", href: "#about" },
  { label: "Journals", href: "#publications" },
  { label: "Books & Chapters", href: "#publications" },
  { label: "For Authors", href: "#authors" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">CABM</h3>
            <p className="text-sm text-primary-foreground/60 font-body leading-relaxed">
              Center for Applied Business and Management<br />
              UHW Perbanas University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary-foreground mb-4">Connect With Us</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-primary-foreground/60 font-body">LinkedIn</span>
              <span className="text-sm text-primary-foreground/60 font-body">ResearchGate</span>
              <span className="text-sm text-primary-foreground/60 font-body">Google Scholar</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50 font-body">
            © {new Date().getFullYear()} CABM – Center for Applied Business and Management · UHW Perbanas University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
