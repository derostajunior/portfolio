import React, { useState } from "react";
import { MobileNav, Nav } from "@/components";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        //#region Nav Bar
          <MobileNav nav={nav} closeNav={closeNav} />
          <Nav openNav={openNav} />
        //#endregion
      </div>
    </div>
  );
};

export default HomePage;
