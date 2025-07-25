import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Overview from "@/components/Overview";
import Configuration from "@/components/Configuration";
import ImageSliderDemo from "@/components/ImageSliderDemo";
import FourBHK from "@/components/FourBHK";
import ThreeBHK from "@/components/ThreeBHK";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Overview />
      <Configuration />
      <FourBHK />
      <ThreeBHK />
    </div>
  );
}
