import LandingSection from "./LandingSection";
import ProductSection from "./ProductionSection/ProductSection";
import WalkthroughSection from "./WalkthroughSection/WalkthroughSection";
function Home({sort, sortProducts}) {
  return (
    <main>
      <LandingSection />
      <WalkthroughSection />
      <ProductSection sort={sort} sortProducts={sortProducts} />
    </main>
  );
}

export default Home;
