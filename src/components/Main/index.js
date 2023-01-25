import React from "react";
import { Header } from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";

function Main() {
  return (
    <React.Fragment>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </React.Fragment>
  );
}

export { Main };