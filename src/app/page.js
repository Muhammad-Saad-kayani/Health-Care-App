import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Slider from "./Components/slider";
import LandingCard from "./Components/landingPage";
import MedicineCard from "./Components/medicineCard";
import Service from "./Components/service";
import Career from "./Components/career";
import Article from "./Components/article";
import Footer1 from "./Components/footer1";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <LandingCard />
      <MedicineCard />
      <Service />
      <Career />
      <Article />
      <Footer1 />
      <Footer />
    </>
  );
}
