import HomeHero from "@/components/home/HomeHero";
import HomeSplit from "@/components/home/HomeSplit";
import HomeProblem from "@/components/home/HomeProblem";
import HomeWhy from "@/components/home/HomeWhy";
import HomeWhatWeDo from "@/components/home/HomeWhatWeDo";
import HomeProcess from "@/components/home/HomeProcess";
import HomeComparison from "@/components/home/HomeComparison";
import HomeWhoThisIsFor from "@/components/home/HomeWhoThisIsFor";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSplit />
      <HomeProblem />
      <HomeWhy />
      <HomeWhatWeDo />
      <HomeProcess />
      <HomeComparison />
      <HomeWhoThisIsFor />
      <HomeCTA />
    </main>
  );
}
