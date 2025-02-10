import { FC } from "react";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Features, CallToAction, Reviews } from "./components/sections";

const Page: FC = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Reviews />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Page;
