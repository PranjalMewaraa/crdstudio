import React from "react";
import { Cover } from "../components/ui/Tagline";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-white dark:via-white dark:to-white">
        We build amazing websites at <Cover>warp speed</Cover>
      </h1>
    </div>
  );
}
