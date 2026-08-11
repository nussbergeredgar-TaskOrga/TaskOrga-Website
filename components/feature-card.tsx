import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-card border border-ink-100 bg-surface p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-display font-semibold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm text-ink-500">{description}</p>
    </div>
  );
}
