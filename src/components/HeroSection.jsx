import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-20 relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 -z-10">

{/* 🌸 soft diagonal brand gradient */}
<div className="absolute inset-0 bg-gradient-to-br 
    from-[#522D5B]/60 
    via-transparent 
    to-[#FB7B6B]/40
    blur-xl" 
/>

{/* 🎨 top-left color bloom */}
<div className="absolute -top-52 -left-40 h-96 w-96 
    rounded-full bg-pink-500/30 blur-3xl" 
/>

{/* 💜 bottom-right bloom */}
<div className="absolute -bottom-48 -right-32 h-[28rem] w-[28rem] 
    rounded-full bg-purple-600/25 blur-[140px]" 
/>

{/* ✨ spotlight focused behind the PHOTO, not center */}
<div className="absolute inset-0 
    bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.18),transparent_60%)]
    dark:bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.07),transparent_60%)]" 
/>

{/* 🌫️ noise texture */}
<div className="absolute inset-0 bg-noise opacity-[0.12]" />

</div>


      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* LEFT: TEXT */}
          <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
  <span className="opacity-0 animate-fade-in text-foreground">
  Welcome! I&apos;m&nbsp;
  </span>
  <span className="text-name-gradient opacity-0 animate-fade-in-delay-1 whitespace-nowrap">
    Peyton Butler
  </span>
</h1>



            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I’m a front-end engineer with a love for thoughtful design. I’m
              always learning and exploring new ways to bring creativity and
              simplicity into complex workflows.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center md:justify-start">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* RIGHT: PHOTO */}
          <div className="flex-1 flex justify-center md:justify-end opacity-0 animate-fade-in-delay-2">
  <div className="relative w-48 h-48 md:w-72 md:h-72">
    {/* stronger but soft glow */}
    <div
      className="absolute inset-0 rounded-full 
                 bg-gradient-to-tr from-primary/50 via-purple-500/40 to-pink-400/40 
                 blur-3xl opacity-90"
      aria-hidden="true"
    />

    <img
      src="/profile-picture.jpg"
      alt="Peyton Butler"
      className="relative w-full h-full rounded-full object-cover 
                 border border-border shadow-2xl"
    />
  </div>
</div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
