
export const StarBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Plum glow (hero left) */}
      <div
        className="absolute rounded-full blur-3xl bg-[#522D5B]/25 animate-pulse-subtle"
        style={{
          width: "620px",
          height: "620px",
          top: "-15%",
          left: "5%",
        }}
      />

      {/* Raspberry glow (mid-right) */}
      <div
        className="absolute rounded-full blur-3xl bg-[#D7385E]/22 animate-pulse-subtle"
        style={{
          width: "480px",
          height: "480px",
          top: "35%",
          left: "55%",
        }}
      />

      {/* Coral glow (bottom-left) */}
      <div
        className="absolute rounded-full blur-3xl bg-[#FB7B6B]/18 animate-pulse-subtle"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-10%",
          left: "-10%",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute rounded-full blur-2xl bg-[#FB7B6B]/24 animate-float"
        style={{
          width: "160px",
          height: "160px",
          top: "25%",
          left: "75%",
        }}
      />

      <div
        className="absolute rounded-full blur-2xl bg-[#D7385E]/26 animate-float"
        style={{
          width: "140px",
          height: "140px",
          top: "65%",
          left: "20%",
        }}
      />
    </div>
  );
};
