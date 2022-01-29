import LandingSection from "./LandingSection";
import ProductSection from "./ProductionSection/ProductSection";
import WalkthroughSection from "./WalkthroughSection/WalkthroughSection";

function Home() {
  return (
    <main>
      <LandingSection />
      <WalkthroughSection />
      <ProductSection />
    </main>
  );
}

export default Home;
