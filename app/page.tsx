import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Overview from "@/components/Overview";
import Configuration from "@/components/Configuration";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Overview />
      <Configuration />
    </div>
  );
}
