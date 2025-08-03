import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Overview from "@/components/Overview";
import Configuration from "@/components/Configuration";
import FourBHK from "@/components/FourBHK";
import ThreeBHK from "@/components/ThreeBHK";
import OnlyImage from "@/components/OnlyImage";
import Amenities from "@/components/Amenities";
import SitePlan from "@/components/SitePlan";
import Connectivity from "@/components/Connectivity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Overview />
      <Configuration />
      <FourBHK />
      <ThreeBHK />
      <OnlyImage />
      <Amenities />
      <SitePlan />
      <Connectivity />
      <Footer />
    </div>
  );
}
