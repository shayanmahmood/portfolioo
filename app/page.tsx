import dynamic from "next/dynamic";

const Clients = dynamic(() => import("@/components/Client"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/Experiences"), {
  ssr: false,
});
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const FloatingNav = dynamic(() =>
  import("@/components/ui/FloatingNav").then((mod) => ({
    default: mod.FloatingNav,
  }))
);

import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
