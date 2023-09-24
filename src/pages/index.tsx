import Hero from "@/components/Hero/Hero";
import Separator from "@/components/shared/Separator/Separator";
import About from "@/components/About/About";
import RoadMap from "@/components/RoadMap/RoadMap";
import Tokenomics from "@/components/Tokenomics/Tokenomics";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <RoadMap />
      <Separator />
      <Tokenomics />
      <Separator />
      <Team />
    </>
  );
}
