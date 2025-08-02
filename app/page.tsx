import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Overview from "@/components/Overview";
import Configuration from "@/components/Configuration";
import ImageSliderDemo from "@/components/ImageSliderDemo";
import FourBHK from "@/components/FourBHK";
import ThreeBHK from "@/components/ThreeBHK";
import ContactUs from "@/components/ContactForm";
import OnlyImage from "@/components/OnlyImage";
import Amenities from "@/components/Amenities";
import SitePlan from "@/components/SitePlan";

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
      <ContactUs />
    </div>
  );
}
