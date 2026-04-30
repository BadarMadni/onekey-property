type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">{value}</p>
      <p className="text-gray-medium font-medium text-sm uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}
