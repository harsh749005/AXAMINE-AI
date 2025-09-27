import React from "react";
import {
  Action,
  Department,
  Hero,
  HomeAbout,
  Services,
} from "../pageIndex";
import "../../main.css";
import { FooLinks, Footer, Header } from "../../Components/compIndex";
// import { useAuth } from "../../contexts/useAuth";
const Home = () => {
    // const { currentUser } = useAuth();
  return (
    <>
    <Header/>
      <Hero />
      <HomeAbout />
      <Department />
      <Services />
      <Action />
      <Footer />

    </>
  );
};

export default Home