// import Accordian from "./components/Accordian";
// import Feature from "./components/Feature";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Header from "@/components/Header";
import HeroHome from "@/components/HeroHome";
import Feature from "@/components/Feature";
import FeatureInfo from "@/components/FeatureInfo";
import Reviews from "@/components/Reviews";
import AccordionSection from "@/components/Accordian";
import CTC from "@/components/CTC";
import Footer from "@/components/Footer";
// import HeroHome from "./components/HeroHome";
// import Reviews from "./components/Reviews";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import FeatureInfo from "./components/FeatureInfo";
// import CTC from "./components/CTC";
  
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />

        <HeroHome />

        <Feature />

        <FeatureInfo />

        <Reviews />

        <AccordionSection/>
        
        <CTC />

        <Footer />
      </main>
    </>
  );
}
