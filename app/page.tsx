import Hero from "@/components/hero";
import Locations from "@/components/locations";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <Hero />
      <Locations />
      <Menu />
    </main>
  );
}
