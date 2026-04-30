import Button from "./Button";

type CTABannerProps = {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTABanner({
  title,
  subtitle,
  buttonText = "Get a Free Valuation",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      {/* Gradient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-light/5 rounded-full blur-[120px]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Button href={buttonHref} variant="primary" size="lg">
          {buttonText} &rarr;
        </Button>
      </div>
    </section>
  );
}
