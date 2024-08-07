"use client";
import Brands from "@/component/Brands";
import CoreValues from "@/component/CoreValues";
import Header from "@/component/Header";
import Mission from "@/component/Mission";
import Services from "@/component/Services";

import TrustedBrands from "@/component/TrustedBrands";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <section className="flex min-h-screen max-w-[100vw] overflow-hidden flex-col items-center md:px-24 px-5 ">
        <Header />
        <CoreValues />
        {/* <TrustedBrands /> */}
        <Mission />
        <Services />
        {/* <Brands /> */}

        {/* <Testimonial /> */}
      </section>
    </main>
  );
}
