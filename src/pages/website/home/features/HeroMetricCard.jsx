const HeroMetricCard = ({ value, label, icon }) => {
  return (
    <div className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-3xl font-semibold leading-none text-white">{value}</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-white/80">{label}</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4 text-white">{icon}</div>
      </div>
    </div>
  );
};

export default HeroMetricCard;
