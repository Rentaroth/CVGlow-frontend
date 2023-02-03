import React from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

function SignForm() {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
}

export { SignForm }