import { useState } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  const [showPresale, setShowPresale] = useState(false);

  const handlePresaleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const buyButton = document.querySelector('[data-presale-trigger]') as HTMLButtonElement;
      buyButton?.click();
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <Header onPresaleClick={handlePresaleClick} />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
