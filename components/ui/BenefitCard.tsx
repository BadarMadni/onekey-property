type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="group relative flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/8 transition-all duration-300 overflow-hidden">
      {/* Animated top accent line */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent-light to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div className="w-12 h-12 bg-gradient-to-br from-accent/15 to-accent-light/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0 group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-300 shadow-sm shadow-accent/10">
        {icon}
      </div>
      <div className="pt-0.5">
        <h3 className="font-bold text-foreground mb-2">{title}</h3>
        <p className="text-gray-medium text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
