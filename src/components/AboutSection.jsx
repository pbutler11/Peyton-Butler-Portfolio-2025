import { Code, Handshake, Sparkles } from "lucide-react";
export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 pt-12 pb-28 px-4 relative"
      >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left space-y-8">
            <h3 className="text-2xl font-semibold">
              Front-End Engineer & Lifelong Learner
            </h3>

            <p className="text-muted-foreground">
              With over five years of experience in front-end development, I
              build responsive applications using modern frameworks like
              Angular. Much of my recent work has been in the medical SaaS
              space, where clarity and user trust matter deeply.
            </p>

            <p className="text-muted-foreground">
              Outside of work I’m also a ceramic artist. Working with clay
              inspires the way I design by teaching patience, intention, and an
              appreciation for small details. I’m always exploring new ideas and
              creating things that feel useful as well as beautiful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="public/Peyton Butler Resume Current.docx.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-4 md:pt-1">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Front-End Engineering</h4>
                  <p className="text-muted-foreground">
                    Build responsive, accessible interfaces, focusing on clarity
                    and smooth user interaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Engineering Mentorship</h4>
                  <p className="text-muted-foreground">
                    Support teammates and help others grow confidently.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cross-Team Collaboration</h4>
                  <p className="text-muted-foreground">
                    Work closely with engineers, product, and support to deliver
                    reliable features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
