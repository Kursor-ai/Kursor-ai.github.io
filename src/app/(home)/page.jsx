import {
  Ctc,
  FeatureInfo,
  HeroHome,
  Reviews,
  Accordian,
  Header,
  Features,
  Video,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Header home />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroHome />
        <Video/>
        {/* <main className="flex min-h-screen flex-col items-center justify-between"> */}
        <Features />
        <FeatureInfo />
        </main>
      
      
        <Reviews />
        <Accordian />
        <Ctc />
      {/* </main> */}
    </>
  );
}
