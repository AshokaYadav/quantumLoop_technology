// import Header from '@/components/Header';
// import HeroSection from '@/components/HeroSection';
// import Features from '@/components/Features';

import FeatureList from "@/components/FeatureList";
import Features from "@/components/Features";
import Five from "@/components/Five";
import Four from "@/components/Five";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import PremiumDemos from "@/components/PremiumDemos";

const HomePage = () => {
  return (
    <div>
      {/* <Header/>
      <HeroSection/> */}
      <Five/>
      <FeatureList/>
      <PremiumDemos/>
      <Hero/>
      <Features/>
      <GetInTouch/>
      {/* <Header />
      <HeroSection />
      <Features /> */}
    </div>
  );
};

export default HomePage;
