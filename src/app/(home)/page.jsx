import {
  Ctc,
  FeatureInfo,
  HeroHome,
  Reviews,
  Accordian,
  Header,
  Features,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Header home />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroHome />
        <Features />
        <FeatureInfo />
        <Reviews />
        <Accordian />
        <Ctc />
      </main>
    </>
  );
}
