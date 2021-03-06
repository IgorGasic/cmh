import React from "react";
import Hero from "../components/Home/HeroSection/Hero";
import FifthSection from "../components/Home/HomeFifthSection/FifthSection";
import FirstSection from "../components/Home/HomeFirstSection/FirstSection";
import FourthSection from "../components/Home/HomeFourthSection/FourthSection";
import SecondSection from "../components/Home/HomeSecondSection/SecondSection";
import ThirdSection from "../components/Home/HomeThirdSection/ThirdSection";

const Home = () => {
  return (
    <>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </>
  );
};

export default Home;
