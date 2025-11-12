
import Hero from "@/components/sections/Hero";

import AboutStrip from "@/components/sections/AboutStrip";
// import ProductTabsGrid, { Product } from "@/components/sections/ProductTabsGrid";
import AboutKarloBan from "@/components/sections/AboutKarloBan";
import Testimonials from "@/components/sections/Testimonials";
import OurWork from "@/components/sections/OurWork";
import ContactUs from "@/components/sections/ContactUs";
import NewsSection from "@/components/sections/NewsSection";


export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <AboutKarloBan /> */}
      <AboutStrip/>
      {/* <OurWork/> */}
      <Testimonials />

   {/* <NewsSection /> */}
        {/* <ContactUs/> */}
    </main>
  );
}
