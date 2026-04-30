import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary: "bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-bold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:brightness-110",
  secondary: "bg-gradient-to-r from-primary to-primary-light text-white font-semibold shadow-lg",
  outline: "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  white: "bg-white hover:bg-gray-50 text-primary font-bold shadow-lg",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={base}>{children}</Link>;
  }

  return (
    <button type={type} className={base} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
