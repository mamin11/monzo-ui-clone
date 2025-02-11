import FeaturesComponent from "@/components/features";
import HeroComponent from "@/components/hero";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div>
    <Navigation />
    <HeroComponent />
    <FeaturesComponent />
    </div>
  )
}
