import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Broadcast theme to other components
const notifyTheme = (theme) => {
  window.dispatchEvent(
    new CustomEvent("theme-change", { detail: theme })
  );
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load stored theme (default = light)
    const stored = localStorage.getItem("theme") || "light";
    const isDark = stored === "dark";

    setIsDarkMode(isDark);

    // Apply to DOM
    document.documentElement.classList.toggle("dark", isDark);

    // Notify whole app on initial load
    notifyTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";

    // Update DOM
    document.documentElement.classList.toggle("dark", nextTheme === "dark");

    // Persist preference
    localStorage.setItem("theme", nextTheme);

    // Update internal state
    setIsDarkMode(nextTheme === "dark");

    // Notify SkillsSection + others
    notifyTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
