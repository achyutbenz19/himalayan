import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Locations from "@/components/locations";
import PopularItems from "@/components/popular";
import RewardDeals from "@/components/reward-deals";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <div className="lg:m-8 m-4">
        <Hero />
        <PopularItems />
        <Locations />
        <RewardDeals />
        <Blogs />
        <Testimonials />
      </div>
    </main>
  );
}
