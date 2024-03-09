import React, { useState } from "react";
import { About, Hero, MobileNav, Nav, Projects, Services, Skills } from "@/components";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/** Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />

        {/** Hero section */}
        <Hero />

        <div className="relative z-[30]">
          {/** About */}
          <About />

          {/** Skills */}
          <Skills />

          {/** Services */}
          <Services />

          {/** Projects */}
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
