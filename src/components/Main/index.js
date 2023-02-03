import React from "react";
import { MainHeader } from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Footer } from "./components/Footer";

function Main() {
  return(
    <React.Fragment>
      <MainHeader />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </React.Fragment>
  );
}

export { Main }