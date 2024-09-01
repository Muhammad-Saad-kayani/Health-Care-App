import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Slider from "./Components/slider";
import LandingCard from "./Components/landingCard";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <LandingCard/>
    <Footer/>
    </>
  );
}
