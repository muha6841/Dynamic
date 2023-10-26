import React from "react";
import Web_Banner from "../Components/Web_Banner";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import About_US from "../Components/About_US";
import CountUpComponent from "../Components/CountUpComponent";
import Experience from "../Components/Experience";
import ServicesBlock from "../Components/ServicesBlock";
import CategoriesBlock from "../Components/CategoriesBlock";
import Testimonials from "../Components/Testimonials";
import Team from "../Components/Team";
import Faq from "../Components/Faq";
import Sponsers from "../Components/Sponsers";
import Details_Form from "../Components/Details_Form";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MapHome from "../Components/Map";
builder.init("28eb0fd99ec54fa4a1615c40522a23d7");
import { BuilderComponent } from "@builder.io/react"
import { builder } from "@builder.io/react";

export function MyPage ({ builderData }) {
  return <>
    <BuilderComponent content={builderData} />
  </>
  } 

const Home = () => (
  <div className="wrapper">
    <Header />
    <Web_Banner
      webSlide1="assets/images/web-slide-1.jpg"
      slide1heading="Providing leading Business Solutions"
      slide1text="Our dynamci company offers a full range of consulting services in all the countries"
      webSlide2="assets/images/web-slide-2.jpg"
      slide2heading="Successful Careers take Collaboration."
      slide2text="We can develop innovative financing solutions to improve the lives of people in need"
      webSlide3="assets/images/web-slide-3.jpg"
      slide3heading="We are Commit to your Success"
      slide3text="We're here to offer the best support, to help you troubleshoot any business issues."
    />
    <ScrollToTopButton />
    <About_US />
    <CountUpComponent />
    <Experience />
    <ServicesBlock />
    <CategoriesBlock />
    <Team />
    <Faq />
    <Details_Form />
    <MapHome />
    <Footer />
  </div>
);

export default Home;