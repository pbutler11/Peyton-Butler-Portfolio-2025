import { useState, useEffect, } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  // --- Frontend (your strongest area) ---
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "TypeScript", level: 95, category: "frontend" },
  { name: "Angular", level: 90, category: "frontend" },
  { name: "React", level: 82, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },
  { name: "PrimeNG / Component Libraries", level: 85, category: "frontend" },
  { name: "UI/UX Implementation", level: 90, category: "frontend" },


  { name: "C# / .NET", level: 40, category: "backend", status: "learning" },
  { name: "SQL / SQL Server", level: 50, category: "backend", status: "learning" },
  { name: "REST API Design", level: 60, category: "backend", status: "learning" },
  
  // --- Tools & Dev Workflow ---
  { name: "Git & GitHub", level: 92, category: "tools" },
  { name: "Postman / API Debugging", level: 88, category: "tools" },
  { name: "VS Code", level: 97, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Jira / Agile Workflows", level: 90, category: "tools" },

];


const categories = ["all", "frontend", "backend", "tools"];

const getLevelLabel = (level) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level <= 60) return "Learning";

};

const getCategoryLabel = (c) => {
  if (c === "frontend") return "Frontend";
  if (c === "backend") return "Backend";
  return "Tools";
};

// 3D transform for circle-carousel
const getTransformForOffset = (offset) => {
  const baseX = 200;
  const translateX = offset * baseX;

  const rotateY = offset * -28;
  const scale = offset === 0 ? 1.15 : 0.8;

  const baseZ = 80;
  const translateZ = offset === 0 ? baseZ : baseZ - Math.abs(offset) * 80;

  return `
    translate(-50%, -50%)
    translateX(${translateX}px)
    translateZ(${translateZ}px)
    rotateY(${rotateY}deg)
    scale(${scale})
  `;
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme, setTheme] = useState("light"); // actively used

  // listen for theme-change event from ThemeToggle
  useEffect(() => {
    const handler = (e) => {
      if (e instanceof CustomEvent) {
        setTheme(e.detail); // "light" or "dark"
      }
    };

    window.addEventListener("theme-change", handler);
    return () => window.removeEventListener("theme-change", handler);
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const currentSkill =
    filteredSkills[currentIndex] || filteredSkills[0] || skills[0];

  const changeIndex = (delta) => {
    const len = filteredSkills.length;
    if (len <= 1) return;
    setCurrentIndex((p) => (p + delta + len) % len);
  };

  const goPrev = () => changeIndex(-1);
  const goNext = () => changeIndex(1);

  return (
    <section
      id="skills"
      className="scroll-mt-16 py-16 px-4 relative overflow-hidden"
    >
      {/* soft ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl
        bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.18),transparent_60%),
            radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_60%)]"
      />

      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mt-2 mb-4 max-w-2xl mx-auto">
          A snapshot of the tools I reach for most, with a focus on frontend and UI engineering.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(236,72,153,0.45)]"
                  : "bg-background/40 border-border/60 text-muted-foreground hover:border-primary/60 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-16 lg:gap-20 items-center">

          {/* LEFT — Circle carousel */}
          <div
            className="relative w-full h-72 md:h-[22rem] flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            {/* arrows */}
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 border border-border/60 hover:border-primary hover:text-primary transition-colors z-20"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 border border-border/60 hover:border-primary hover:text-primary transition-colors z-20"
            >
              <ChevronRight size={18} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center overflow-visible">
              {filteredSkills.map((skill, index) => {
                const offset = index - currentIndex;
                if (Math.abs(offset) > 1) return null;
                const opacity = offset === 0 ? 1 : 0.55;
                const zIndex = 10 - Math.abs(offset);

                return (
                  <div
                    key={skill.name}
                    className="absolute top-1/2 left-1/2 transition-all duration-500"
                    style={{ transform: getTransformForOffset(offset), opacity, zIndex }}
                  >
                    <div
                      className={cn(
                        "relative flex flex-col items-center justify-center text-center rounded-full w-48 h-48 sm:w-56 sm:h-56 backdrop-blur bg-gradient-to-br from-background/90 to-background/60 shadow-md border",

                        offset === 0
                          ? theme === "light"
                            ? "border-primary/70 shadow-[0_0_38px_rgba(236,72,153,0.6)]"
                            : "border-[#6ea8ff]/70 shadow-[0_0_40px_rgba(110,168,255,0.65)]"
                          : theme === "light"
                          ? "border-primary/10"
                          : "border-[#6ea8ff33]"
                      )}
                    >
                      <p className="text-[11px] text-muted-foreground mb-1">
                        {getCategoryLabel(skill.category)}
                      </p>

                      <h3 className="text-lg font-semibold tracking-wide mb-1">
                        {skill.name}
                      </h3>
                      <p
  className={cn(
    "text-xs font-medium",
    theme === "dark" ? "text-[#7eb0ff]" : "text-primary"
  )}
>
  {getLevelLabel(skill.level)} • {skill.level}%
</p>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Highlight section */}
          <div className="space-y-5">
            <p className={cn(
              "text-sm uppercase tracking-[0.2em]",
              theme === "dark" ? "text-[#7eb0ff]" : "text-primary/70"
            )}>
              Highlighted skill
            </p>

            <span
              className={cn(
                "px-3 py-1 rounded-full border text-xs inline-flex items-center",
                theme === "light"
                  ? "bg-primary/10 text-primary border-primary/40"
                  : "bg-[#6ea8ff1a] text-[#a9cfff] border-[#6ea8ff]/40"
              )}
            >
              {getCategoryLabel(currentSkill.category)}
            </span>

            <h3
              className={cn(
                "text-2xl md:text-3xl font-semibold",
                theme === "dark" ? "text-[#a7c4ff]" : "text-foreground"
              )}
            >
              {currentSkill.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {getLevelLabel(currentSkill.level)} ·{" "}
              <span
                className={cn(
                  "font-semibold",
                  theme === "dark" ? "text-[#7eb0ff]" : "text-primary"
                )}
              >
                {currentSkill.level}%
              </span>{" "}
              proficiency
            </p>

            <div className="mt-2">
              <div className="h-2 rounded-full bg-secondary/60 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-fuchsia-500 to-sky-400"
                  style={{ width: `${currentSkill.level}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Use the arrows, swipe, or category filters to explore more of your stack.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
