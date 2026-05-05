import HomeHero from "@/components/home/HomeHero";
import HomeProblem from "@/components/home/HomeProblem";
import HomeComparison from "@/components/home/HomeComparison";
import HomeWhy from "@/components/home/HomeWhy";
import HomeWhatWeDo from "@/components/home/HomeWhatWeDo";
import HomeProcess from "@/components/home/HomeProcess";
import HomeCTA from "@/components/home/HomeCTA";

// Homepage answers the 5 questions in order:
// 1. What do you do?       → HomeHero
// 2. Who is it for?        → HomeProblem
// 3. Why should I care?    → HomeComparison
// 4. Why should I trust you? → HomeWhy
// 5. What do I do next?   → HomeCTA

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeProblem />
      <HomeComparison />
      <HomeWhy />
      <HomeWhatWeDo />
      <HomeProcess />
      <HomeCTA />
    </main>
  );
}
