type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  dark?: boolean;
};

export default function ServiceCard({ icon, title, description, dark = false }: ServiceCardProps) {
  if (dark) {
    return (
      <div className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 hover:border-accent-light/30 hover:shadow-xl hover:shadow-accent/5 h-full">
        <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent-light/10 rounded-xl flex items-center justify-center text-accent-light mb-5 group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className="group bg-white border border-gray-border rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-accent/30 hover:shadow-accent/5 h-full">
      <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-accent-light/5 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-gray-medium text-sm leading-relaxed">{description}</p>
    </div>
  );
}
