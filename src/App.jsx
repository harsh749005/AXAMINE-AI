import { useState } from "react";
import "./App.css";
import "./main.css";
import { Footer, Header } from "./Components/compIndex";
import {
  Action,
  Department,
  Hero,
  HomeAbout,
  Services,
} from "./Pages/pageIndex";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HomeAbout />
      <Department />
      <Services />
      <Action />
      <Footer />
    </>
  );
}

export default App;
