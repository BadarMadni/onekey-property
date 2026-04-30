type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="group flex gap-5 items-start p-5 rounded-2xl hover:bg-white transition-colors duration-300 hover:shadow-lg hover:shadow-accent/5">
      <div className="w-12 h-12 bg-gradient-to-br from-accent/15 to-accent-light/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0 group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-foreground mb-1.5">{title}</h3>
        <p className="text-gray-medium text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
