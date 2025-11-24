import {
  ArrowRight,
  HeartPulse,
  Route,
  ShieldAlert,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Oncology SaaS Application",
    description:
      "Frontend engineering across clinical documentation, notifications, scheduling, and provider tools in a complex medical ecosystem.",
    icon: HeartPulse,
    tags: ["Angular", "HTML", "REST APIs"],
    role: "VieCure · Software Engineer II ",
  },
  {
    id: 2,
    title: "Supply Chain Platform",
    description:
      "Interactive interfaces and tracking tools to improve supply chain visibility using JavaScript.",
    icon: Route,
    tags: ["JavaScript", "HERE Maps", "Jenkins"],
    role: "Elemica · UI Engineer II",

  },
  {
    id: 3,
    title: "Public Safety Operations",
    description:
      "UI mockups and frontend features supporting critical response and field operations workflows.",
    icon: ShieldAlert,
    tags: ["TypeScript", "NgRx", "SCSS"],
    role: "Füsus · Frontend Engineer",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-16 pt-12 pb-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Experience <span className="text-primary"> Highlights</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real-world experience centered on better interfaces and smoother
          workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-border/60"
              >
                {/* Icon badge */}
                <div className="flex justify-center pt-6">
  <div
    className="
      w-16 h-16 rounded-full border border-primary/40
      bg-gradient-to-br from-primary/25 to-background
      flex items-center justify-center
      shadow-[0_0_35px_rgba(56,189,248,0.6)]
      animate-glow-soft
      transform transition-transform duration-300
      group-hover:scale-110
    "
  >
    <Icon className="w-8 h-8 text-primary" />
  </div>
</div>

                <div className="p-6 mt-4">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 min-h-[84px]">
  {project.description}
</p>

<div className="pt-2">
  <span className="text-xs font-medium text-muted-foreground">
    {project.role}
  </span>
</div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/peyton-butler-a6759b1a3/"
          >
            Connect on LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
