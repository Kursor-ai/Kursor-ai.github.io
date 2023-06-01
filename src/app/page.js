import {
  Ctc,
  Feature,
  FeatureInfo,
  HeroHome,
  Reviews,
  Accordian
} from "@/components";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
  

        <HeroHome />

        <Feature />

        <FeatureInfo />

        <Reviews />

        <Accordian />

        <Ctc />

      </main>
    </>
  );
}
